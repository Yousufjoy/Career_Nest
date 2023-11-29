import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { loginUser } = useContext(AuthContext);
  const nav = useNavigate();
  const auth = getAuth();
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("From Login success", user);
        nav("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("Error Message from Login", errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div>
      <div className="container mx-auto flex justify-center items-center lg:px-20 md:px-14 sm:px-8 bg-gray-200 py-12 h-full">
        <div className="grid lg:grid-cols-3 grid-col-1">
          <div className="bg-[#BB78F2] px-9 py-14">
            <h1 className="text-3xl text-white font-medium">Lets Touch Me</h1>
            <p className="py-2 text-base text-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit tdit
              rrum?
            </p>
            <div className="location mt-7">
              {/* ... (unchanged location details) */}
            </div>
          </div>
          <div className="bg-white col-span-2 py-14 lg:px-10 px-8">
            <h2 className="text-3xl font-medium">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col py-4">
                <label htmlFor="Email" className="text-base font-medium">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="outline-none border-b-2 border-solid transition-all"
                />
              </div>
              <div className="flex flex-col py-4">
                <label htmlFor="Password" className="text-base font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="outline-none border-b-2 border-solid transition-all"
                />
              </div>
              <button
                type="submit"
                className="bg-[#BB78F2] px-8 py-3 rounded-md text-white hover:bg-purple-300 border-2 border-solid border-[#BB78F2] transition-all"
              >
                Login Now
              </button>
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14"></span>
                  <span className="font-normal text-gray-500">
                    or login with
                  </span>
                  <span className="h-px bg-gray-400 w-14"></span>
                </span>
                <div className="flex flex-col space-y-4">
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                  >
                    <span>
                      <AiFillGoogleCircle className=" text-blue-400 text-xl"></AiFillGoogleCircle>
                    </span>
                    <span
                      onClick={loginWithGoogle}
                      className="text-sm font-medium text-gray-800 group-hover:text-white"
                    >
                      Google
                    </span>
                  </a>
                </div>
              </div>
            </form>
            <p className=" bg-red-300 rounded-md my-3">{errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
