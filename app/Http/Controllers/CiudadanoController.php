<?php

namespace App\Http\Controllers;


use App\Models\Ciudadano;


class CiudadanoController extends Controller
{   
    public function get($id){
        $Ciudadano=Ciudadano::find($id);

        if($Ciudadano==null){
            return response()->json([
                'mensaje' => 'No existe esta persona'
            ], 400);
        }

        return response()->json([
            'Ciudadano'    => $Ciudadano
        ], 200);
    }

   



    public function Ciudad($id){
        $Ciudadano = Ciudadano::find($id);
        if(!$Ciudadano) return 'No existe esta persona';

        $ciudad = $Ciudadano->ciudad;
      
        if(!$ciudad) return 'Esta ciudad no existe';

        return $Ciudadano->ciudad->toJson();
    }



    public function task($id){
        $Ciudadano=Ciudadano::find($id);

        if(!$Ciudadano){
            return response()->json([
                'mensaje' => 'El usuario no se ha encontrado'
            ]);
        }

        return $Ciudadano->tasks;
    }

}
