import axios from "axios";
import { useState } from "react";
import Mnav from "./Mnav";
const Requestapproval = () => {
  const [ingredientname, setingredientname] = useState("");

  const submitdata = () => {
    const value = {
      ingredientname: ingredientname,
    };
    console.log(value);
    axios
      .post("http://localhost:5000/drugtracablity/approvalingredient", value)
      .then((res) => {
        alert("success");
        setingredientname("");
      });
  };
  return (
    <div>
      <Mnav />
      <h1>Request Approval</h1>

      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setingredientname(e.target.value)}
          value={ingredientname}
          placeholder="Enter ingredientid"
        />
        <label htmlFor="ingredientname">ingredientid</label>
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

export default Requestapproval;
