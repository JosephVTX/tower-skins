<?php

namespace App\Http\Controllers;

use App\Models\CardCustom;
use App\Http\Requests\StoreCardCustomRequest;
use App\Http\Requests\UpdateCardCustomRequest;

class CardCustomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        return inertia('CardCustoms/Index', [
            'cardCustoms' => CardCustom::with('template')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCardCustomRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(CardCustom $cardCustom)
    {
        //

        return inertia('CardCustoms/Show', [
            'cardCustom' => $cardCustom->load('template'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CardCustom $cardCustom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCardCustomRequest $request, CardCustom $cardCustom)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CardCustom $cardCustom)
    {
        //
    }
}
