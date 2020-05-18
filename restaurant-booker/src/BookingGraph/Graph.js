import React, { Component, useState, useEffect } from "react";
import "./Graph.css";
import GraphTableRow from "./GraphTableRow.js";

function Graph({ bookings, bookingSlots, tables, displayDate }) {
  const createHeader = bookingSlots.map(item => {
    return <th className="time-header"> {item}</th>;
  });

  return (
    <>
      {/* <input
        className="date"
        type="date"
        value={displayDate}
        onChange={handleChangeDate}
      /> */}
      <table>
        <tbody>
          <tr className="time-header">
            <th></th>
            {createHeader}
          </tr>
          <GraphTableRow
            tables={tables}
            bookingSlots={bookingSlots}
            displayDate={displayDate}
            bookings={bookings}
          />
          {/* {createTD} */}
        </tbody>
      </table>
    </>
  );
}

export default Graph;
