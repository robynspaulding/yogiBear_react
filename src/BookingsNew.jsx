import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import homeLogo from "./assets/home-address.png";
import eventLogo from "./assets/event.png";
import emailLogo from "./assets/email.png";

export function BookingsNew(props) {
  const idParams = useParams();

  const handleCreateBooking = (params) => {
    console.log("handleCreateBooking", params);
    axios.post("http://localhost:3000/bookings.json", params).then((response) => {
      const newBooking = response.data;
      console.log("Booking created!", newBooking);
      window.location.href = `/bookings`;
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
    <div className="card text-left col-2 shadow m-3" style={{ width: "18rem" }}>
      <div className="row justify-content-left">
        <h5 className="card-header">Book a session with {props.yogi.name}</h5>
        <form onSubmit={handleSubmit}>
          <div>
            <input name="yogi_id" type="hidden" defaultValue={idParams.id} />
          </div>
          <div>
            <input name="yogi_name" type="hidden" defaultValue={props.yogi.name} />
          </div>
          <div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} value={startDate} name="date" />
          </div>
          <br />
          <div class="input-group  input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Start
            </span>
            <div class="form-floating">
              <input name="start_time" type="text" class="form-control" id="floatingInputGroup1" />
              <label for="floatingInputGroup1">{props.yogi.available_start_time}</label>
            </div>
          </div>

          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              End
            </span>
            <div class="form-floating">
              <input name="end_time" type="text" class="form-control" id="floatingInputGroup1" />
              <label for="floatingInputGroup1">Total</label>
            </div>
          </div>

          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              $
            </span>
            <div class="form-floating">
              <input name="total_price" type="text" class="form-control" id="floatingInputGroup1" />
              <label for="floatingInputGroup1">Total</label>
            </div>
          </div>

          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              {" "}
              <img src={homeLogo} width="20px" />
            </span>
            <div class="form-floating">
              <input name="address" type="text" class="form-control" id="floatingInputGroup1" />
              <label for="floatingInputGroup1">Address</label>
            </div>
          </div>

          <div class="input-group">
            <span class="input-group-text">City and State</span>
            <input name="city" type="text" aria-label="city" class="form-control" />
            <input name="state" type="text" aria-label="State" class="form-control" />
          </div>
          <br />
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              {" "}
              <img src={eventLogo} width="20px" />
            </span>
            <div class="form-floating">
              <input name="event_type" type="text" class="form-control" id="floatingInputGroup1" />
              <label for="floatingInputGroup1">Event type</label>
            </div>
          </div>

          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              {" "}
              <img src={emailLogo} width="20px" />
            </span>
            <div class="form-floating">
              <input name="email" type="text" class="form-control" id="floatingInputGroup1" />
              <label for="floatingInputGroup1">email address</label>
            </div>
          </div>

          <select name="in_person" type="text" class="form-select" aria-label="Default select example">
            <option selected>Is your event in person:</option>
            <option value="true">Yes</option>
            <option value="false">No, online</option>
          </select>

          <select name="paid" type="text" class="form-select" aria-label="Default select example">
            <option selected>Have you paid:</option>
            <option value="true">Yes</option>
            <option value="false">Not yet</option>
          </select>

          <Button variant="outline-success" type="submit">
            Create Booking
          </Button>
        </form>
      </div>
    </div>
  );
}
