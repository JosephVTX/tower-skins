<?php

namespace App\Http\Controllers;

use App\Models\Phone;
use App\Models\PhoneCategory;
use App\Http\Requests\StorePhoneCategoryRequest;
use App\Http\Requests\UpdatePhoneCategoryRequest;

class PhoneCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        return inertia('PhoneCategories/Index', [
            'phoneCategories' => PhoneCategory::with('template')->orderBy('created_at', 'desc')->get(),
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
    public function store(StorePhoneCategoryRequest $request)
    {
        //

        $phoneCategory = PhoneCategory::create($request->validated());

        if ($request->hasFile('file')) {
            
            $phoneCategory->addMediaFromRequest('file')->toMediaCollection('phone_categories');
        }

        return to_route('dashboard.phones-categories');
    }

    /**
     * Display the specified resource.
     */
    public function show(PhoneCategory $phoneCategory)
    {
        //

        $slug = $phoneCategory->slug;

        return inertia('Phones/Index', [
            'phoneCategory' => $phoneCategory,
            'phones' => Phone::with('template', 'product')->whereHas('phoneCategory', function ($query) use ($slug) {
                $query->where('slug', $slug);
            })->get(),
        ]);

        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PhoneCategory $phoneCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePhoneCategoryRequest $request, PhoneCategory $phoneCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PhoneCategory $phoneCategory)
    {
        //
    }
}
