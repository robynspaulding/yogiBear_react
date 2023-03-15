import { Button } from "react-bootstrap";

export function YogisUpdate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateYogi(props.yogi.id, params, () => event.target.reset());
    window.location.href = "/";
  };

  const handleClick = () => {
    props.onDestroyYogi(props.yogi);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input defaultValue={props.yogi.name} name="name" type="text" />
        </div>
        <div>
          Hourly rate: <input defaultValue={props.yogi.rate} name="rate" type="text" />
        </div>
        <div>
          Yoga type: <input defaultValue={props.yogi.yoga_type} name="yoga_type" type="text" />
        </div>
        <div>
          About: <input defaultValue={props.yogi.bio} name="bio" type="text" />
        </div>
        <div>
          Social Media: <input defaultValue={props.yogi.contact} name="contact" type="text" />
        </div>
        <div>
          State: <input defaultValue={props.yogi.state} name="state" type="text" />
        </div>
        <div>
          City: <input defaultValue={props.yogi.city} name="city" type="text" />
        </div>
        <div>
          Available start time:{" "}
          <input defaultValue={props.yogi.available_start_time} name="available_start_time" type="text" />
        </div>
        <div>
          Available end time:{" "}
          <input defaultValue={props.yogi.available_end_time} name="available_end_time" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.yogi.image} name="image" type="text" />
        </div>

        <Button variant="outline-success" type="submit">
          Update {props.yogi.name}'s Info
        </Button>
        <br />
        <Button variant="outline-danger" onClick={handleClick}>
          Delete {props.yogi.name}'s Profile
        </Button>
      </form>
    </div>
  );
}
