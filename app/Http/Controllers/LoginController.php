<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{    
    public $user;
    /**
     * login
     * loguea un usuario con nombre y contraseña o con email y contraseña
     * genera un token de inicio de sesion
     * 
     * @param  json $request
     * @return void
     */
    public function login(Request $request){
        $credentials=$request->validate([
            'email' => 'nullable',
            'nombre'=> 'nullable',
            'password' => 'required'
        ]);

        if(Auth::check()){
            return response()->json([
                'success' => false,
                'mensaje' => 'Ya hay un usuario logueado',
                'data'    => null
            ], 400);
        }

        $datosLogin['password']=$credentials['password'];

        if($credentials['email']==null){
            $datosLogin['nombre']=$credentials['nombre'];
        }

        if($credentials['nombre']==null){
            $datosLogin['email']=$credentials['email'];
        }

        if(Auth::attempt($datosLogin)){
            $user=Auth::user();
            return response()->json([
                'success' => true,
                'mensaje' => 'SESION INICIADA',
                'data'    => [
                    $user,
                    $user->createToken('loginController')->accessToken
                ]
            ]);
        }

        return response()->json([
            'success' => false,
            'mensaje' => 'No se ha podido loguear',
            'data'    => null
        ], 400);
    }

    
    
    /**
     * logout
     * cierra la sesion de un usuario
     * el usuario debe estar logueado anteriormente
     * 
     * @return void
     */
    public function logout(){
        
            
            auth()->user()->tokens()->delete();
            return response()->json([
                'success' => true,
                'mensaje' => 'SESION CERRADA',
                'data'    => [
                    
                ]
            ]);

        

    }
    
    /**
     * getData
     * devuelve los datos del usuario
     * 
     * @return void
     */
    public function getData(){
        $user=Auth::user();

        dd($user);

        return response()->json([
            'success' => true,
            'mensaje' => 'DATOS DE USUARIO',
            'data'    => $user
        ]);
    }
}
