<?php

namespace Database\Factories;

use App\Models\Phone;
use App\Models\PhoneCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Phone>
 */
class PhoneFactory extends Factory
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

            'phone_category_id' => $this->faker->randomElement(PhoneCategory::pluck('id')),
            
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Phone $phone) {
            $phone->product()->create([

                'name' => $this->faker->name(),
                'price' => $this->faker->randomFloat(2, 0, 100),
                'image' => $this->faker->img(),
                'description' => $this->faker->text(),
                'status' => 'active'
            ]);
        });
    }
}
