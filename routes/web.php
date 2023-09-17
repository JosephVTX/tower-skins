<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', fn () => Inertia::render('Home/Index'))->name('home');

Route::resource('cards', \App\Http\Controllers\CardController::class);
Route::resource('phones', \App\Http\Controllers\PhoneController::class);
Route::resource('notebooks', \App\Http\Controllers\NotebookController::class);
Route::resource('card-customs', \App\Http\Controllers\CardCustomController::class);

Route::resource('card-categories', \App\Http\Controllers\CardCategoryController::class)->except(['show']);
Route::resource('phone-categories', \App\Http\Controllers\PhoneCategoryController::class)->except(['show']);
Route::resource('notebook-categories', \App\Http\Controllers\NotebookCategoryController::class)->except(['show']);

Route::get('/card-categories/{cardCategory:slug}', [\App\Http\Controllers\CardCategoryController::class, 'show'])->name('card-categories.show');
Route::get('/phone-categories/{phoneCategory:slug}', [\App\Http\Controllers\PhoneCategoryController::class, 'show'])->name('phone-categories.show');
Route::get('/notebook-categories/{notebookCategory:slug}', [\App\Http\Controllers\NotebookCategoryController::class, 'show'])->name('notebook-categories.show');


Route::get('/cart', [\App\Http\Controllers\CartController::class, 'index'])->name('cart.index');
Route::post('/cart', [\App\Http\Controllers\CartController::class, 'store'])->name('cart.store');
Route::patch('/cart', [\App\Http\Controllers\CartController::class, 'update'])->name('cart.update');
Route::delete('/cart', [\App\Http\Controllers\CartController::class, 'destroy'])->name('cart.destroy');






Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');


    Route::patch('/dashboard/phones', [\App\Http\Controllers\Dashboard\PhoneController::class, 'update'])->name('dashboard.phones.update');

    Route::resource('dashboard/phones', \App\Http\Controllers\Dashboard\PhoneController::class)->names('dashboard.phones')->except(['show']);


    Route::patch('/dashboard/phones-categories', [\App\Http\Controllers\Dashboard\PhoneCategoryController::class, 'update'])->name('dashboard.phones-categories.update');
    
    Route::resource('dashboard/phones-categories', \App\Http\Controllers\Dashboard\PhoneCategoryController::class)->names('dashboard.phones-categories')->except(['show', 'update']);

    Route::resource('dashboard/notebooks', \App\Http\Controllers\Dashboard\NotebookController::class)->names('dashboard.notebooks')->except(['show']);

    Route::patch('/dashboard/notebooks', [\App\Http\Controllers\Dashboard\NotebookController::class, 'update'])->name('dashboard.notebooks.update');
});
Route::get("products", [\App\Http\Controllers\Libelula\ShopController::class, "index"]);
require __DIR__ . '/auth.php';
