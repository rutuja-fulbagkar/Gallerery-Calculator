import React from "react";
import { NavLink,Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" href="/">
            <img
              src="https://res.cloudinary.com/charn123nbvc/image/upload/v1659680027/nxt-trendz-logo-img_ox7hwl.png"
              alt="avatar"
              width="100"
              height="24"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <a className="navbar-brand">
                <img
                  src="https://res.cloudinary.com/charn123nbvc/image/upload/v1659680027/nxt-trendz-logo-img_ox7hwl.png"
                  alt="Bootstrap"
                  width="100"
                  height="24"
                />
              </a>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item text-start">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item text-start">
                  <Link className="nav-link" to="/about">
              About
                  </Link>
                </li>
                <li className="nav-item text-start">
                  <Link className="nav-link" to="/contactUs">
                    ContactUs
                  </Link>
                </li>
                <li className="nav-item text-start dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                   
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark ">
                    <li>
                      <a className="dropdown-item">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
