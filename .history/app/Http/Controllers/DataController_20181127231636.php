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
        // print_r($request->all());
        if($request->value != '')
        {
            DB::table('hobbies')->insert(
                array(
                    'is_safe' => $request->profanity,
                    'hobby' => $request->value
                )
            );
        }

        return response(this->getAllEntries());

    }

    public function getAllEntries()
    {
        $entries = DB::table('hobbies')->get();
        return $entries;
    }
}
