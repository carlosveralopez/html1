<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CiudadanoController;
use App\Http\Middleware\IdUserNumeric;

use App\Http\Controllers\CocheController;
use App\Http\Controllers\CiudadController;









Route::prefix('ciudadano')->group(function (){
    Route::middleware(Sesion::class)->group(function (){
        Route::prefix('{id}')->group(function (){
            Route::middleware(IdUserNumeric::class)->group(function (){
                Route::get('ciudad', [CiudadanoController::class, 'ciudad']);
                Route::get('coche', [CiudadanoController::class, 'coche']);
            });
        });
    });

});

Route::prefix('ciudad')->group(function (){
    Route::middleware(Sesion::class)->group(function (){
        Route::prefix('{id}')->group(function (){
            Route::middleware(IdUserNumeric::class)->group(function (){
                Route::get('ciudadano',[CiudadController::class, 'ciudadano']);
            });
        });
    });
});



Route::prefix('coche')->group(function (){
    Route::middleware(Sesion::class)->group(function (){
        Route::prefix('{id}')->group(function (){
            Route::middleware(IdUserNumeric::class)->group(function (){
                Route::get('ciudadano', [CocheController::class, 'ciudadano']);
            });
        });
    });
});






