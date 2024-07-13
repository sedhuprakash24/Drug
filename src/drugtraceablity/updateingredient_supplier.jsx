
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Updateingredient_supplier = () => {
var rx=0;
const {state}=useLocation();
const [sid, setsid] = useState(state[rx++]);
const [sname, setsname] = useState(state[rx++]);
const [mobile, setmobile] = useState(state[rx++]);
const [blockchainaddress, setblockchainaddress] = useState(state[rx++]);
const [privatekey, setprivatekey] = useState(state[rx++]);
const [password, setpassword] = useState(state[rx++]);
const submitdata = () => {
 const value={sid:sid,sname:sname,mobile:mobile,blockchainaddress:blockchainaddress,privatekey:privatekey,password:password};
axios.post("http://localhost:5000/drugtracablity/updateingredient_supplier", value).then
    (response=>{
      window.location.replace('/viewingredient_supplier')
    })};
return (
<div>
    <h1>Add ingredient_supplier</h1>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setsid(e.target.value)}
            value={sid}
            placeholder="Enter sid"
          />
          <label htmlFor="sid">sid</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setsname(e.target.value)}
            value={sname}
            placeholder="Enter sname"
          />
          <label htmlFor="sname">sname</label>
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
export default Updateingredient_supplier;
