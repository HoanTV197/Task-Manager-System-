<?php

namespace App\Http\Controllers;

use App\Classes\EventClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Google_Client;
use Google\Service\Calendar as Google_Service_Calendar;
use Google\Service\Calendar\Event as Google_Service_Calendar_Event;



class EventController extends Controller
{
    private $event;

    public function __construct(EventClass $event)
    {
        $this->event = $event;
    }

    public function getEvent()
    {
        return $this->event->getEvent();
    }

    public function addEvent(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return response()->json(['status' => false, 'message' => $error], 400);
        }

        // Thêm sự kiện vào cơ sở dữ liệu của bạn
        $result = $this->event->addEvent($request->name, $request->start_date, $request->end_date, $request->description);

        if ($result) {
            // Tạo và cấu hình Google Client
            $client = new Google_Client();
            $client->setAuthConfig('/home/hoantv197/Desktop/Project II/Task-Manager-System-/client_secret.json');
            $client->addScope(Google_Service_Calendar::CALENDAR);
            $client->setAccessType('offline');

            // Giả sử bạn đã lưu access token
            $accessToken = 'your-saved-access-token';
            $client->setAccessToken($accessToken);

            // Kiểm tra và làm mới token nếu cần
            if ($client->isAccessTokenExpired()) {
                $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
                // Lưu access token mới
            }

            // Tạo dịch vụ Calendar
            $service = new Google_Service_Calendar($client);

            // Tạo và cấu hình sự kiện Calendar
            $googleEvent = new Google_Service_Calendar_Event([
                'summary' => $request->name,
                'description' => $request->description,
                'start' => ['dateTime' => $request->start_date],
                'end' => ['dateTime' => $request->end_date],
                // Thêm các trường khác nếu cần
            ]);

            // Thêm sự kiện vào lịch
            $calendarId = 'primary'; // Sử dụng ID lịch cụ thể nếu cần
            $service->events->insert($calendarId, $googleEvent);
        }

        return $result;
    }
}
