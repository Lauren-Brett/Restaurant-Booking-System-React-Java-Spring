import React from "react";
import Booking from "./Booking";

function BookingList({
  bookings,
  handleBookingItemClick,
  handleBookingDeleteClick
}) {
  const bookingItem = bookings.map(booking => {
    return (
      <Booking
        bookingValue={booking}
        handleBookingItemClick={handleBookingItemClick}
        handleBookingDeleteClick={handleBookingDeleteClick}
        // email={booking.email}
        // phoneNum={booking.phoneNum}
        key={booking.id}
      ></Booking>
    );
  });
  return (
    <>
      <p>Current Reservations: </p>
      <ul>{bookingItem}</ul>
    </>
  );
}

export default BookingList;
