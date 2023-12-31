<?php

namespace App\Http\Controllers;
use Google\Service\Calendar as Google_Service_Calendar;

use App\Helper\ResponseHelper;
use Illuminate\Http\Request;
use Google_Client;

class GoogleController extends Controller
{
    public function redirect()
    {
        $client = new Google_Client();
        $client->setClientId(env('267175014777-qkc1kpvlp987ntctc038pumi4h7fo769.apps.googleusercontent.com'));
        $client->setClientSecret(env('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'));
        $client->setRedirectUri(env('http://localhost:8080/calendar/callback'));
        $client->addScope(Google_Service_Calendar::CALENDAR);
        $client->setAccessType('offline');
        $client->setPrompt('select_account consent');

        $authUrl = $client->createAuthUrl();
        return redirect($authUrl);
    }

    public function callback(Request $request)
    {
        $client = new Google_Client();
        $client->setClientId(env('267175014777-qkc1kpvlp987ntctc038pumi4h7fo769.apps.googleusercontent.com'));
        $client->setClientSecret(env('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'));
        $client->setRedirectUri(env('http://localhost:8080/calendar/callback'));

        $token = $client->fetchAccessTokenWithAuthCode($request->code);
        $client->setAccessToken($token);

        // Lưu token vào database hoặc session tùy theo cách bạn quản lý người dùng

        return redirect('/tasks');
    }
}