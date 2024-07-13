
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Updatepharmacy = () => {
var rx=0;
const {state}=useLocation();
const [pid, setpid] = useState(state[rx++]);
const [pharmacyname, setpharmacyname] = useState(state[rx++]);
const [blockchainaddress, setblockchainaddress] = useState(state[rx++]);
const [privatekey, setprivatekey] = useState(state[rx++]);
const [password, setpassword] = useState(state[rx++]);
const [mobile, setmobile] = useState(state[rx++]);
const submitdata = () => {
 const value={pid:pid,pharmacyname:pharmacyname,blockchainaddress:blockchainaddress,privatekey:privatekey,password:password,mobile:mobile};
axios.post("http://localhost:5000/drugtracablity/updatepharmacy", value).then
    (response=>{
      window.location.replace('/viewpharmacy')
    })};
return (
<div>
    <h1>Add pharmacy</h1>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setpid(e.target.value)}
            value={pid}
            placeholder="Enter pid"
          />
          <label htmlFor="pid">pid</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setpharmacyname(e.target.value)}
            value={pharmacyname}
            placeholder="Enter pharmacyname"
          />
          <label htmlFor="pharmacyname">pharmacyname</label>
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

 <input
          type="submit"
          className="btn btn-primary"
          onClick={submitdata}
          style={{ width: "100%" }}
        />
</div>
)
}
export default Updatepharmacy;
