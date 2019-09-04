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
  background-color: slategrey;
  font-family: sans-serif;
}

#app {
  padding: 0 30px;
}

h1 {
  color: snow;
  font-size: 45px;
  text-shadow: 2px 2px black;
}

</style>
