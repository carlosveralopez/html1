<?php

namespace App\Http\Controllers;
use App\Models\Ciudadano;
use App\Models\Ciudad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CiudadController extends Controller
{
    public function ciudadano($id){
        $ciudad=Ciudad::find($id);

        if(!$ciudad){
            return response()->json([
                'mensaje' => 'No se ha encontrado ninguna ciudad'
            ]);
        }

        return $ciudad->ciudadano;
    }
}
