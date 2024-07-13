import { NavLink, useNavigate } from "react-router-dom";

const Mnav = () => {
  const nav = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/mymingredient">
                  view my ingredient
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/requestapproval">
                  Request approval ingredient
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/adddruglot">
                  create drug
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/transferdrug">
                  Transfer drug
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/viewdrugloteach">
                  View drug
                </NavLink>
              </li>
              <li className="nav-item">
                <p
                  className="nav-link"
                  onClick={() => {
                    window.localStorage.clear();
                    nav("/");
                  }}
                >
                  Logout
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Mnav;
