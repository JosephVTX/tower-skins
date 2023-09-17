<?php

namespace App\Http\Controllers;

use Darryldecode\Cart\Facades\CartFacade as Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class CartController extends Controller
{
    //

    public $cart;
    public $session_id; 
    public function __construct()
    {      
        $this->cart = Cart::session("cart");
    }
    public function index()
    {
        return inertia('Cart/Index', [
            'cart' => $this->cart->getContent(),
            'total' => number_format($this->cart->getTotal(), 2),
        ]);
    }


    public function store(Request $request)
    {



        $this->cart->add([
            'id' => $request->id,
            'name' => $request->name,
            'price' => $request->price,
            'quantity' => $request->quantity,
            'attributes' => [
                'image' => $request->image,
                'description' => $request->description,
            ],

        ]);

        return redirect()->route('cart.index');
    }

    public function update(Request $request)
    {
        $this->cart->update($request->id, [
            'quantity' => [
                'relative' => false,
                'value' => $request->quantity,
            ],
        ]);

        return redirect()->route('cart.index');
    }

    public function destroy(Request $request)
    {


        $this->cart->remove($request->id);

        return redirect()->route('cart.index');
    }
}
