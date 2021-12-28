<?php

use App\Http\Controllers\SimpleController;
use Illuminate\Support\Facades\Route;

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
Route::group([
    'middleware' => ['web', 'cors'],
//    'namespace' => $this->namespace,
//    'prefix' => 'api',
], function ($router) {
    //Add you routes here, for example:
    Route::get('/', [SimpleController::class, 'index']);
});


