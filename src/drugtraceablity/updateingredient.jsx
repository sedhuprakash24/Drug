import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Innav from "./Innav";
const Updateingredient = () => {
  var rx = 0;
  const { state } = useLocation();
  const [iid, setiid] = useState(state[rx++]);
  const [ingredientname, setingredientname] = useState(state[rx++]);
  const [status, setstatus] = useState(state[rx++]);
  const submitdata = () => {
    const value = { iid: iid, ingredientname: ingredientname, status: status };
    axios
      .post("http://localhost:5000/drugtracablity/updateingredient", value)
      .then((response) => {
        window.location.replace("/viewingredient");
      });
  };
  return (
    <div>
      <h1>Add ingredient</h1>
      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setiid(e.target.value)}
          value={iid}
          placeholder="Enter iid"
        />
        <label htmlFor="iid">iid</label>
      </div>

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

      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setstatus(e.target.value)}
          value={status}
          placeholder="Enter status"
        />
        <label htmlFor="status">status</label>
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
export default Updateingredient;
