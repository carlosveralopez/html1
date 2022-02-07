<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{

    public function user($id){
        $task=Task::find($id);

        if(!$task){
            return response()->json([
                'mensaje' => 'No se han encontrado datos'
            ]);
        }

        return $task->user;
    }

}
