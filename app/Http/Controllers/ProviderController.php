<?php

namespace App\Http\Controllers;

use App\Models\Provider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProviderController extends Controller
{    
    /**
     * create
     * Crea un  nuevo proveedor
     * 
     * @param  mixed $request
     * @return void
     */
    public function create(Request $request){
        $data=$request->only(['nif', 'nombre', 'telefono', 'email', 'contacto']);

        $request->validate([
            'nif' => 'required|string|size:9',
            'nombre' =>  'required|string|max:30',
            'telefono'=> 'required|string|max:20',
            'email'=> 'required|email:rfc,dns|max:64',
            'contacto'=>'required|string|max:30'
        ]);

        try{
            DB::table('providers')->insert($data);
            return response()->json([
                'success' => true,
                'mensaje' => 'Empresa creada con exito',
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
     * get
     * devuelve un proveedor a partir de su ID
     * 
     * @param  mixed $id
     * @return void
     */
    public function get($id){
        $provider=Provider::find($id);

        if($provider==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe esta empresa',
                'data'    => null
            ], 400);
        }

        return response()->json([
            'success' => true,
            'mensaje' => 'Empresa recogida',
            'data'    => $provider
        ], 200);
    }
    
    /**
     * getAll
     * Devuelve tods los proveedores
     * @return void
     */
    public function getAll(){
        return response()->json([
            'success' => true,
            'mensaje' => 'Todas las empresas',
            'data'    => Provider::all()
        ], 200);
    }
    
    /**
     * delete
     * Borra un proveedor a partir de su ID
     * 
     * @param  mixed $id
     * @return void
     */
    public function delete($id){
        $provider=Provider::find($id);

        if($provider==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe esta empresa',
                'data'    => null
            ], 400);
        }

        DB::table('providers')->where('id', $id)->delete();

        return response()->json([
            'success' => true,
            'mensaje' => 'Empresa borrada con exito',
            'data'    => $provider
        ], 200);
    }
    
    /**
     * update
     * Actualiza los datos de un proveedor a partir de su ID y los nuevos datos
     * @param  mixed $request
     * @param  mixed $id
     * @return void
     */
    public function update(Request $request, $id){
        $data=$request->only(['nif', 'nombre', 'telefono', 'email', 'contacto']);

        $request->validate([
            'nif' => 'nullable|string|size:9',
            'nombre' =>  'nullable|string|max:30',
            'telefono'=> 'nullable|string|max:20',
            'email'=> 'nullable|email:rfc,dns|max:64',
            'contacto'=>'nullable|string|30'
        ]);

        $provider=Provider::find($id);

        if($provider==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe esta empresa',
                'data'    => null
            ]);
        }

        $nombre=$data['nombre'];
        $nif=$data['nif'];
        $contacto=$data['contacto'];
        $email=$data['email'];
        $telefono=$data['telefono'];

        $data=[];

        if(!empty($nombre)){
            $data['nombre']=$nombre;
        }

        if(!empty($nif)){
            $data['nif']=$nif;
        }

        if(!empty($contacto)){
            $data['contacto']=$contacto;
        }

        if(!empty($email)){
            $data['email']=$email;
        }

        if(!empty($telefono)){
            $data['telefono']=$telefono;
        }

        Provider::where('id', $id)->update($data);

        $provider=Provider::find($id);

        return response()->json($provider, 200);

    }
    
    /**
     * invoices
     * Devuelve las facturas a un proveedor a partir de su ID
     * @param  mixed $id
     * @return void
     */
    public function invoices($id){
        $empresa=Provider::find($id);

        if($empresa==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe esta empresa',
                'data'    => null
            ]);
        }

        return $empresa->invoices;
    }
}
