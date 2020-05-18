import React from "react";
import "./Booking.css";
import BookingDetails from "../BookingDetails/BookingDetails";

function Booking({
  bookingValue,
  handleBookingItemClick,
  handleBookingDeleteClick,
  showModalUpdate,
}) {
  function handleEditBooking() {
    showModalUpdate();
    handleBookingItemClick(bookingValue.id);
  }

  return (
    <>
      <li
        key={bookingValue.id}
        className="booking-item"
        onClick={handleEditBooking}
      >
        <label>Name: </label>
        {bookingValue.customer.name}
        <br></br>
        <label className="booking-detail-list">Date: </label>
        {bookingValue.date}
        <br></br>
        <label className="booking-detail-list">Time: </label>{" "}
        {bookingValue.time}
      </li>
      {/* <li style={{ listStyle: "none" }}>
        <button className="button-update">Update</button>
      </li> */}
    </>
  );
}

export default Booking;
