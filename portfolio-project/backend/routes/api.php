<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\PortfolioController;

Route::post('login', [AuthController::class,'login']);

Route::get('portfolio', [PortfolioController::class,'index']);

Route::middleware('auth:sanctum')->group(function(){
    Route::post('logout', [AuthController::class,'logout']);

    // Skills
    Route::post('skills', [PortfolioController::class,'storeSkill']);
    Route::patch('skills/{skill}', [PortfolioController::class,'updateSkill']);
    Route::delete('skills/{skill}', [PortfolioController::class,'destroySkill']);

    // Projects
    Route::post('projects', [PortfolioController::class,'storeProject']);
    Route::patch('projects/{project}', [PortfolioController::class,'updateProject']);
    Route::delete('projects/{project}', [PortfolioController::class,'destroyProject']);
});
