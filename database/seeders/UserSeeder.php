<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        User::create([
            'name' => 'Randym Gampi',
            'email' => 'randym@gmail.com',
            'password' => bcrypt('randym@gmail.com'),

        ]);

        $admin_user = User::create([
            'name' => 'Tower Skins',
            'email' => 'towerskins@gmail.com',
            'password' => bcrypt('12345678'),
        ]);

        $admin_user->assignRole('Admin');
    }
}