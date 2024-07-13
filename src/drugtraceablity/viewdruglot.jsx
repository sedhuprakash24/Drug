import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Disnav from "./Disnav";

const Viewdruglot = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [value, setvalue] = useState([]);
  useEffect(() => {
    const v = window.localStorage.getItem("id");
    axios
      .post("http://localhost:5000/drugtracablity/viewdruglot", { id: v })
      .then((response) => {
        setData(response.data);
        setvalue(response.data);
      });
  }, []);
  const viewdruglot = (e) => {
    nav("/updatedruglot", { state: e });
  };
  const deletec = (e) => {
    axios
      .post("http://localhost:5000/drugtracablity/deletedruglot", { id: e })
      .then((response) => {
        window.location.reload();
      });
  };
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
      <Disnav />
      <h3>Distributer druglot</h3>
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
              <th>Drugid</th>
              <th>Drugname</th>
              <th>Owners</th>
              <th>Ingredient Id</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr key={d[0]}>
                  <td>{d[0]}</td>
                  <td>{d[1]}</td>
                  <td>{d[2]}</td>
                  <td>{d[3]}</td>
                  {/* <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => deletec(d[0])}
                    >
                      delete
                    </button>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Viewdruglot;
