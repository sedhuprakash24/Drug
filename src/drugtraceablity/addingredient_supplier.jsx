
import axios from "axios";
import { useState } from "react";
const Addingredient_supplier = () => {
const [sname, setsname] = useState('');
const [mobile, setmobile] = useState('');
const [blockchainaddress, setblockchainaddress] = useState('');
const [privatekey, setprivatekey] = useState('');
const [password, setpassword] = useState('');
const submitdata = () => {
 const value={sname:sname,mobile:mobile,blockchainaddress:blockchainaddress,privatekey:privatekey,password:password};
axios.post("http://localhost:5000/drugtracablity/insertingredient_supplier", value);
alert("success")
setsname('');
setmobile('');
setblockchainaddress('');
setprivatekey('');
setpassword('');
};
return (
<div>
    <h1>Add ingredient_supplier</h1>
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
export default Addingredient_supplier;
