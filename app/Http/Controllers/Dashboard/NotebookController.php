<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Notebook\StoreRequest;
use App\Http\Requests\Notebook\UpdateRequest;
use App\Models\Notebook;
use App\Models\NotebookCategory;

class NotebookController extends Controller
{
    //

    public function index()
    {   

        $search = request()->query('search');

        $notebooks = Notebook::with('product', 'template', 'notebookCategory')->whereHas('product', function ($query) use ($search) {    
            $query->where('name', 'LIKE', "%{$search}%");
        })->orderBy('updated_at', 'desc')->get();

        $notebookCategories = NotebookCategory::get();


        return inertia('Dashboard/Notebooks/Index', [
            'notebooks' => $notebooks,
            'notebookCategories' => $notebookCategories
        ]);
    }

    public function store(StoreRequest $request)
    {

        $notebook = Notebook::create([
            'notebook_category_id' => request()->notebook_category_id
        ]);

        $file_url = $request->file('file') ? $request->file('file')->store('products', 'public') : $notebook->product->image;

        $host = request()->getSchemeAndHttpHost();

        $notebook->product()->create([
            'name' => $request->name,
            'price' => $request->price,
            'image' => $host . '/storage/' . $file_url,
            'status' => 'active', // 'active' or 'inactive
            'description' => $request->description
        ]);

        return redirect()->back()->with('success', 'Notebook created successfully');

    }

    public function update(UpdateRequest $request)
    {

        $notebook = Notebook::find($request->id);

        $notebook->update([
            'notebook_category_id' => $request->notebook_category_id
        ]);

        $file_url = $request->file('file') ? $request->file('file')->store('products', 'public') : $notebook->product->image;
        $host = request()->getSchemeAndHttpHost();


        $notebook->product()->update([
            'name' => $request->name,
            'price' => $request->price,
            'image' => $host . '/storage/' . $file_url,
            'status' => $request->status,
            'description' => $request->description

        ]);

        return redirect()->back()->with('success', 'Notebook updated successfully');

    }
}
