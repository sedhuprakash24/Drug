import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Fdanav from "./Fdanav";

const Viewfda = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [value, setvalue] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:5000/drugtracablity/viewingredientapprove")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setvalue(response.data);
      });
  }, []);

  const searchdata = (e) => {
    const r = [];

    for (var k of value) {
      var v = 0;

      for (var n of k) {
        n = "" + n;
        if (n.toLowerCase().indexOf(e) !== -1) {
          v = 1;
          break;
        }
      }
      if (v === 1) {
        r.push(k);
      }
    }
    setData(r);
  };

  return (
    <div>
      <Fdanav />
      <h3>Ingredient</h3>
      <input
        type="search"
        onChange={(e) => searchdata(e.target.value)}
        className="form-select"
        placeholder="Search"
      />
      <div className="table-responsive">
        <table className="table table-bordered" id="table_id">
          <thead>
            <tr>
              <th>iid</th>
              <th>ingredientname</th>
              <th>status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr key={d[0]}>
                  <td>{d[0]}</td>
                  <td>{d[1]}</td>
                  <td>{d[2]}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        axios
                          .post(
                            "http://localhost:5000/drugtracablity/approveingredient",
                            { id: d[0], status: "approved" }
                          )
                          .then((response) => {
                            alert("Approved");
                            window.location.reload();
                          });
                      }}
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        axios
                          .post(
                            "http://localhost:5000/drugtracablity/approveingredient",
                            { id: d[0], status: "reject" }
                          )
                          .then((response) => {
                            window.location.reload();
                          });
                      }}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Viewfda;
