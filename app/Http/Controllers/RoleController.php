<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RoleController extends Controller
{    
    /**
     * users
     * Devuelve los usuarios que tienen el rol asociado a la ID
     * 
     * @param  mixed $id
     * @return void
     */
    public function users($id){
        $rol=Role::find($id);

        if($rol==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe este rol',
                'data'    => null
            ]);
        }

        return $rol->users;
    }
}
