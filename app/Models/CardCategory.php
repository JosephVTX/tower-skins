<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
    ];


    public function cards()
    {
        return $this->hasMany(Card::class);
    }

    public function template()
    {
        return $this->morphOne(Template::class, 'templeable');
    }
    
}
