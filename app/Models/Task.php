<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    //FUNCIONA    
    /**
     * user
     * un usuario puede tener varias tareas
     * @return void
     */
    public function user(){
        return $this->belongsTo(User::class, 'id_usuario', 'id');
    }
}
