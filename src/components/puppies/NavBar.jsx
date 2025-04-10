import { NavLink } from "react-router-dom";

export function NavBar({ setSearch }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand fw-semibold fs-3 link-primary"
            to="/"
          >
            Puppy Bowl
          </NavLink>
          <form
            className="d-flex"
            role="search"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              className="form-control form-control-lg me-4"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </form>
        </div>
      </nav>
    </>
  );
}
