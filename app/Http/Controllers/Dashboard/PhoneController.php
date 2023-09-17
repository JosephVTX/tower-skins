<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Phone\StoreRequest;
use App\Http\Requests\Phone\UpdateRequest;
use App\Models\Phone;
use App\Models\PhoneCategory;

class PhoneController extends Controller
{
    //

    public function index()
    {

        $search = request()->query('search');

        $phones = Phone::with('product', 'template', 'phoneCategory')->whereHas('product', function ($query) use ($search) {
            $query->where('name', 'LIKE', "%{$search}%")->orWhere('phone_category_id', 'LIKE', "%{$search}%");
        })->orderBy('updated_at', 'desc')->get();

        $phoneCategories = PhoneCategory::with('template')->get();


        return inertia('Dashboard/Phones/Index', [
            'phones' => $phones,
            'phoneCategories' => $phoneCategories
        ]);
    }

    public function store(StoreRequest $request)
    {

        $phone = Phone::create([
            'phone_category_id' => request()->phone_category_id
        ]);

        

        $phone->product()->create([
            'name' => $request->name,
            'price' => $request->price,
            'status' => 'active',
            'description' => $request->description
        ]);


        if($request->file('file')){

            $file_url = $request->file('file') ? $request->file('file')->store('products', 'public') : null;
            $host = request()->getSchemeAndHttpHost();

            $phone->product()->update([
                'image' => $host . '/storage/' . $file_url,
            ]);
        }

        return redirect()->back()->with('success', 'Phone created successfully');

    }

    public function update(UpdateRequest $request)
    {

        $phone = Phone::find($request->id);

        $phone->update([
            'phone_category_id' => $request->phone_category_id
        ]);


        $phone->product()->update([
            'name' => $request->name,
            'price' => $request->price,
            'status' => $request->status,
            'description' => $request->description

        ]);

        if ($request->file('file')) {

            $file_url = $request->file('file') ? $request->file('file')->store('products', 'public') : $phone->product->image;
            $host = request()->getSchemeAndHttpHost();

            $phone->product()->update([
                'image' => $host . '/storage/' . $file_url,
            ]);
        }

        return redirect()->back()->with('success', 'Phone updated successfully');

    }

    public function destroy(Phone $phone)
    {


        $phone->product()->delete();
        $phone->delete();
        return redirect()->back()->with('success', 'Phone deleted successfully');
    }

}