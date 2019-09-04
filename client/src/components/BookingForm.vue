<template lang="html">
  <form class="bookingForm" method="post" v-on:sumbit="addBooking">
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
        name: this.guestName,
        email: this.guestEmail,
        checkedInStatus: this.checkedInStatus
      }
      BookingService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added', res))
    }
  }
}
</script>

<style lang="css" scoped>

.bookingForm {
  padding: 20px;
  margin: 10px;
  background-color: snow;
}


</style>
