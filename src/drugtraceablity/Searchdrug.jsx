import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Searchdrug = () => {
  const [check, setcheck] = useState("");
  const [data, setdata] = useState([]);
  return (
    <>
      <div style={{ backgroundColor: "lightblue", height: "100vh" }}>
        <NavLink to="/" style={{ float: "right" }}>
          <button className="btn btn-success">Home</button>
        </NavLink>
        <h1 style={{ textAlign: "center" }}>Drug Verfication</h1>
        <input
          type="text"
          value={check}
          className="form-control"
          onChange={(e) => setcheck(e.target.value)}
          style={{
            width: "50%",
            marginLeft: "25%",
            textAlign: "center",
            fontSize: "2vh",
          }}
          placeholder="Enter the drug Id"
        />
        <br />
        <input
          type="submit"
          className="btn btn-primary"
          style={{ width: "50%", marginLeft: "25%" }}
          onClick={() => {
            const value = {
              drug: check.toLowerCase(),
            };
            axios
              .post("http://localhost:5000/drugtracablity/viewdrugcheck", value)
              .then((res) => {
                setdata(res.data);
              });
          }}
        />
        {data.length === 5 ? (
          <>
            <h1 style={{ textAlign: "center" }}>
              Drug id-{check.toUpperCase()}
            </h1>
            <table
              className="table table-hover"
              style={{ textAlign: "center" }}
            >
              <thead>
                <tr>
                  <th>Blockchain transaction</th>
                  <th>Senderid</th>
                  <th>ReceiverId</th>
                  <th>Remark</th>
                  <th>Drugid or Ingredientid</th>
                  <th>Transaction date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((c) => {
                  return (
                    <tr key={c[0]}>
                      <td>{c[4]}</td>
                      <td>{c[2]}</td>
                      <td>{c[6]}</td>
                      <td>{c[5]}</td>
                      <td>{c[1]}</td>
                      <td>{c[3]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <></>
        )}
        {data.length === 5 ? (
          <h1 style={{ textAlign: "center", color: "white" }}>
            It a Good Drug Can verify in blockchain too
          </h1>
        ) : data.length !== 0 ? (
          <h1 style={{ textAlign: "center", color: "white" }}>
            Its not a legal drug
          </h1>
        ) : (
          <h1 style={{ textAlign: "center", color: "white" }}>
            Invalid drug details
          </h1>
        )}
      </div>
    </>
  );
};

export default Searchdrug;
