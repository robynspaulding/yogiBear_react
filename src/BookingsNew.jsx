import axios from "axios";
import { useParams } from "react-router-dom";

export function BookingsNew() {
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

  return (
    <div>
      <h1>Making a Booking</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="yogi_id" type="hidden" defaultValue={idParams.id} />
        </div>
        <div>
          Date: <input name="date" type="text" />
        </div>
        <div>
          Start time: <input name="start_time" type="text" />
        </div>
        <div>
          End time: <input name="end_time" type="text" />
        </div>
        <div>
          Cost: <input name="total_price" type="text" />
        </div>
        <div>
          Address: <input name="address" type="text" />
        </div>
        <div>
          City: <input name="city" type="text" />
        </div>
        <div>
          State: <input name="state" type="text" />
        </div>
        <div>
          Event type: <input name="event_type" type="text" />
        </div>
        <div>
          Your email address: <input name="email" type="text" />
        </div>
        <div>
          Is the event in person: <input name="in_person" type="text" defaultChecked={true} />
        </div>
        <div>
          Paid: <input name="paid" type="text" defaultChecked={false} />
        </div>
        <button type="submit">Create Booking</button>
      </form>
    </div>
  );
}
