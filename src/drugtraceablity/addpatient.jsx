
import axios from "axios";
import { useState } from "react";
const Addpatient = () => {
const [patientname, setpatientname] = useState('');
const [blockchain, setblockchain] = useState('');
const [privatekey, setprivatekey] = useState('');
const [password, setpassword] = useState('');
const [mobile, setmobile] = useState('');
const submitdata = () => {
 const value={patientname:patientname,blockchain:blockchain,privatekey:privatekey,password:password,mobile:mobile};
axios.post("http://localhost:5000/drugtracablity/insertpatient", value);
alert("success")
setpatientname('');
setblockchain('');
setprivatekey('');
setpassword('');
setmobile('');
};
return (
<div>
    <h1>Add patient</h1>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setpatientname(e.target.value)}
            value={patientname}
            placeholder="Enter patientname"
          />
          <label htmlFor="patientname">patientname</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setblockchain(e.target.value)}
            value={blockchain}
            placeholder="Enter blockchain"
          />
          <label htmlFor="blockchain">blockchain</label>
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
export default Addpatient;
