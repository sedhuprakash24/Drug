import { NavLink, useNavigate } from "react-router-dom";

const Innav = () => {
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
                <NavLink className="nav-link" to="/addingredient">
                  Add ingredient
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/transferingredient">
                  Transfer ingredient
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/myingredient">
                  view my ingredient
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

export default Innav;
