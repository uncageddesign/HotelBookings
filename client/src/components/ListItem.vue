<template lang="html">
  <div class="bookingTable">
    <table>
      <tr>
        <td>Name: {{this.guestName}}</td>
        <td>Email: {{this.guestEmail}}</td>
        <td vi-if="checkedInStatus === true">Cheacked In</td>
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
