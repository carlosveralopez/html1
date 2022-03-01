<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = request(['email', 'password','name']);
        $credentials2 = request(['email', 'password']);

        if(Auth::check()){
            return response()->json([
                'mensaje' => 'Ya hay un usuario logueado'
            ], 400);
        }

        if (!Auth::attempt($credentials)||!Auth::attempt($credentials2)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $user = $request->user();
        return $this->respondWithToken($user);
    }

    public function user()
    {
        return response()->json(auth()->user());
    }

    
    public function logout(Request $request)
    {
        

        if($request==null){
            return response()->json([
                
                'mensaje' => 'El usuario no esta logueado',
                
            ]);
        }
        $request->user()->token()->revoke();
        

        return response()->json([
            
            'mensaje' => 'El usuario ha cerrado la sesion',
            
        ]);
    }

    
    protected function respondWithToken($user)
    {
        
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse($token->expires_at)->toDateTimeString()
        ]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(),400);
        }

        $user = User::create(array_merge(
            $validator->validate(),
            ['password' => bcrypt($request->password)]
        ));

        return response()->json([
            'message' => '¡Usuario registrado exitosamente!',
            'user' => $user
        ], 201);
    }
}