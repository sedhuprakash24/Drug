
import axios from "axios";
import { useState } from "react";
const Addmanufacture = () => {
const [Manufacturename, setManufacturename] = useState('');
const [mobile, setmobile] = useState('');
const [blockchainaddress, setblockchainaddress] = useState('');
const [privatekey, setprivatekey] = useState('');
const [password, setpassword] = useState('');
const submitdata = () => {
 const value={Manufacturename:Manufacturename,mobile:mobile,blockchainaddress:blockchainaddress,privatekey:privatekey,password:password};
axios.post("http://localhost:5000/drugtracablity/insertmanufacture", value);
alert("success")
setManufacturename('');
setmobile('');
setblockchainaddress('');
setprivatekey('');
setpassword('');
};
return (
<div>
    <h1>Add manufacture</h1>
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
export default Addmanufacture;
