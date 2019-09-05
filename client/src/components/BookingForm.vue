<template lang="html">
  <form class="bookingForm" v-on:submit="addBooking">
    <label for="guestName">Name: </label>
    <input type="text" v-model="guestName" required>

    <label for="guestEmail">Email Address: </label>
    <input type="text" v-model="guestEmail" required>

    <input type="submit" value="Add Booking">
  </form>

</template>

<script>
import { eventBus } from '@/main.js'
import BookingService from '@/services/BookingService.js'

export default {
  name: 'booking-form',
  data() {
    return {
      guestName: '',
      guestEmail: '',
      checkedInStatus: true
    }
  },
  methods: {
    addBooking(book){
      book.preventDefault()
      const booking = {
        guestName: this.guestName,
        guestEmail: this.guestEmail,
        checkedInStatus: false
      }
      BookingService.postBooking(booking)
      .then((res) => {
        this.guestName = "",
        this.guestEmail = ""
        
        eventBus.$emit('booking-added', res)
      })
    }
  }
}
</script>

<style lang="css" scoped>

.bookingForm {
  padding: 20px;
  margin-bottom: 10px;
  background-color: snow;
}

input {
  margin-left: 5px;
  margin-right: 10px;
}

</style>
