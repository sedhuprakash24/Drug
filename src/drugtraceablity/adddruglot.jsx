import axios from "axios";
import { useState } from "react";
import Mnav from "./Mnav";
const Adddruglot = () => {
  const [drugname, setdrugname] = useState("");
  const [owners, setowners] = useState(window.localStorage.getItem("id"));
  const [iid, setiid] = useState("");
  const submitdata = () => {
    const value = { drugname: drugname, owners: owners, iid: iid };
    axios
      .post("http://localhost:5000/drugtracablity/insertdruglot", value)
      .then((res) => {
        alert("success");
        setdrugname("");
        setowners("");
        setiid("");
      });
  };
  return (
    <div>
      <Mnav />
      <h1>Add druglot</h1>
      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setdrugname(e.target.value)}
          value={drugname}
          placeholder="Enter drugname"
        />
        <label htmlFor="drugname">drugname</label>
      </div>

      {/* <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setowners(e.target.value)}
          value={owners}
          placeholder="Enter owners"
        />
        <label htmlFor="owners">owners</label>
      </div> */}

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

      <input
        type="submit"
        className="btn btn-primary"
        onClick={submitdata}
        style={{ width: "100%" }}
      />
    </div>
  );
};
export default Adddruglot;
