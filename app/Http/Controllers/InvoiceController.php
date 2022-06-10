<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\Provider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

//--MODULO DE FACTURACION--1
//El módulo de Facturación consta de 2 controllers. 'Line' e 'Invoices'.
//Este controller se complementa al controller 'Line' para facturar productos.
class InvoiceController extends Controller
{    
    /**
     * create
     * Crea una factura con hora y fecha del tramite
     * 
     * @param  JSON $request
     * @return void
     */
    public function create(Request $request){
        $data=$request->only(['hora', 'fecha', 'id_empresa']);

        $request->validate([
            'hora'=> 'required|date_format:H:i',
            'fecha'=> 'required|date|date_format:Y/m/d',
            'id_empresa'=>'required|integer'
        ]);

        try{
            DB::table('invoices')->insert($data);
            return response()->json([
                'success' => true,
                'mensaje' => 'Factura creada con exito',
                'data'    => $data
            ], 200);

        }catch (\Exception $e){
            return response()->json([
                'success' => false,
                'mensaje' => $e->getMessage(),
                'data'    => $e->getTraceAsString(),
            ], 500);
        }

    }
    
    /**
     * get
     * Comprueva que exista una factura relacionada a un ID
     * 
     * @param  mixed $id
     * @return void
     */
    public function get($id){
        $invoice=Invoice::find($id);

        if($invoice==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe esta factura',
                'data'    => null
            ], 400);
        }

        return response()->json([
            'success' => true,
            'mensaje' => 'Factura recogida',
            'data'    => $invoice
        ], 200);
    }
    
    /**
     * empresa
     * Devuelve una factura a partir de su ID
     * @param  mixed $id
     * @return void
     */
    public function empresa($id){
        $factura=Invoice::find($id);

        if($factura==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe esta factura',
                'data'    => null
            ]);
        }

        return $factura->empresa;
    }
    
    /**
     * lineas
     * devuelve la factura de un producto a partir de su ID
     * @param  mixed $id
     * @return void
     */
    public function lineas($id){
        $factura=Invoice::find($id);

        if($factura==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe esta factura',
                'data'    => null
            ]);
        }

        return $factura->lineas;
    }
    
    /**
     * getFull
     * devuelve todas las facturas de productos
     * @param  mixed $id
     * @return void
     */
    public function getFull($id){
        $invoice=Invoice::find($id);

        if($invoice==null){
            return response()->json([
                'success' => false,
                'mensaje' => 'No existe esta factura',
                'data'    => null
            ], 400);
        }

        $invoice['lineas']=$invoice->lineas;

        return response()->json([
            'success' => true,
            'mensaje' => 'Empresa recogida',
            'data'    => $invoice
        ], 200);
    }

}
