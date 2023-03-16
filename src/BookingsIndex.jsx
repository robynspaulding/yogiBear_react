import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function BookingsIndex(props) {
  const [bookings, setBookings] = useState([]);

  const handleIndexBookings = () => {
    axios.get("http://localhost:3000/bookings.json").then((response) => {
      console.log(response.data);
      setBookings(response.data);
    });
  };
  useEffect(handleIndexBookings, []);

  return (
    <div id="bookings-index">
      <h1>All Bookings</h1>
      <Row xs={2} md={3} className="g-4">
        {bookings.map((booking) => (
          <Col key={booking.id}>
            <Card style={{ width: "20rem" }}>
              <div class="card-header">Yoga Instructor: {booking.yogi_name}</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Date: {booking.date}</li>
                <li class="list-group-item">
                  Time: {booking.start_time}-{booking.end_time}
                </li>
                <li class="list-group-item">Total due at end of event: ${booking.total_price}</li>
                <li class="list-group-item">
                  Address: {booking.address}, {booking.city}, {booking.state}
                </li>
                <li class="list-group-item">Event type: {booking.event_type} </li>
                <li class="list-group-item">In person: {booking.in_person.toString()} </li>
                <li class="list-group-item">Paid: {booking.paid.toString()} </li>
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
