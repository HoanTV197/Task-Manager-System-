<template>
    <div>
      <!-- Header Section -->
      <div class="header bg-primary pb-6">
        <!-- ... other header elements ... -->
        <div class="col-lg-6 col-5 text-right">
          <a href="#" class="btn btn-sm btn-neutral" style="margin-right: -400px;" @click="addEventModel = true">New Event</a>
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div class="container-fluid mt--6">
        <div class="row">
          <div class="col">
            <div class="card">
              <!-- Card Header -->
              <div class="card-header border-0">
                <h3 class="mb-0">Events</h3>
              </div>
  
              <!-- Event Table -->
              <div class="table-responsive">
                <table class="table align-items-center table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col" class="sort">Event Name</th>
                      <th scope="col" class="sort">Start Date</th>
                      <th scope="col" class="sort">End Date</th>
                      <th scope="col" class="sort">Description</th>
                      <th scope="col" class="sort">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="list">
                    <tr v-for="event in events" :key="event.id">
                      <td>{{ event.name }}</td>
                      <td>{{ event.start_date }}</td>
                      <td>{{ event.end_date }}</td>
                      <td>{{ event.description }}</td>
                      <td>
                        <button class="btn btn-primary btn-sm" @click="editBtn(event)">Edit</button>
                        <button class="btn btn-danger btn-sm" @click="deleteBtn(event.id)">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Add Event Dialog -->
 <!-- Add Event Modal -->
 <vs-dialog v-model="addEventModel" prevent-close blur>
      <!-- ... (Modal structure and form) ... -->
      <form v-on:submit.prevent="addEvent()" id="addEventForm">
        <!-- Event Form Fields -->
        <div class="form-group">
          <label class="form-control-label">Event Name</label>
          <input class="form-control" placeholder="Event Name" v-model="addEventData.name"/>
        </div>
        <div class="form-group mt--3">
          <label class="form-control-label">Start Date</label>
          <input class="form-control" type="datetime-local" v-model="addEventData.start_date"/>
        </div>
        <div class="form-group mt--3">
          <label class="form-control-label">End Date</label>
          <input class="form-control" type="datetime-local" v-model="addEventData.end_date"/>
        </div>
        <div class="form-group mt--3">
          <label class="form-control-label">Description</label>
          <textarea class="form-control" placeholder="Description" v-model="addEventData.description"></textarea>
        </div>
        <!-- Submit Button -->
        <div class="footer-dialog text-center">
          <button class="btn btn-primary" type="submit">Add Event</button>
        </div>
      </form>
    </vs-dialog>
  
      <!-- Edit Event Dialog -->
      <vs-dialog v-model="editEventModel" prevent-close blur>
        <!-- ... Edit Event Form ... -->
      </vs-dialog>
  
      <!-- Delete Confirmation Dialog -->
      <vs-dialog width="550px" not-center v-model="deleteDialog">
        <!-- ... Delete Confirmation Content ... -->
      </vs-dialog>
    </div>
  </template>
  
  <script>
  export default {
    name: "EventsDashboard",
  data() {
    return {
      events: [],
      addEventData: {
        name: "",
        start_date: "",
        end_date: "",
        description: ""
      },
      editEventData: {
        id: null,
        name: "",
        start_date: "",
        end_date: "",
        description: ""
      },
      deleteEventData: {
        id: null
      },
      addEventModel: false,
      editEventModel: false,
      deleteDialog: false,
      dataNotFound: false
    };
  },
methods: {
  getEvent() {
    let loading = this.block("eventLoading");
    this.axios.get("/api/v1/events")
      .then(response => {
        this.events = response.data.data;
        loading.close();
        this.dataNotFound = this.events.length === 0;
      })
      .catch(error => {
        console.log(error.response.data);
        this.dataNotFound = true;
        loading.close();
      });
  },
  addEvent() {
    let Loading = this.block("addEventForm");
    this.axios.post('/api/v1/add/event', this.addEventData)
      .then(response => {
        if (response.data.status === true) {
          document.getElementById("addEventForm").reset();
          Loading.close();
          this.addEventModel = false;
          this.getEvent();
        } else {
          this.errorNotification(response.data.message);
          Loading.close();
        }
      })
      .catch(error => {
        this.errorNotification(error.response.data.message);
        Loading.close();
      });
  },
},
    mounted() {
        this.getEvent();
      
    }
  }
  </script>
  
  <style>
    /* Custom styles */
  </style>
  