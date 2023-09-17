<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    use HasFactory;
    protected $fillable = [
        'phone_category_id'
    ];

    public function template()
    {
        return $this->morphOne(Template::class, 'templeable');
    }

    public function product()
    {
        return $this->morphOne(Product::class, 'producteable');
    }

    public function phoneCategory()
    {   
        // with template phoneCategory
        return $this->belongsTo(PhoneCategory::class);
    }
}