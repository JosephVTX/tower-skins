<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotebookCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
    ];

    public function notebooks()
    {
        return $this->hasMany(Notebook::class);
    }

    public function template()
    {
        return $this->morphOne(Template::class, 'templeable');
    }
}
