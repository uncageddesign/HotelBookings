<template lang="html">
  <div class="">
    <h2>Guest List</h2>
    <list-item v-for="(guest, index) in bookings" :key="index" :guest="guest" />
  </div>

</template>

<script>
import { eventBus } from '@/main.js'
import BookingService from '@/services/BookingService.js'
import ListItem from './ListItem'

export default {
  name: 'guest-list',
  data(){
    return {
      bookings: []
    };
  },
  mounted(){
    BookingService.getBooking()
    .then(bookings => this.bookings = bookings);

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })
  },
  components: {
    'list-item': ListItem
  }
}
</script>

<style lang="css" scoped>
</style>
