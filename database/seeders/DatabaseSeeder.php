<?php

namespace Database\Seeders;

use App\Models\Waste;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Hafidz Ubaidillah',
            'email' => 'hafidz21ub@gmail.com',
            'password' => Hash::make('12345678')
        ]);

        Waste::factory(300)->create();
    }
}
