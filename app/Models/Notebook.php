<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notebook extends Model
{
    use HasFactory;

    protected $fillable = [
        'notebook_category_id'
    ];


    public function template()
    {
        return $this->morphOne(Template::class, 'templeable');
    }

    public function product()
    {
        return $this->morphOne(Product::class, 'producteable');
    }

    public function notebookCategory()
    {
        return $this->belongsTo(NotebookCategory::class);
    }
}