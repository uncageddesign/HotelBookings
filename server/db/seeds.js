use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    guestName: "Bob Smith",
    guestEmail: "bob@gmail.com",
    checkedInStatus: true
  },
  {
    guestName: "A Person",
    guestEmail: "aperson@gmail.com",
    checkedInStatus: false
  },
  {
    guestName: "Joanne Doe",
    guestEmail: "jd9910@gmail.com",
    checkedInStatus: true
  }

]);
