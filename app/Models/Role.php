<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    //FUNCIONA    
    /**
     * users
     * un usuario solo puede tener un rol, pero un mismo rol puede estar asociado a varios usuarios
     * @return void
     */
    public function users(){
        return $this->hasMany(User::class, 'id_rol');
    }
}
