import { useMemo, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { useFirestoreContext } from "../context/FirestoreContext";

const LogIn = () => {
  const { login, currentUser } = useAuthContext();
  return (
    !currentUser && (
      <button type="button" className="btn btn-warning" onClick={login}>
        Login
      </button>
    )
  );
};

const LogOut = () => {
  const { logout, currentUser } = useAuthContext();
  return (
    !!currentUser && (
      <button type="button" className="btn btn-danger" onClick={logout}>
        Logout
      </button>
    )
  );
};

function Navigation() {
  const { currentUser } = useAuthContext();
  const { pathname } = useLocation();
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link
          className={`nav-link ${pathname === "/" ? "active" : ""}`}
          aria-current="page"
          to="/"
        >
          Home
        </Link>
      </li>
      {currentUser && (
        <li className="nav-item">
          <Link
            className={`nav-link ${
              pathname === "/stockimages" ? "active" : ""
            }`}
            aria-current="page"
            to="/stockimages"
          >
            My Stock Images
          </Link>
        </li>
      )}
      {currentUser && (
        <li className="nav-item">
          <Link
            className={`nav-link ${pathname === "/profile" ? "active" : ""}`}
            aria-current="page"
            to="/profile"
          >
            Profile
          </Link>
        </li>
      )}
    </ul>
  );
}

function SearchForm() {
  const { text, search } = useState(null);
  const { filterItems: filter } = useFirestoreContext;
  const handleOnChange = (e) => {
    search(e.target.value);
    filter(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    filter(text);
  };
  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        onChange={handleOnChange}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

function Dropdown() {
  const { currentUser } = useAuthContext();
  const username = useMemo(() => {
    return currentUser?.displayName || "Profile";
  }, [currentUser]);
  const avatar = useMemo(() => {
    return !!currentUser ? (
      <img
        className="avatar"
        src={currentUser?.photoURL}
        alt={currentUser?.displayName}
        width="34"
        height="34"
      />
    ) : (
      "Login"
    );
  }, [currentUser]);

  return (
    <ul className="navbar-nav mb-2 mb-lg-0">
      {" "}
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {avatar}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a className="dropdown-item text-center" href="/">
              {currentUser && <Link to={"/profile"}> {username}</Link>}
            </a>
            <li>
              <hr className="dropdown divider" />
            </li>
          </li>
          <div className="d-flex justify-content-center">
            <LogIn />
            <LogOut />
          </div>
        </ul>
      </li>
    </ul>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          📸 Snap-Studio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Navigation />
          <SearchForm />
          <Dropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
