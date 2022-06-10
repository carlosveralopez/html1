<?php

namespace App\Http\Controllers;

use App\Models\Date;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{    
    /**
     * getAll
     * devuelve todos los usuarios
     * @return void
     */
    public function getAll(){
        return response()->json([
            'success' => true,
            'mensaje' => 'Usuarios recogidos con exito',
            'data'    => User::all()
        ], 200);
    }
    
    /**
     * get
     * Devuelve un usuario a partir de su ID
     * @param  mixed $id
     * @return void
     */
    public function get($id){
        $user=User::find($id);

        if($user==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe este usuario',
                'data'    => null
            ], 400);
        }

        return response()->json([
            'success' => true,
            'mensaje' => 'Usuario recogido',
            'data'    => $user
        ], 200);
    }

   
    
    /**
     * create
     * Crea un usuario
     * @param  mixed $request
     * @return void
     */
   /*public function create(Request $request){
        $data=$request->only(['nombre', 'apellido', 'password', 'email', 'id_rol']);

        $request->validate([
            'nombre' => 'required|string|max:32',
            'apellido' =>  'nullable|string|max:32',
            'password'=> 'required|max:255',
            'email'=> 'required|email:rfc,dns|max:64',
            'id_rol'=> 'required|string|max:10',
        ]);

        $data['password']=Hash::make($data['password']);

        try{
            DB::table('users')->insert($data);
            return response()->json([
                'success' => true,
                'mensaje' => 'Usuario creado con exito',
                'data'    => $data
            ], 200);
        }catch (\Exception $e){
            return response()->json([
                'success' => false,
                'mensaje' => $e->getMessage(),
                'data'    => $e->getTraceAsString(),
            ], 500);
        }
    }*/

    public function create(Request $request) {
        $request->validate([
            'nombre' => 'required|string|max:32',
            'apellido' =>  'nullable|string|max:32',
            'email' => 'required|email',
            'password' => 'required',
            'id_rol'=> 'required|string|max:10',            
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->id_rol = $request->id_rol;
        $user->apellido = $request->apellido;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'success' => true,
            'mensaje' => 'Usuario creado con exito',
            'data'    => $data
        ], 200);    
    }

    
    /**
     * delete
     * borra un usuario
     * @param  mixed $id
     * @return void
     */
    public function delete($id) {

        $user = DB::table('users')->where('id', $id)->first();

        if ($user === null) {
            return response()->json([
                'success' => false,
                'mensaje' => 'Usuario no encontrado',
                'data'    => null
            ], 404);
        }

        DB::table('users')->where('id', $id)->delete();
        return response()->json([
            'success' => true,
            'mensaje' => 'Usuario borrado correctamente',
            'data'    => $user
        ]);

    }
    
    /**
     * rol
     * Devuelve el rol de un usuario a partir de su ID
     * @param  mixed $id
     * @return void
     */
    public function rol($id){
        $user = User::find($id);
        if($user === null) return 'El usuario no EXISTE';

        //DB::connection()->enableQueryLog();

        $rol = $user->role;
       // dd(DB::getQueryLog());
        if($rol === null) return 'ROL no encontrado';

        return $user->role->toJson();
    }
    
    /**
     * update
     * actuliza los datos de un usuario
     * @param  mixed $request
     * @param  mixed $id
     * @return void
     */
    public function update(Request $request, $id){
        $data=$request->only(['nombre', 'apellido', 'password', 'email', 'id_rol']);

        $validation = $request->validate([
            'nombre' => 'nullable|string|max:32',
            'apellido' =>  'nullable|string|max:32',
            'password'=> 'nullable|string|max:255',
            'email'=> 'nullable|email:rfc,dns|max:255',
            'id_rol'=>'nullable|numeric|digits:1'
        ]);

        if (!$validation){
            return response()->json(null, 403);
        }

        //dd($validation);

        $data=$request->only(['nombre', 'apellido', 'password', 'email', 'id_rol']);

        $user=User::find($id);

        if($user==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe este usuario',
                'data'    => null
            ]);
        }

        $nombre=$data['nombre'];
        $apellido=$data['apellido'];
        $password=$data['password'];
        $email=$data['email'];
        $id_rol=$data['id_rol'];

        $data=[];

        if(!empty($id_rol)){
            if($id_rol<1 || $id_rol>4){
                return response()->json([
                    'success' => false,
                    'mensaje' => 'No existe este rol',
                    'data'    => null
                ]);
            }else{
                $data['id_rol']=$id_rol;
            }
        }

        if(!empty($nombre)){
            $data['nombre']=$nombre;
        }

        if(!empty($apellido)){
            $data['apellido']=$apellido;
        }

        if(!empty($password)){
            $data['password']=Hash::make($data['password']);
        }

        if(!empty($email)){
            $data['email']=$email;
        }

        User::where('id', $id)->update($data);

        $user=User::find($id);

        return response()->json($user, 200);

    }
    
    /**
     * task
     * devuelve las tareas de un usuario
     * @param  mixed $id
     * @return void
     */
    public function task($id){
        $user=User::find($id);

        if($user==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe este usuario',
                'data'    => null
            ]);
        }

        return $user->tasks;
    }

}
