import React, { useState } from "react";
import Axios from "axios";
import "../Form/formbox.css";

function BookingUpdateForm({
  selectedBooking,
  bookingSlots,
  tablesAvailable,
  popShowUpdate,
  closePopUpdate,
  handleBookingDeleteClick,
  fetchBookings
}) {
  const [pax, setPax] = useState(selectedBooking.numberOfPeople);
  const [date, setDate] = useState(selectedBooking.date);
  const [time, setTime] = useState(selectedBooking.time);
  const [table, setTable] = useState(selectedBooking.table);

  function handlePax(event) {
    setPax(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handleTime(event) {
    setTime(event.target.value);
  }

  const populateTimeOption = bookingSlots.map((timeSlot, index) => {
    let isItSelected = timeSlot === time ? "selected" : "";
    console.log(tablesAvailable);

    return (
      <option key={index} value={time} selected={isItSelected}>
        {time}
      </option>
    );
  });

  const populateAvailableTableOptions = tablesAvailable.map(tableAvailable => {
    let isItSelected = tableAvailable === table ? "selected" : "";

    if (tableAvailable.pax >= pax) {
      return (
        <option
          key={tableAvailable.id}
          value={tableAvailable}
          selected={isItSelected}
        >
          Table: {tableAvailable.id} | {tableAvailable.pax} pax
        </option>
      );
    }
  });

  function putUpdatedBooking() {
    const customer = `http://localhost:8080/customers/${selectedBooking.customer.id}`;
    const desk = `http://localhost:8080/desks/${selectedBooking.desk.id}`;
    const numberOfPeople = pax;
    JSON.stringify({ time, date, numberOfPeople, customer, desk });
    return Axios.put(`http://localhost:8080/bookings/${selectedBooking.id}`, {
      time,
      date,
      numberOfPeople,
      customer,
      desk
    }).then(() => fetchBookings());
  }

  function handleCloseModalUpdate() {
    closePopUpdate();
  }

  function handleDeleteBooking() {
    handleBookingDeleteClick(selectedBooking.id);
  }

  if (!popShowUpdate) {
    return null;
  }

  return (
    <>
      <div className="newBookingModal">
        <button className="closeButton" onClick={handleCloseModalUpdate}>
          &times;
        </button>
        <div className="newBookingModalContent">
          <form onSubmit={putUpdatedBooking}>
            <label for="number of customer">Number of Customer</label>
            <input
              type="number"
              placeholder="Add number of customers"
              value={pax}
              onChange={handlePax}
            />

            <label for="date">Date:</label>
            <input type="date" value={date} onChange={handleDate} />
            <select onChange={handleTime}>{populateTimeOption}</select>
            <select required>
              {/* <option default>{table.id}</option> */}
              {populateAvailableTableOptions}
            </select>
            <input type="submit" />
          </form>
          <button onClick={handleDeleteBooking}>Delete Booking</button>
        </div>
      </div>
      <div className="modal-overlay" id="modal-overlay-update"></div>
    </>
  );
}

export default BookingUpdateForm;
