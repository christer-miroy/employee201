<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $department =  ['IT', 'HR', 'Finance', 'Marketing', 'Sales'];
        $status = ['Probation', 'Regular', 'Contractual', 'Resigned/Terminated'];

        return [
            'firstName' => fake()->firstName(),
            'lastName' => fake()->lastName(),
            'middleName' => fake()->optional()->lastName(),
            'email' => fake()->unique()->safeEmail(),
            'mobilePhone' => fake()->phoneNumber(),
            'address' => fake()->address(),
            'department' => fake()->randomElement($department),
            'status' => fake()->randomElement($status),
            'hireDate' => fake()->date(),
        ];
    }
}
