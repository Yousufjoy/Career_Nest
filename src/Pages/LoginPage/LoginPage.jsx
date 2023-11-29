import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { loginUser } = useContext(AuthContext);
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
                className="bg-[#BB78F2] px-8 py-3 rounded-md text-white hover:bg-white border-2 border-solid border-[#BB78F2] transition-all"
              >
                Login Now
              </button>
            </form>
            <p className=" bg-red-300 rounded-md my-3">{errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
