
import axios from "axios";
import { useState } from "react";
const Addtransaction = () => {
const [drugid_id, setdrugid_id] = useState('');
const [senderid, setsenderid] = useState('');
const [transactiondate, settransactiondate] = useState('');
const [transaddress, settransaddress] = useState('');
const [remark, setremark] = useState('');
const [receiver, setreceiver] = useState('');
const submitdata = () => {
 const value={drugid_id:drugid_id,senderid:senderid,transactiondate:transactiondate,transaddress:transaddress,remark:remark,receiver:receiver};
axios.post("http://localhost:5000/drugtracablity/inserttransaction", value);
alert("success")
setdrugid_id('');
setsenderid('');
settransactiondate('');
settransaddress('');
setremark('');
setreceiver('');
};
return (
<div>
    <h1>Add transaction</h1>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setdrugid_id(e.target.value)}
            value={drugid_id}
            placeholder="Enter drugid_id"
          />
          <label htmlFor="drugid_id">drugid_id</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setsenderid(e.target.value)}
            value={senderid}
            placeholder="Enter senderid"
          />
          <label htmlFor="senderid">senderid</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => settransactiondate(e.target.value)}
            value={transactiondate}
            placeholder="Enter transactiondate"
          />
          <label htmlFor="transactiondate">transactiondate</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => settransaddress(e.target.value)}
            value={transaddress}
            placeholder="Enter transaddress"
          />
          <label htmlFor="transaddress">transaddress</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setremark(e.target.value)}
            value={remark}
            placeholder="Enter remark"
          />
          <label htmlFor="remark">remark</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setreceiver(e.target.value)}
            value={receiver}
            placeholder="Enter receiver"
          />
          <label htmlFor="receiver">receiver</label>
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
export default Addtransaction;
