<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreChangePasswordRequest;
use App\Http\Requests\UpdateChangePasswordRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ChangePasswordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreChangePasswordRequest $request)
    {
        if (!Auth::attempt(['email' => Auth::user()->email, 'password' => $request->old_password])) {
            return response()->json([
                'error' => true,
                'status' => 'error',
                'message' => 'Invalid old password provided'
            ]);
        }

        User::find(Auth::id())->update([
            'password' => Hash::make($request->new_password)
        ]);

        return response()->json([
            'error' => false,
            'status' => 'success',
            'message' => 'Your password has been successfully changed',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateChangePasswordRequest $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
