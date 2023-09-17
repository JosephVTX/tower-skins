<?php

namespace Database\Factories;

use App\Models\Card;
use App\Models\CardCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Card>
 */
class CardFactory extends Factory
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
            'card_category_id' => $this->faker->randomElement(CardCategory::pluck('id')),
        ];
    }


    public function configure()
    {
        return $this->afterCreating(function (Card $card) {

            $card->template()->create([
                'demo' => $this->faker->img(),
                'base' => $this->faker->img(),
            ]);

            $card->product()->create([
                'name' => $this->faker->name(),
                'price' => $this->faker->randomFloat(2, 0, 100),
                'image' => $this->faker->img(),
                'description' => $this->faker->text(),
                'status' => 'active'
            ]);


        });
    }
}