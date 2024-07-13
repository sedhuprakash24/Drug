
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Updatedistributer = () => {
var rx=0;
const {state}=useLocation();
const [did, setdid] = useState(state[rx++]);
const [dname, setdname] = useState(state[rx++]);
const [mobile, setmobile] = useState(state[rx++]);
const [blockchainaddress, setblockchainaddress] = useState(state[rx++]);
const [privatekey, setprivatekey] = useState(state[rx++]);
const [password, setpassword] = useState(state[rx++]);
const submitdata = () => {
 const value={did:did,dname:dname,mobile:mobile,blockchainaddress:blockchainaddress,privatekey:privatekey,password:password};
axios.post("http://localhost:5000/drugtracablity/updatedistributer", value).then
    (response=>{
      window.location.replace('/viewdistributer')
    })};
return (
<div>
    <h1>Add distributer</h1>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setdid(e.target.value)}
            value={did}
            placeholder="Enter did"
          />
          <label htmlFor="did">did</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setdname(e.target.value)}
            value={dname}
            placeholder="Enter dname"
          />
          <label htmlFor="dname">dname</label>
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
export default Updatedistributer;
