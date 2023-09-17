<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Models\CardCategory;
use App\Http\Requests\StoreCardCategoryRequest;
use App\Http\Requests\UpdateCardCategoryRequest;

class CardCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        return inertia('CardCategories/Index', [
            'cardCategories' => CardCategory::with('template')->get(),
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
    public function store(StoreCardCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(CardCategory $cardCategory)
    {
        //

        $slug = $cardCategory->slug;

        return inertia('Cards/Index', [
            'cardCategory' => $cardCategory,
            'cards' => Card::with('template', 'product')->whereHas('cardCategory', function ($query) use ($slug) {
                $query->where('slug', $slug);
            })->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CardCategory $cardCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCardCategoryRequest $request, CardCategory $cardCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CardCategory $cardCategory)
    {
        //
    }
}
