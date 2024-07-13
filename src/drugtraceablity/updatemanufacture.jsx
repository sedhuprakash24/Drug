
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Updatemanufacture = () => {
var rx=0;
const {state}=useLocation();
const [mid, setmid] = useState(state[rx++]);
const [Manufacturename, setManufacturename] = useState(state[rx++]);
const [mobile, setmobile] = useState(state[rx++]);
const [blockchainaddress, setblockchainaddress] = useState(state[rx++]);
const [privatekey, setprivatekey] = useState(state[rx++]);
const [password, setpassword] = useState(state[rx++]);
const submitdata = () => {
 const value={mid:mid,Manufacturename:Manufacturename,mobile:mobile,blockchainaddress:blockchainaddress,privatekey:privatekey,password:password};
axios.post("http://localhost:5000/drugtracablity/updatemanufacture", value).then
    (response=>{
      window.location.replace('/viewmanufacture')
    })};
return (
<div>
    <h1>Add manufacture</h1>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setmid(e.target.value)}
            value={mid}
            placeholder="Enter mid"
          />
          <label htmlFor="mid">mid</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setManufacturename(e.target.value)}
            value={Manufacturename}
            placeholder="Enter Manufacturename"
          />
          <label htmlFor="Manufacturename">Manufacturename</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setmobile(e.target.value)}
            value={mobile}
            placeholder="Enter mobile"
          />
          <label htmlFor="mobile">mobile</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setblockchainaddress(e.target.value)}
            value={blockchainaddress}
            placeholder="Enter blockchainaddress"
          />
          <label htmlFor="blockchainaddress">blockchainaddress</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setprivatekey(e.target.value)}
            value={privatekey}
            placeholder="Enter privatekey"
          />
          <label htmlFor="privatekey">privatekey</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            placeholder="Enter password"
          />
          <label htmlFor="password">password</label>
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
export default Updatemanufacture;
