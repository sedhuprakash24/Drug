import axios from "axios";
import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
const Register = () => {
  const [companyname, setcompanyname] = useState("");

  const [pass, setpass] = useState("");
  const [person, setperson] = useState("Ingredient_supplier");
  const [mobile, setmobile] = useState("");
  const [address, setaddress] = useState("");
  const [privatekey, setprivatekey] = useState("");
  const nav = useNavigate();
  const submitdata = () => {
    const value = {
      name: companyname,
      password: pass,
      mobile: mobile,
      blockchainaddress: address,
      privatekey: privatekey,
    };
    console.log(value);
    if (person === "Ingredient_supplier") {
      axios
        .post(
          "http://localhost:5000/drugtracablity/insertingredient_supplier",
          value
        )
        .then((res) => {
          alert("success");
        });
    } else if (person === "Manufacture") {
      axios
        .post("http://localhost:5000/drugtracablity/insertmanufacture", value)
        .then((res) => {
          alert("success");
        });
    } else if (person === "Distributer") {
      axios
        .post("http://localhost:5000/drugtracablity/insertdistributer", value)
        .then((res) => {
          alert("success");
        });
    } else if (person === "Pharmacy") {
      axios
        .post("http://localhost:5000/drugtracablity/insertpharmacy", value)
        .then((res) => {
          alert("success");
        });
    } else if (person === "Patient") {
      axios
        .post("http://localhost:5000/drugtracablity/insertpatient", value)
        .then((res) => {
          alert("success");
        });
    }
    setcompanyname("");
    setpass("");
    setmobile("");
    setaddress("");
    setprivatekey("");
  };
  return (
    <div>
      <NavLink to="/">
        <button className="btn btn-success">Home</button>
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
              <h5>Register</h5>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  onChange={(e) => setcompanyname(e.target.value)}
                  value={companyname}
                  placeholder="Enter Name"
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
                  placeholder="Enter Password"
                />
                <label className="form-label" for="form3Example4">
                  Password
                </label>
              </div>
              <div className="form-outline mb-3">
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  onChange={(e) => setmobile(e.target.value)}
                  value={mobile}
                  placeholder="Enter Mobile"
                />
                <label className="form-label" for="form3Example4">
                  Mobile
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  onChange={(e) => setaddress(e.target.value)}
                  value={address}
                  placeholder="Enter Address"
                />
                <label className="form-label" for="form3Example4">
                  Block chain address
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  onChange={(e) => setprivatekey(e.target.value)}
                  value={privatekey}
                  placeholder="Enter Private key"
                />
                <label className="form-label" for="form3Example4">
                  Private key
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
                  <option>Manufacture</option>
                  <option>Distributer</option>
                  <option>Pharmacy</option>
                  <option>Patient</option>
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
                  Register
                </button>
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

export default Register;
