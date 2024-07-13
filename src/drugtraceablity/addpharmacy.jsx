
import axios from "axios";
import { useState } from "react";
const Addpharmacy = () => {
const [pharmacyname, setpharmacyname] = useState('');
const [blockchainaddress, setblockchainaddress] = useState('');
const [privatekey, setprivatekey] = useState('');
const [password, setpassword] = useState('');
const [mobile, setmobile] = useState('');
const submitdata = () => {
 const value={pharmacyname:pharmacyname,blockchainaddress:blockchainaddress,privatekey:privatekey,password:password,mobile:mobile};
axios.post("http://localhost:5000/drugtracablity/insertpharmacy", value);
alert("success")
setpharmacyname('');
setblockchainaddress('');
setprivatekey('');
setpassword('');
setmobile('');
};
return (
<div>
    <h1>Add pharmacy</h1>
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
export default Addpharmacy;
