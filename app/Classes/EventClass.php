<?php

namespace App\Classes;
use App\Models\Event;
use Illuminate\Support\Facades\Log;

class EventClass
{
    private $event;

    public function __construct(Event $event)
    {
        $this->event = $event;
    }

    public function getEvent()
    {
        try {
            $events = Event::all(); // Retrieve all events
            return response()->json(['status' => true, 'message' => 'Events retrieved successfully', 'data' => $events]);
        } catch (\Exception $e) {
            Log::error("EventClass Error: ", ["getEvent" => $e->getMessage()]);
            return response()->json(['status' => false, 'message' => 'Failed to retrieve events']);
        }
    }

    public function addEvent($name, $start_date, $end_date, $description)
    {
        try {
            $event = new Event; // Create a new Event instance
            $event->name = $name;
            $event->start_date = $start_date;
            $event->end_date = $end_date;
            $event->description = $description;
            $event->save(); // Save the event to the database

            return response()->json(['status' => true, 'message' => 'Event added successfully']);
        } catch (\Exception $e) {
            Log::error("EventClass Error: ", ["addEvent" => $e->getMessage()]);
            return response()->json(['status' => false, 'message' => 'Failed to add event']);
        }
    }
}
