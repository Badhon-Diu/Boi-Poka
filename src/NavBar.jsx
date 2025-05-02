import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="md:p-4 p-2">
      <div className="navbar bg-base-100  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex navb">
          <ul className="menu menu-horizontal md:flex md:gap-6 px-1 text-xl">
            <li>
              <NavLink to="home">Home</NavLink>
            </li>
            <li>
              <NavLink>Listed Books</NavLink>
            </li>
            <li>
              <NavLink>Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex lg:flex sm:flex gap-4">
          <a className="btn rounded-xl bg-[#23be0a] p-6 text-white">Sign In</a>
          <a className="btn  rounded-xl p-6 bg-[#59c6d2] text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
