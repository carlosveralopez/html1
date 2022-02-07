<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CiudadanoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        
        return [
            'DNI'=>$this->faker->unique(),
            'nombre' => $this->faker->name(),
            'apellido'=> Str::random(5),
            'direccion'=> Str::random(10),
            'id_ciudad' =>null
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    
}
