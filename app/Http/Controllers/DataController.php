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
    	// dd($data);
    	return response()->json($data);
    }

    public function insertHobbies(Request $request)
    {
        // print_r($request->all());exit;
        // print_r($request->filter);exit;
        if(!empty($request->value))
        {
            DB::table('hobbies')->insert(
                array(
                    'is_safe' => $request->profanity,
                    'hobby' => $request->value
                )
            );
        }
        // print_r($this->getAllEntries($request->filter));
    return response($this->getAllEntries($request->filter));

    }

    public function getAllEntries($filter)
    {
        if(isset($filter) && $filter == true)
        {
            $entries = DB::table('hobbies')->where('is_safe', 1)->get();
            return $entries;
        }
        elseif(isset($filter) && $filter == false)
        {
            $entries = DB::table('hobbies')->get();
            return $entries;
        }
    }
}
