<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardCustom extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'price',
    ];

    public function template()
    {
        return $this->morphOne(Template::class, 'templeable');
    }
}
