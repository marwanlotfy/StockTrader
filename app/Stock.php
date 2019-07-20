<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Stock extends Model
{
    public static $cache_key="stock";
    
    public function cache_it($seconds=604800)
    {
        Cache::put(self::$cache_key,$this, $seconds);
        return true;
    }
    public static function getcached($seconds=604800)
    {
       return Cache::remember(self::$cache_key,  $seconds , function () {
            $stock=self::latest()->first();
            return $stock;
        });
    }
}
