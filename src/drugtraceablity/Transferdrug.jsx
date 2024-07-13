import axios from "axios";
import { useState } from "react";
import Mnav from "./Mnav";
const Transerdrug = () => {
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
      .post("http://localhost:5000/drugtracablity/transferdisbuter", value)
      .then((res) => {
        alert("success");
        // setingredientname("");
        // setmanid("");
      });
  };
  return (
    <div>
      <Mnav />
      <h1>Transfer to Disbuter Drug</h1>

      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setingredientname(e.target.value)}
          value={ingredientname}
          placeholder="Enter Drugid"
        />
        <label htmlFor="ingredientname">Drugid</label>
      </div>
      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setmanid(e.target.value)}
          value={manid}
          placeholder="Enter Disturbuted id"
        />
        <label htmlFor="Disturbuted id">Disturbuted id</label>
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

export default Transerdrug;
