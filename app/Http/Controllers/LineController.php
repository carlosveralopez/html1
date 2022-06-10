<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rules\In;

  //--Módulo de Facturación--2
  // Hace referencia a la cantidad de productos comprados en una factura.
class LineController extends Controller
{   

    /**
     * create
     * crea la factura de un producto
     * @param  json $request
     * @return void
     */
    public function create(Request $request){
        $data=$request->only(['invoice_id', 'product_id', 'cantidad']);

        $request->validate([
            'invoice_id'=>'required|integer',
            'product_id'=>'required|integer',
            'cantidad' => 'required|integer'
        ]);

        $factura=Invoice::find($data['invoice_id']);
        $producto=Product::find($data['product_id']);
        
    //Comprovamos que existan tanto la factura como el producto.
    //En caso de que no exista devolvemos error.
        
        if($factura==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe esta factura',
                'data'    => null
            ], 400);
        }

        if($producto==null) {
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe este producto',
                'data' => null
            ], 400);
        }

        DB::table('lines')->insert($data);

        return response()->json([
            'success' => true,
            'mensaje' => 'Linea creada con exito',
            'data'    => $data
        ], 200);
    }
}
