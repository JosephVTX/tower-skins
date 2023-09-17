<?php

namespace App\Faker;

use Faker\Provider\Base;

class FrameworkProvider extends Base
{

    public function img($width = "640", $heigth = "480"): string
    {
        return 'https://placehold.co/' . $width . 'x' . $heigth . '/' . str_replace("#", "", $this->generator->hexColor()) . '/FFFFFFF/png';
    }
}
