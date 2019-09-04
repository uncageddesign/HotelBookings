<template lang="html">
  <div class="bookingTable">
    <table>
      <tr>
        <td>{{ booking.guestName }}</td>
        <td>{{ booking.guestEmail }}</td>
        <td v-if="booking.checkedInStatus">Already Checked In</td>
        <td v-if="!booking.checkedInStatus"><button class="btn--checkIn" v-on:click="checkIn">Check In</button></td>
        <td><button class="btn--delete" v-on:click="deleteBooking">Delete</button></td>
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
      BookingService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted',
      this.booking._id))
    },
    checkIn(){
      this.booking.checkedInStatus = true;
    }
  }
}
</script>

<style lang="css" scoped>
td {
  padding: 5px;
  min-width: 150px;
  margin-right: 5px;
  border-bottom: 1px solid lightgrey;
}

.btn--checkIn {
  background-color: green;
  color: white;
}

.btn--delete {
  background-color: red;
  color: white;
}

</style>
