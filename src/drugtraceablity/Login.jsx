import axios from "axios";
import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const [companyname, setcompanyname] = useState("");

  const [pass, setpass] = useState("");
  const [person, setperson] = useState("Ingredient_supplier");
  const nav = useNavigate();
  const submitdata = () => {
    if (companyname === "FDA" && pass === "1212") {
      nav("/viewfda");
    } else {
      const value = {
        name: companyname,
        pass: pass,
        person: person,
      };
      axios
        .post("http://localhost:5000/drugtracablity/login", value)
        .then((res) => {
          if (res.data !== null) {
            if (person === "Ingredient_supplier") {
              window.localStorage.setItem("id", res.data[0]);
              nav("/addingredient");
            } else if (person === "Manufacture") {
              window.localStorage.setItem("id", res.data[0]);
              nav("/mymingredient");
            } else if (person === "Distributer") {
              window.localStorage.setItem("id", res.data[0]);
              nav("/viewdistributer");
            } else if (person === "Pharmacy") {
              window.localStorage.setItem("id", res.data[0]);
              nav("/viewpharmacy");
            } else if (person === "Patient") {
              window.localStorage.setItem("id", res.data[0]);
              nav("/viewpatient");
            }
          } else {
            alert("User and password");
          }
        });
    }
  };
  return (
    <div style={{ marginTop: "10%" }}>
      <NavLink to="/">
        <button className="btn btn-success">Home</button>
      </NavLink>
      <NavLink to="/searchdrug">
        <button className="btn btn-danger">Search Drug</button>
      </NavLink>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>

            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <h5>Login</h5>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setcompanyname(e.target.value)}
                  value={companyname}
                  placeholder="Enter name"
                />
                <label className="form-label" for="form3Example3">
                  Name
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  onChange={(e) => setpass(e.target.value)}
                  value={pass}
                  placeholder="Enter password"
                />
                <label className="form-label" for="form3Example4">
                  Password
                </label>
              </div>
              <div className="form-outline mb-3">
                <select
                  id="form3Example4"
                  className="form-control form-control-lg"
                  onChange={(e) => setperson(e.target.value)}
                  value={person}
                >
                  <option selected disabled>
                    Select User
                  </option>
                  <option>Ingredient_supplier</option>
                  <option>FDA</option>
                  <option>Manufacture</option>
                  <option>Distributer</option>
                  <option>Pharmacy</option>
                </select>
                <label className="form-label" for="form3Example4">
                  User type
                </label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={submitdata}
                >
                  Login
                </button>

                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <NavLink to="/Register">Register</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2023. All rights reserved.
          </div>

          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
