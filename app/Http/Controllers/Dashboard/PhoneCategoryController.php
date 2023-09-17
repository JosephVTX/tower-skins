<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\PhoneCategory\StoreRequest;
use App\Http\Requests\PhoneCategory\UpdateRequest;
use App\Models\PhoneCategory;

class PhoneCategoryController extends Controller
{
    //

    public function index()
    {

        $search = request()->query('search');

        $phoneCategories = \App\Models\PhoneCategory::with('template')->where('name', 'LIKE', "%{$search}%")->get();


        return inertia('Dashboard/Phones/Category/Index', [
            'phoneCategories' => $phoneCategories,
        ]);
    }

    public function store(StoreRequest $request)
    {

        $phoneCategory = PhoneCategory::create($request->validated());

        

        if($request->file('file')){

            $file_url = $request->file('file') ? $request->file('file')->store('products', 'public') : null;
            $host = request()->getSchemeAndHttpHost();

            $phoneCategory->template()->create([
                'demo' => $host . '/storage/' . $file_url,
                'base' => $host . '/storage/' . $file_url,
            ]);
        }

        


        return redirect()->back()->with('success', 'Phone Category Created Successfully');
    }

    public function update(UpdateRequest $request)
    {

        $phoneCategory = PhoneCategory::find($request->id);

       

        $phoneCategory->update($request->validated());

        if($request->file('file')){

            $file_url = $request->file('file') ? $request->file('file')->store('products', 'public') : null;
            $host = request()->getSchemeAndHttpHost();

            $phoneCategory->template()->update([
                'demo' => $host . '/storage/' . $file_url,
                'base' => $host . '/storage/' . $file_url,
            ]);
        }

        return redirect()->back()->with('success', 'Phone Category Updated Successfully');
    }
}
