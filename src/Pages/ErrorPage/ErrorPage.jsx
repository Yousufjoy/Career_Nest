import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-red-500 mb-2">
            Oops! Something went wrong.
          </h1>
          <p className="text-gray-600">
            We're sorry, but it seems there was an error. Please try again
            later.
          </p>
        </div>

        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
