<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Date;
use App\Models\User;

class DateController extends Controller
{    
    /**
     * create
     * Crea una nueva Cita
     * 
     * @param  json $request Parametros para crear la cita
     * @return void
     */
    public function create(Request $request){
        $data=$request->only(['id_trabajador', 'id_cliente', 'hora', 'fecha', 'descripcion']);

        $request->validate([
            'id_trabajador' => 'required|numeric|digits:1',
            'id_cliente' =>  'required|numeric|digits:1',
            'hora'=> 'required|date_format:H:i',
            'fecha'=> 'required|date|date_format:Y/m/d',
            'descripcion'=>'nullable|string|max:255'
        ]);

        try{
            DB::table('dates')->insert($data);
            return response()->json([
                'success' => true,
                'mensaje' => 'Cita creada con exito',
                'data'    => $data
            ], 200);
        }catch (\Exception $e){
            return response()->json([
                'success' => false,
                'mensaje' => $e->getMessage(),
                'data'    => $e->getTraceAsString(),
            ], 500);
        }
    }
    
    /**
     * delete
     * Borra una cita a partir de su ID
     * 
     * @param  mixed $id
     * @return void
     */
    public function delete($id){
        $date = DB::table('dates')->where('id', $id)->first();
        if ($date === null) {
            return response()->json([
                'success' => false,
                'mensaje' => 'Cita no encontrado',
                'data'    => null
            ], 404);
        }

        DB::table('dates')->where('id', $id)->delete();
        return response()->json([
            'success' => true,
            'mensaje' => 'Cita borrado correctamente',
            'data'    => $date
        ]);
    }
    
    /**
     * getAll
     * Devuelve todas las citas
     * 
     * @return void
     */
    public function getAll(){
        return response()->json([
            'success' => true,
            'mensaje' => 'Todas las citas',
            'data'    => Date::all()
        ], 200);
    }
    
    /**
     * get
     * Devuelve una cita a partir de su ID
     * 
     * @param  mixed $id
     * @return void
     */
    public function get($id){
        return response()->json([
            'success' => true,
            'mensaje' => 'Todas las citas',
            'data'    => Date::find($id)
        ], 200);
    }
            
    
    
    /**
     * getDateUsers
     * Devuelve las citas de un cliente a partir de su ID
     * 
     * @param  mixed $id
     * @return void
     */
    public function getDateUsers($id){
        $user=User::find($id);

        if($user==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe este usuario',
                'data'    => null
            ]);
        }

        return response()->json([
            'success' => true,
            'mensaje' => 'Citas recogidas',
            'data' =>  Date::where('id_trabajador',$id)->orWhere('id_cliente',$id)->get()
        ], 200);
    }
}
