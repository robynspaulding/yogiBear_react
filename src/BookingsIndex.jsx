import { useState, useEffect } from "react";
import axios from "axios";

export function BookingsIndex() {
  const [bookings, setBookings] = useState([]);

  const handleIndexBookings = () => {
    axios.get("http://localhost:3000/bookings.json").then((response) => {
      console.log(response.data);
      setBookings(response.data);
    });
  };
  useEffect(handleIndexBookings, []);

  return (
    <div>
      <h1>All Bookings</h1>
      {bookings.map((booking) => (
        <div key={booking.id}>
          <div>Date: {booking.date}</div>
          <div>
            Time: {booking.start_time}-{booking.end_time}
          </div>
          <div>
            Address: {booking.address}, {booking.city}, {booking.state}
            <br /> Event type: {booking.event_type}
            <br /> In person: {booking.in_person.toString()}
            <br /> Paid: {booking.paid.toString()}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
