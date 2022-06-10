<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ErrorController extends Controller
{    
    /**
     * sesion
     * Error devuelto en caso de no haber iniciado sesion
     * 
     * @return void
     */
    public function sesion(){
        return response()->json([
            'success' => false,
            'message' => 'No has iniciado sesion',
            'data' => null
        ], 401);
    }
}
