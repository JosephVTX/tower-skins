<?php

namespace Database\Factories;

use App\Models\NotebookCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\NotebookCategory>
 */
class NotebookCategoryFactory extends Factory
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

            'name' => $this->faker->name(),
            'slug' => $this->faker->slug(),
            'description' => $this->faker->text(),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (NotebookCategory $notebookCategory) {

            $notebookCategory->template()->create([
                'demo' => $this->faker->img(),
                'base' => $this->faker->img(),
            ]);

        });

    }
}
