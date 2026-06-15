<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\PortfolioController;

// Public Routes
Route::get('/portfolio', [PortfolioController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);

// Auth Routes
Route::post('/login', [AuthController::class, 'login']);

// Protected Routes (require authentication)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    
    // Skills
    Route::post('/skills', [PortfolioController::class, 'storeSkill']);
    Route::put('/skills/{skill}', [PortfolioController::class, 'updateSkill']);
    Route::delete('/skills/{skill}', [PortfolioController::class, 'destroySkill']);
    
    // Projects
    Route::post('/projects', [PortfolioController::class, 'storeProject']);
    Route::put('/projects/{project}', [PortfolioController::class, 'updateProject']);
    Route::delete('/projects/{project}', [PortfolioController::class, 'destroyProject']);
});