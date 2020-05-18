import React from "react";
import "./Graph.css";

function GraphTableRow({ bookingSlots, tables, displayDate, bookings }) {
  const createTD = tables.map((table) => {
    return (
      <tr>
        <td className="time-colum">
          <label>T{table.id}</label>
          <p>{table.pax} pax</p>
        </td>

        {bookingSlots.map((bookingSlot) => {
          if (table.bookings.length === 0) {
            return <td className="available-slot">available table</td>;
          } else {
            let findBookingPerTable = table.bookings.find(({ time, date }) => {
              return (
                bookingSlot >= time &&
                bookingSlot <= getEndTime(time) &&
                date === displayDate
              );
            });
            if (findBookingPerTable) {
              let findCustomer = findBookingPerTable.customer
                ? findBookingPerTable.customer.name
                : "";

              return (
                <td className="entry">
                  <label>
                    {" "}
                    {findCustomer}
                    <p>{findBookingPerTable.numberOfPeople} pax</p>
                  </label>
                </td>
              );
            } else {
              return <td className="available-slot">available table</td>;
            }
          }
        })}
      </tr>
    );
  });

  function getEndTime(timeString, duration = 1) {
    let timeIncreasedInt = parseInt(timeString.split(":")[0]) + duration;
    let timeIncreasedInString = `${timeIncreasedInt}:00`;
    return timeIncreasedInString;
  }

  if (!tables) {
    return null;
  } else {
    return <> {createTD}</>;
  }
}

export default GraphTableRow;
