<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class DataController extends Controller
{
    public function data()
    {
    	$data = DB::table('test')->get();
    	return response()->json($data);
    }
}
