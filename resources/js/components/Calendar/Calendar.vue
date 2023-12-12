<template>
  <div>
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Calendar</h6>
            </div>
            <div class="col-lg-6 col-5 text-right">
              <!-- Add any buttons or actions specific to the calendar here -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <div class="card" id="calendarLoading">
            <!-- Card header -->
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="mb-0">Calendar</h3>
                </div>
              </div>
            </div>
            <!-- Calendar -->
            <div class="calendar-container" id="calendar">
              <FullCalendar :options="calendarOptions" />
              <!-- Sử dụng component của thư viện -->
              <add-to-calendar :event="calendarEvent"></add-to-calendar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import AddToCalendar from 'vue-add-to-calendar';

export default {
  components: {
    FullCalendar,
    'add-to-calendar': AddToCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        events: [
          // your event source
        ],
      },
      calendarEvent: {
        title: 'Tên sự kiện',
        start: '2023-12-07 10:00:00',
        end: '2023-12-08 12:00:00',
        location: 'Địa điểm',
        description: 'Mô tả sự kiện',
      },
    };
  },
};
</script>

<style scoped>
/* Add any custom styles for the component */
</style>