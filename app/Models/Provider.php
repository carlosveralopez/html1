<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    use HasFactory;
    
    /**
     * invoices
     * una empresa proveedora puede tener varias facturas a su nombre
     * @return void
     */
    public function invoices(){
        return $this->hasMany(Invoice::class, 'id_empresa');
    }
}
