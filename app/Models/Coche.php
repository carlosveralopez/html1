<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coche extends Model
{
    use HasFactory;
    protected $fillable = [
        'modelo',
        'matricula',
        'dueño'
    ];
    
    public function ciudadano(){
        return $this->belongsTo(Ciudadano::class, 'id_ciudadano', 'id');
    }
}
