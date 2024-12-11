import React from "react";

function Navbar() {
  const NavCenter = (
    <>
      <li>
        <details className="group">
          <summary className="text-lg font-semibold">Home</summary>
          <ul className="p-2 bg-blue-700 rounded-lg mt-2 group-hover:block hidden">
            <li>
              <a className="text-white hover:bg-blue-500 px-4 py-2 rounded">Home 1</a>
            </li>
            <li>
              <a className="text-white hover:bg-blue-500 px-4 py-2 rounded">Home 2</a>
            </li>
            <li>
              <a className="text-white hover:bg-blue-500 px-4 py-2 rounded">Home 3</a>
            </li>
            <li>
              <a className="text-white hover:bg-blue-500 px-4 py-2 rounded">Home 4</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details className="group">
          <summary className="text-lg font-semibold">Find a Job</summary>
          <ul className="p-2 bg-blue-700 rounded-lg mt-2 group-hover:block hidden">
            <li>
              <a className="text-white hover:bg-blue-500 px-4 py-2 rounded">Job List</a>
            </li>
            <li>
              <a className="text-white hover:bg-blue-500 px-4 py-2 rounded">Job Grid</a>
            </li>
            <li>
              <a className="text-white hover:bg-blue-500 px-4 py-2 rounded">Job Details</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-blue-600 text-white shadow-lg">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blue-700 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            >
              {NavCenter}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold">ProHire</a>
        </div>

        <div className="navbar-center dropdown dropdown-hover hidden lg:flex">
          <ul className="menu menu-horizontal px-4 text-lg">{NavCenter}</ul>
        </div>

        <div className="navbar-end">
          <a className="btn bg-green-500 hover:bg-green-700 text-white text-lg">Button</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;