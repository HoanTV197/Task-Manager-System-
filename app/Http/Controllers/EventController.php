<?php

namespace App\Http\Controllers;

use App\Classes\EventClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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

        $name = $request->name;
        $start_date = $request->start_date;
        $end_date = $request->end_date;
        $description = $request->description;

        return $this->event->addEvent($name, $start_date, $end_date, $description);
    }
}
