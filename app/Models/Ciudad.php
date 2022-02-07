<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ciudad extends Model
{
    use HasFactory;
    protected $fillable = [
        'provincia',
        'pais'
    ];
    
    public function ciudadano(){
        return $this->hasMany(Ciudadano::class, 'id_ciudad');
    }
}
