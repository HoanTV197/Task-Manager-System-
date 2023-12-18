<script>
export default {
  data() {
    return {
      event: {
        name: '',
        description: '',
        start: '',
        end: ''
      },
      authorized: false,
      items: undefined,
    }
  },
  created () {
    this.api = gapi;
    this.handleClientLoad ();
  },
  methods: {
    submitForm() {
      if (this.authorized) {
        this.insertEvent();
      } else {
        console.error('User not authorized.');
      }
    },
    handleClientLoad () {
      let vm = this;
      vm.api.load ('client:auth2', this.initClient);
    },
    initClient () {
      let vm = this;
      vm.api.client.init ({
        apiKey: 'AIzaSyBFv_84lUMIP_GigK_zTUPIZWfiXHcQSIE',
        clientId: '267175014777-nbl6mq4d5ua4ho9aqvgapfvnf9933bhp.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.events'
      }).then (_ => {
        vm.api.auth2.getAuthInstance ().isSignedIn.listen (vm.authorized);
      });
    },
    handleAuthClick (event) {
      Promise.resolve (this.api.auth2.getAuthInstance ().signIn ())
      .then (_ => {
        this.authorized = true;
      });
    },
    handleSignOutClick (event) {
      Promise.resolve (this.api.auth2.getAuthInstance ().signOut ())
      .then (_ => {
        this.authorized = false;
      });
    },
    insertEvent() {
      let vm = this;
      vm.api.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': {
          'summary': vm.event.name,
          'description': vm.event.description,
          'start': {
            'dateTime': (new Date(vm.event.start)).toISOString(),
            'timeZone': 'Asia/Ho_Chi_Minh' // Thay Asia/Ho_Chi_Minh bằng múi giờ của bạn
          },
          'end': {
            'dateTime': (new Date(vm.event.end)).toISOString(),
            'timeZone': 'Asia/Ho_Chi_Minh'
          }
        }
      }).then (response => {
        console.log('Event created: ', response.result);
        // Reset form or perform any other actions
      }).catch(error => {
        console.error('Error creating event: ', error);
      });
    }
  }
}
</script>

<template>
  <div id="app">
    <form @submit.prevent="submitForm">
      <label>
        Tên sự kiện:
        <input v-model="event.name" type="text" required/>
      </label>
      <label>
        Mô tả sự kiện:
        <textarea v-model="event.description" required></textarea>
      </label>
      <label>
        Thời gian bắt đầu sự kiện:
        <input v-model="event.start" type="datetime-local" required/>
      </label>
      <label>
        Thời gian kết thúc sự kiện:
        <input v-model="event.end" type="datetime-local" required/>
      </label>
      <button type="submit">Tạo sự kiện</button>
    </form>
  </div>
</template>


