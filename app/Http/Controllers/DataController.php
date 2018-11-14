<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class DataController extends Controller
{
    public function getHobbies()
    {
    	$data = DB::table('hobbies')->get();
    	dd($data);
    	return response()->json($data);
    }

    public function insertHobbies(Request $request)
    {
    	dd($request()->all());
    }
}
