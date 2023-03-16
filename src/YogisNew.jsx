import axios from "axios";
import { Button } from "react-bootstrap";
import nameLogo from "./assets/name.png";
import moneyLogo from "./assets/dollar-currency-symbol.png";
import yogaLogo from "./assets/yoga-position.png";
import bioLogo from "./assets/bio.png";
import contactLogo from "./assets/contact.png";
import imageLogo from "./assets/person.png";

export function YogisNew() {
  const handleCreateYogi = (params) => {
    console.log("handleCreateYogi", params);
    axios.post("http://localhost:3000/yogis.json", params).then((response) => {
      const newYogi = response.data;
      console.log("created Yogi profile", newYogi);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateYogi(params);
    event.target.reset();
  };

  return (
    <div>
      <h2>Add A New YogiBear Instructor</h2>
      <form onSubmit={handleSubmit} className="row justify-content-center">
        <div className="card" style={{ width: "40rem" }}>
          <div class="input-group input-group-sm flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              <img width="30px" src={nameLogo} />
            </span>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="Yogi name"
              aria-label="name"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div class="input-group input-group-sm flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              <img width="30px" src={imageLogo} />
            </span>
            <input
              name="image"
              type="text"
              class="form-control"
              placeholder="profile photo / image url"
              aria-label="image"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div class="input-group input-group-sm flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              <img width="20px" src={moneyLogo} />
            </span>
            <input
              name="rate"
              type="text"
              class="form-control"
              placeholder="Hourly rate"
              aria-label="rate"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div class="input-group input-group-sm flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              <img width="20px" src={yogaLogo} />
            </span>
            <input
              name="yoga_type"
              type="text"
              class="form-control"
              placeholder="Yoga specialty"
              aria-label="yaga_type"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div className="input-group input-group-sm flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              <img width="20px" src={bioLogo} />
            </span>
            <input
              name="bio"
              type="text"
              class="form-control"
              placeholder="Bio"
              aria-label="bio"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div class="input-group input-group-sm flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              <img width="20px" src={contactLogo} />
            </span>
            <input
              name="contact"
              type="text"
              class="form-control"
              placeholder="Contact info"
              aria-label="contact"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div class="input-group">
            <span class="input-group-text">City and State</span>
            <input name="city" type="text" aria-label="city" class="form-control" />
            <input name="state" type="text" aria-label="state" class="form-control" />
          </div>

          <div class="input-group">
            <span class="input-group-text">Avalliable Start and End Times</span>
            <input name="available_start_time" type="text" aria-label="available_start_time" class="form-control" />
            <input name="available_end_time" type="text" aria-label="available_end_time" class="form-control" />
          </div>

          <Button variant="outline-success" type="submit">
            Create Yogi Profile
          </Button>
        </div>
      </form>
    </div>
  );
}
