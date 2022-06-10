<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     * un mensaje se crea con la ID del emisor y la ID del receptor, ademas del cuerpo del mensaje y la fecha y la hora.
     * el boolean 'leido' cambia a true o 1 una vez que el receptor lee el mensaje.
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();

            $table->string('mensaje', 50);
            $table->date('fecha');
            $table->time('hora');
            $table->boolean('leido');
            $table->unsignedBigInteger('id_user_emisor');
            $table->unsignedBigInteger('id_user_receptor');

            $table->foreign('id_user_emisor')->references('id')->on('users');
            $table->foreign('id_user_receptor')->references('id')->on('users');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
}
