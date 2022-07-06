<?php

namespace Database\Factories;

use DateTime;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Waste>
 */
class WasteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $service_type = ['pickup', 'dropoff'];
        $type = ['organic', 'inorganic'];
        $collected_at = [now()->addMinutes(mt_rand(1, 10)), null];
        return [
            'user_id' => mt_rand(1, 11),
            'depositor' => fake()->name(),
            'service_type' => $service_type[mt_rand(1, count($service_type) - 1)],
            'type' => $type[rand(0, count($type) - 1)],
            'weight' => fake()->randomFloat(1, 1, 10),
            'location' => fake()->address(),
            'collected_at' => $collected_at[rand(0, count($collected_at) - 1)]
        ];
    }
}
