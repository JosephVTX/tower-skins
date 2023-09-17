<?php

namespace App\Http\Controllers\Libelula;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;

class ShopController extends Controller
{
    //

    public $session_id; 
    public function __construct()
    {      
        $this->session_id = Session::getId();

    }
    public function index()
    {


        /* 
        
            {
"appkey": "588e5e10-d794-4910-91d2-b3952b54df4d",
"email_cliente": "carlos.gutierrez@todotix.com",
"identificador": "3072192223311279",
"callback_url": "http://www.misitioweb.com/api/pago-exitoso?id=02d5481d-26a4-4a1e-82ea-bc18398875a7",
"url_retorno": "http://www.misitioweb.com/carrito-compras?id=9b61dbd3-9e6b-4424-9fd6-960c5e7177d0",
"descripcion": "Pago Compra Online",
"nombre_cliente": "Carlos",
"apellido_cliente": "Gutierrez",
"nit": "33221144",
"razón_social": "CGuiterrez",
"ci": "321654987",
"fecha_vencimiento": "2021-12-31 23:59",
"lineas_detalle_deuda": [
{ "concepto":"TEST PRODUCTO 1", "cantidad":2, "costo_unitario":100, "descuento_unitario":0 },
{ "concepto":"TEST PRODUCTO 2", "cantidad":1, "costo_unitario":250, "descuento_unitario":0 },
{ "concepto":"TEST PRODUCTO 3", "cantidad":3, "costo_unitario":50, "descuento_unitario":10 }], "lineas_metadatos": [
{ "nombre":"Promo", "dato":"Liquidación especial de invierno" },
{ "nombre":"Vendedor", "dato":"Juan Perez" },
{ "nombre":"Tienda", "dato":"Tienda Virtual 001" } ]
}
        */
        /* $data = [
            "appkey" => env("LIBELULA_APP_KEY"),
            "email_cliente" => auth()->user()->email,
            "identificador" => time(),
            "callback_url" => "http://www.misitioweb.com/api/pago-exitoso?id=02d5481d-26a4-4a1e-82ea-bc18398875a7",
            "url_retorno" => "http://www.misitioweb.com/carrito-compras?id=9b61dbd3-9e6b-4424-9fd6-960c5e7177d0",
            "descripcion" => "Pago Compra Online",
            "nombre_cliente" => auth()->user()->name,
        ]; */

        dd(session()->getId());

    }
}
