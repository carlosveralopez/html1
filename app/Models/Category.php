<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    
    /**
     * products
     * un producto solo puede tener 1 categoria
     * @return void
     */
    public function products(){
        return $this->hasMany(Product::class, 'id_categoria');
    }
}
