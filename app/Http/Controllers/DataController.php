<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;
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
        if(count($_POST) > 0)
        {
            reset($_POST);
            $key = key($_POST);
            DB::table('hobbies')->insert(
                array(
                    'is_safe' => '1',
                    'hobby' => $key
                )
            );
            
            return response()->json(['operation' => 'successfully completed']);
        }
    }
}
