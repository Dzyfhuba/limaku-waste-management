<?php

namespace App\Http\Controllers;

use App\Models\Waste;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ExchangeController extends Controller
{
    public function reward()
    {
        $reward = Waste::where('user_id', Auth::id())
            ->select(DB::raw('SUM(weight)*1000 as reward'))
            ->first();
        return response()->json(array('reward' => $reward->reward));
    }
}
