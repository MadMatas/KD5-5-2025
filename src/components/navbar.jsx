import { Link } from "react-router";

function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Home
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Games</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link to="/Sekiro">Sekiro</Link>
                  </li>
                  <li>
                    <Link to="">Link2</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
