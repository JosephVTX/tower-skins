<?php

namespace App\Http\Controllers;

use App\Models\Notebook;
use App\Http\Requests\StoreNotebookRequest;
use App\Http\Requests\UpdateNotebookRequest;

class NotebookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        return inertia('Notebooks/Index', [
            'notebooks' => Notebook::with('template')->get(),
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
    public function store(StoreNotebookRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Notebook $notebook)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Notebook $notebook)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNotebookRequest $request, Notebook $notebook)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Notebook $notebook)
    {
        //
    }
}
