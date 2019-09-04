<template lang="html">
  <div class="bookingTable">
    <table>
      <tr>
        <td>Name: {{ booking.guestName }}</td>
        <td>Email: {{ booking.guestEmail }}</td>
        <td vi-if="checkedInStatus === true">Checked In</td>
        <td><button on:click="deleteBooking">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingService from '@/services/BookingService.js'

export default {
  name: 'list-item',
  props: ['booking'],
  methods: {
    deleteBooking(){
      BookingService.deleteGame(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted',
      this.booking._id))
    }
  }
}
</script>

<style lang="css" scoped>
.bookingTable {

}
</style>
