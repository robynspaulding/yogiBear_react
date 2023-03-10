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
          rate: <input defaultValue={props.yogi.rate} name="rate" type="text" />
        </div>
        <div>
          Social Media: <input defaultValue={props.yogi.contact} name="contact" type="text" />
        </div>
        <div>
          state: <input defaultValue={props.yogi.state} name="state" type="text" />
        </div>
        <div>
          city: <input defaultValue={props.yogi.city} name="city" type="text" />
        </div>
        <div>
          available_start_time:{" "}
          <input defaultValue={props.yogi.available_start_time} name="available_start_time" type="text" />
        </div>
        <div>
          available_end_time:{" "}
          <input defaultValue={props.yogi.available_end_time} name="available_end_time" type="text" />
        </div>
        <div>
          image: <input defaultValue={props.yogi.image} name="image" type="text" />
        </div>

        <button type="submit">Update {props.yogi.name}'s Info</button>
        <br />
        <button onClick={handleClick}>Delete {props.yogi.name}'s Profile</button>
      </form>
    </div>
  );
}
