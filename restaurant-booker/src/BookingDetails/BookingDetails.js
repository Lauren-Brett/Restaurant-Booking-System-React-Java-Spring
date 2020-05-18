import React, { Component } from "react";
import BookingUpdateForm from "./BookingUpdateForm.js";
import BookingDelete from "./BookingDelete";

class BookingDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.selectedBooking) return null;

    const populateTimeOption = this.props.bookingSlots.map((time, index) => {
      return (
        <option key={index} value={time}>
          {time}
        </option>
      );
    });

    return (
      <>
        <h3>Booking Details:</h3>
        <BookingUpdateForm
          selectedBooking={this.props.selectedBooking}
          bookingSlots={this.props.bookingSlots}
          tablesAvailable={this.props.tablesAvailable}
          popShowUpdate={this.props.popShowUpdate}
          closePopUpdate={this.props.closePopUpdate}
          handleBookingDeleteClick={this.props.handleBookingDeleteClick}
          fetchBookings={this.props.fetchBookings}
        />
      </>
    );
  }
}

export default BookingDetails;
