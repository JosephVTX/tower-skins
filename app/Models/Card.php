<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;
    protected $fillable = [
        'card_category_id',
    ];


    public function template()
    {
        return $this->morphOne(Template::class, 'templeable');
    }

    public function product()
    {
        return $this->morphOne(Product::class, 'producteable');
    }

    public function cardCategory()
    {
        return $this->belongsTo(CardCategory::class);
    }
}