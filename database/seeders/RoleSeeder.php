<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $rols = [
            ['name' => 'Admin'],
            ['name' => 'User'],

        ];


        foreach ($rols as $rol) {
            \Spatie\Permission\Models\Role::create($rol);

        }
    }
}
