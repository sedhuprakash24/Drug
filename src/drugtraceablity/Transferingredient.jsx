import axios from "axios";
import { useState } from "react";
import Innav from "./Innav";
const Transferingredient = () => {
  const [ingredientname, setingredientname] = useState("");
  const [manid, setmanid] = useState("");
  const submitdata = () => {
    const value = {
      ingredientname: ingredientname,
      or: window.localStorage.getItem("id"),
      owner: manid,
    };
    console.log(value);
    axios
      .post("http://localhost:5000/drugtracablity/transferingredient", value)
      .then((res) => {
        alert("success");
        setingredientname("");
        setmanid("");
      });
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
          placeholder="Enter ingredientid"
        />
        <label htmlFor="ingredientname">ingredientid</label>
      </div>
      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setmanid(e.target.value)}
          value={manid}
          placeholder="Enter Manufactureid"
        />
        <label htmlFor="Manufactureid">Manufactureid</label>
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
export default Transferingredient;
