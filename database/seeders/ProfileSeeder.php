<?php

namespace Database\Seeders;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = public_path('storage/profile');
        if (!File::isDirectory($path)) {
            echo $path;
            File::makeDirectory($path, 777, true, true);
        }

        $users = User::all();
        foreach ($users as $key => $user) {
            Profile::create([
                'user_id' => $user->id,
            ]);
        }
    }
}
