import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function BookingsNew(props) {
  const idParams = useParams();

  const handleCreateBooking = (params) => {
    console.log("handleCreateBooking", params);
    axios.post("http://localhost:3000/bookings.json", params).then((response) => {
      const newBooking = response.data;
      console.log("Booking created!", newBooking);
      window.location.href = `/yogis/${idParams.id}`;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateBooking(params);
    event.target.reset();
  };

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <h1>Book a session with {props.yogi.name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="yogi_id" type="hidden" defaultValue={idParams.id} />
        </div>
        <div>
          <input name="yogi_name" type="hidden" defaultValue={props.yogi.name} />
        </div>
        {/* <div>
          Date: <input name="date" type="text" placeholder="Date" />
        </div> */}
        <div>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} value={startDate} name="date" />
        </div>
        <div>
          Start time: <input name="start_time" type="text" placeholder={props.yogi.available_start_time} />
        </div>
        <div>
          End time: <input name="end_time" type="text" placeholder={props.yogi.available_end_time} />
        </div>
        <div>
          Total: <input name="total_price" type="text" placeholder="rate * number of hours" />
        </div>
        <div>
          Address: <input name="address" type="text" placeholder="address of event" />
        </div>
        <div>
          City: <input name="city" type="text" placeholder="City " />
        </div>
        <div>
          State: <input name="state" type="text" placeholder="State" />
        </div>
        <div>
          Event type: <input name="event_type" type="text" placeholder="Corperate group" />
        </div>
        <div>
          Your email address: <input name="email" type="text" placeholder="your_name@email.com" />
        </div>
        <div>
          In person: <input name="in_person" type="text" defaultValue="true" />
        </div>
        <div>
          Paid: <input name="paid" type="text" defaultValue="false" />
        </div>
        <button type="submit">Create Booking</button>
      </form>
    </div>
  );
}
