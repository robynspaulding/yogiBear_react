import axios from "axios";

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
      <h1>New Yogi</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Rate: <input name="rate" type="text" />
        </div>
        <div>
          Yoga type: <input name="yoga_type" type="text" />
        </div>
        <div>
          About: <input name="bio" type="text" />
        </div>
        <div>
          Contact: <input name="contact" type="text" />
        </div>
        <div>
          State: <input name="state" type="text" />
        </div>
        <div>
          City: <input name="city" type="text" />
        </div>
        <div>
          Available start time: <input name="available_start_time" type="text" />
        </div>
        <div>
          Available end time: <input name="available_end_time" type="text" />
        </div>
        <div>
          Image: <input name="image" type="text" />
        </div>
        <button type="submit">Create Yogi Profile</button>
      </form>
    </div>
  );
}
