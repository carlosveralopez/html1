<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    
    /**
     * category
     *  un producto solo puede tener una categoria
     * @return void
     */
    public function category(){
        return $this->belongsTo(Category::class, 'id_categoria', 'id');
    }
}
