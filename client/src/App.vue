<template>
  <div id="app">
    <h1>Hotel Bookings</h1>
    <booking-form />
    <guest-list />
  </div>
</template>

<script>
import BookingForm from '@/components/BookingForm';
import GuestList from '@/components/GuestList';

export default {
  name: 'app',
  components: {
    'booking-form': BookingForm,
    'guest-list': GuestList
  }
}
</script>

<style>
body {
  background-color: honeydew;
  font-family: sans-serif;
}

#app {
  padding: 30px;
}

</style>
