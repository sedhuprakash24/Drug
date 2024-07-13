
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Updatedruglot = () => {
var rx=0;
const {state}=useLocation();
const [drugid, setdrugid] = useState(state[rx++]);
const [drugname, setdrugname] = useState(state[rx++]);
const [owners, setowners] = useState(state[rx++]);
const [iid, setiid] = useState(state[rx++]);
const submitdata = () => {
 const value={drugid:drugid,drugname:drugname,owners:owners,iid:iid};
axios.post("http://localhost:5000/drugtracablity/updatedruglot", value).then
    (response=>{
      window.location.replace('/viewdruglot')
    })};
return (
<div>
    <h1>Add druglot</h1>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setdrugid(e.target.value)}
            value={drugid}
            placeholder="Enter drugid"
          />
          <label htmlFor="drugid">drugid</label>
        </div>

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

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setowners(e.target.value)}
            value={owners}
            placeholder="Enter owners"
          />
          <label htmlFor="owners">owners</label>
        </div>

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
)
}
export default Updatedruglot;
