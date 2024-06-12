import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <li>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addArtAndCraft">Add Art And Craft</NavLink>
      <NavLink to="/allArtAndCraftItems">All Art & Craft Items</NavLink>
      <NavLink to="/myArtAndCraftList">My Art & Craft List</NavLink>
    </li>
  );

  const handleLogout = () => {
    logOut()
      .then((result) => {
        toast.success("Account successfully logout.");
      })
      .catch((error) => {
        toast.error("Something was wrong.");
      });
  };
  return (
    <div className="navbar bg-[#F6F3EE]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <h1 className="text-[20px] md:hidden">Ranga</h1>
      </div>
      <div className="navbar-center font-mono text-[30px] py-[20px] hidden md:block">
        Ranga
      </div>
      <div className="navbar-end">
        <div className="flex gap-2 pr-3 justify-center items-center">
          {user && user.photoURL ? (
            <div>
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role=""
                  className=" bg-[#FFFFFF] rounded-full mt-2"
                >
                  <img
                    className="rounded-full object-cover  h-[45px] w-[45px]"
                    src={user.photoURL}
                    alt="image"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[20] menu p-2 shadow bg-base-100 rounded-box w-40 -ml-5"
                >
                  <li>
                    <a className="font-bold">{user.displayName}</a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm h-[40px] bg-[#FFFFFF]"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <></>
          )}
          {user && user ? (
            <button
              onClick={handleLogout}
              className="btn btn-sm h-[40px] bg-[#FFFFFF]"
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <button className="btn btn-sm h-[40px] bg-[#FFFFFF]">
                  Login
                </button>
              </Link>
              <Link to="/registration">
                <button className="btn btn-sm h-[40px] bg-[#FFFFFF]">
                  Register
                </button>
              </Link>
            </div>
          )}
          <label className="swap swap-rotate mr-1">
            {/* this hidden checkbox controls the state */}
            <input
              onChange={handleToggle}
              type="checkbox"
              className="theme-controller"
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
