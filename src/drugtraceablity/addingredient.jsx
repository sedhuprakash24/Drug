import axios from "axios";
import { useState } from "react";
import Innav from "./Innav";
const Addingredient = () => {
  const [ingredientname, setingredientname] = useState("");
  const [status, setstatus] = useState("pending");
  const submitdata = () => {
    const value = {
      ingredientname: ingredientname,
      status: status,
      owner: window.localStorage.getItem("id"),
    };
    console.log(value);
    axios.post("http://localhost:5000/drugtracablity/insertingredient", value);
    alert("success");
    setingredientname("");
    setstatus("");
  };
  return (
    <div>
      <Innav />
      <h1>Add ingredient</h1>
      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setingredientname(e.target.value)}
          value={ingredientname}
          placeholder="Enter ingredientname"
        />
        <label htmlFor="ingredientname">ingredientname</label>
      </div>

      <input
        type="submit"
        className="btn btn-primary"
        onClick={submitdata}
        style={{ width: "100%" }}
      />
    </div>
  );
};
export default Addingredient;
