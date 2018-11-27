<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Request;
// use Request;
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
        // print_r($request->value);exit;
        if($request->value != '')
        {
            
            // $key = key($_POST);
            DB::table('hobbies')->insert(
                array(
                    'is_safe' => '1',
                    'hobby' => $request->value
                )
            );
        }
    }
}
