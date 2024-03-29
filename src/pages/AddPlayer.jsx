import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPlayer() {
  let [name, setName] = useState("");
  let [imageUrl, setImageUrl] = useState("");
  let [breed, setBreed] = useState("");
  let [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-a/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            breed: breed,
            imageUrl: imageUrl,
          }),
        }
      );
      let result = await response.json();
      console.log(result);

      setName("");
      setImageUrl("");
      setBreed("");
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add a Player</h2>
        <label>
          Name: <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Image URL:{" "}
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>

        <label>
          Breed:{" "}
          <input value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>

        {/* <label>
          Team: <input value={team} onChange={(e) => setTeam(e.target.value)} />
        </label> */}

        <button>Submit</button>
      </form>

      {success && <div id="success">Player added succesfully!</div>}
    </>
  );
}

export default AddPlayer;
