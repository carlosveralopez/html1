<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;

use App\Models\Coche;
use App\Models\Ciudad;

class Ciudadano
{
    use HasFactory;
  
    protected $fillable = [
        'DNI',
        'nombre',
        'apellido',
        'direccion',
        'id_ciudad'
    ];
    

    

    public function ciudad(){
        return $this->belongsTo(Ciudad::class, 'id_ciudad', 'id');
    }

    public function coche(){
        return $this->hasMany(Coche::class, 'id_ciudadano');
    }
}
