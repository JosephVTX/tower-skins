<?php

namespace Database\Factories;

use App\Models\Notebook;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Notebook>
 */
class NotebookFactory extends Factory
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

            'notebook_category_id' => $this->faker->numberBetween(1, 10),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Notebook $notebook) {

            $notebook->template()->create([
                'demo' => $this->faker->img(),
                'base' => $this->faker->img(),
            ]);

            $notebook->product()->create([
                'name' => $this->faker->name(),
                'price' => $this->faker->randomFloat(2, 0, 100),
                'image' => $this->faker->img(),
                'description' => $this->faker->text(),
                'status' => 'active'
            ]);


        });
    }
}