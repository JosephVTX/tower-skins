<?php

namespace Database\Factories;

use App\Models\CardCustom;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CardCustom>
 */
class CardCustomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //

            'title' => $this->faker->sentence(),

            'description' => $this->faker->text(),

            'price' => $this->faker->randomFloat(2, 1, 100),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (CardCustom $cardCustom) {
            $cardCustom->template()->create([
                'demo' => $this->faker->img(),
                'base' => $this->faker->img(),
            ]);
        });
    }
}
