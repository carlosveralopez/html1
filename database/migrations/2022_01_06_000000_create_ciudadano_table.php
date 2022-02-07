<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCiudadanoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ciudadano', function (Blueprint $table) {

            $table->id();
            $table->string('nombre', 20);
            $table->string('DNI', 10)->unique();
            $table->string('apellido', 20);
            $table->string('direccion', 30);
            $table->string('id_ciudad', 30)->nullable();
            $table->timestamps();

            $table->foreign('id_ciudad')->references('id')->on('ciudad')
            ->onDelete('set null');

        });

       

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ciudadano');
    }
}
