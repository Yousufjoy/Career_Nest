import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { AuthContext } from "../Providers/AuthProviders";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    logoutUser().then().catch();
  };

  return (
    <div className=" ">
      <nav className="">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold text-[#3A3A3A] flex items-center"
          >
            <img className=" w-[300px]" src={logo} />
          </a>

          <div className="hidden md:flex items-center">
            <NavLink
              to="/"
              className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg text-[#bb78f2]"
            >
              Home
            </NavLink>

            <NavLink
              to="/addproduct"
              className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg text-[#bb78f2]"
            >
              All Jobs
            </NavLink>

            {user && (
              <>
                <NavLink
                  to="/addjobs"
                  className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg text-[#bb78f2]"
                >
                  Add a Job
                </NavLink>
                <NavLink
                  to="/mycart"
                  className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg text-[#bb78f2]"
                >
                  My Jobs
                </NavLink>
                <NavLink
                  to="/mycart"
                  className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg text-[#bb78f2]"
                >
                  Applied Jobs
                </NavLink>
              </>
            )}
            <NavLink
              to="/mycart"
              className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg text-[#bb78f2]"
            >
              Blogs
            </NavLink>

            {user ? (
              <>
                <NavLink
                  to="/login"
                  className="px-3 py-2 hidden transition duration-300 ease-in-out hover:text-[#767676] text-lg text-[#F7A034]"
                >
                  Register
                </NavLink>

                <p className=" font-bold  px-[15px]">{user.displayName}</p>
                <img
                  className=" w-[50px] h-[45px] rounded-full  mx-[10px]"
                  src={user.photoURL}
                />
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg text-[#bb78f2]"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg text-[#bb78f2]"
                >
                  Register
                </NavLink>
              </>
            )}

            {user && (
              <>
                <NavLink
                  to="/"
                  className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg "
                >
                  <button
                    onClick={handleSignOut}
                    className="btn btn-active btn-ghost dark:text-gray-300"
                  >
                    Logout
                  </button>
                </NavLink>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition duration-300 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <NavLink
              to="/"
              className="block text-black hover:text-[#F7A034] px-4 py-2 transition duration-300 ease-in-out dark:text-white"
            >
              Home
            </NavLink>

            <NavLink
              to="/addproduct"
              className="block text-black hover:text-[#F7A034] px-4 py-2 transition duration-300 ease-in-out dark:text-white"
            >
              Add Product
            </NavLink>

            <NavLink
              to="/mycart"
              className="block text-black hover:text-[#F7A034] px-4 py-2 transition duration-300 ease-in-out dark:text-white"
            >
              My Cart
            </NavLink>
            <NavLink
              to="/login"
              className="block text-black hover:text-[#F7A034] px-4 py-2 transition duration-300 ease-in-out dark:text-white"
            ></NavLink>
            {/* {user && (
            <>
              <NavLink
                to="/"
                className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg "
              >
                <button
                  onClick={handleSignOut}
                  className="btn btn-active btn-ghost dark:text-gray-300"
                >
                  Logout
                </button>
              </NavLink>
              <p className=" font-bold  px-[15px]">{user.displayName}</p>
              <img
                className=" w-[50px] rounded-lg  mx-[10px]"
                src={user.photoURL}
              />
            </>
          )} */}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
