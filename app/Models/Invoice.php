<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;
    
    /**
     * empresa
     * una empresa puede tener varias facturas, pero una factura solo pude realizarse a una empresa
     * @return void
     */
    public function empresa(){
        return $this->belongsTo(Provider::class, 'id_empresa', 'id');
    }
    
    /**
     * lineas
     * una factura puede contener varias lineas
     * las lineas representan las cantidades de productos facturadas
     * 
     * @return void
     */
    public function lineas(){
        return $this->hasMany(Line::class, 'invoice_id');
    }
}
