<?php

namespace App\Http\Controllers;

use App\Models\Notebook;
use App\Models\NotebookCategory;
use App\Http\Requests\StoreNotebookCategoryRequest;
use App\Http\Requests\UpdateNotebookCategoryRequest;

class NotebookCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        return inertia('NotebookCategories/Index', [
            'notebookCategories' => NotebookCategory::with('template')->get(),
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
    public function store(StoreNotebookCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(NotebookCategory $notebookCategory)
    {
        //

        $slug = $notebookCategory->slug;

        return inertia('Notebooks/Index', [
            'notebookCategory' => $notebookCategory,
            'notebooks' => Notebook::with('template', 'product')->whereHas('notebookCategory', function ($query) use ($slug) {
                $query->where('slug', $slug);
            })->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(NotebookCategory $notebookCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNotebookCategoryRequest $request, NotebookCategory $notebookCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NotebookCategory $notebookCategory)
    {
        //
    }
}
