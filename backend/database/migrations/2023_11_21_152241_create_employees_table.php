<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('firstName');
            $table->string('lastName');
            $table->string('middleName')->nullable();
            $table->string('email')->unique();
            $table->string('mobilePhone');
            $table->string('address');
            $table->enum('department', ['IT', 'HR', 'Finance', 'Marketing', 'Sales']);
            $table->enum('status', ['Probation', 'Regular', 'Contractual', 'Resigned/Terminated']);
            $table->date('hireDate');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
