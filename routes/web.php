<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/app{any}', function () {
    return view('react'); // this is pointing resources/views/react.blade.php
})->where('any', '.*');
