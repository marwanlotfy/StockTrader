<?php

namespace App\Http\Controllers;

use App\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class StockController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'BMW'=>'required|numeric',
            'Google'=>'required|numeric',
            'Apple'=>'required|numeric',
            'Twitter'=>'required|numeric',

        ]);
        $stock = new Stock();
        $stock->BMW=$request->BMW;
        $stock->Google=$request->Google;
        $stock->Apple=$request->Apple;
        $stock->Twitter=$request->Twitter;
        $stock->save();
        $stock->cache_it();
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function fetch()
    {
        $stock = Stock::getcached();
        return $stock;
    }
}
