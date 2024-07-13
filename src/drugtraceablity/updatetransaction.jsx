
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Updatetransaction = () => {
var rx=0;
const {state}=useLocation();
const [tid, settid] = useState(state[rx++]);
const [drugid_id, setdrugid_id] = useState(state[rx++]);
const [senderid, setsenderid] = useState(state[rx++]);
const [transactiondate, settransactiondate] = useState(state[rx++]);
const [transaddress, settransaddress] = useState(state[rx++]);
const [remark, setremark] = useState(state[rx++]);
const [receiver, setreceiver] = useState(state[rx++]);
const submitdata = () => {
 const value={tid:tid,drugid_id:drugid_id,senderid:senderid,transactiondate:transactiondate,transaddress:transaddress,remark:remark,receiver:receiver};
axios.post("http://localhost:5000/drugtracablity/updatetransaction", value).then
    (response=>{
      window.location.replace('/viewtransaction')
    })};
return (
<div>
    <h1>Add transaction</h1>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => settid(e.target.value)}
            value={tid}
            placeholder="Enter tid"
          />
          <label htmlFor="tid">tid</label>
        </div>

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
export default Updatetransaction;
