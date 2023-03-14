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
          </div>
          <div>
            Details:
            <br /> event type: {booking.event_type}
            <br /> in person: {booking.in_person.toString()}
            <br /> paid: {booking.paid.toString()}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
