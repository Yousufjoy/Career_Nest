import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const AddJobs = () => {
  const { user } = useContext(AuthContext);
  console.log(`The user is ${user.displayName}`);

  const handleAddJobs = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const postedBy = form.name.value;
    const postingDate = form.postingDate.value;
    const deadline = form.deadline.value;
    const salaryRange = form.salaryRange.value;
    const applicantsNumber = form.applicantsNumber.value;
    const jobType = form.jobType.value;
    console.log({
      jobTitle,
      postedBy,
      postingDate,
      deadline,
      salaryRange,
      applicantsNumber,
      jobType,
    });
  };

  return (
    <div className="max-w-md bg-white rounded-md overflow-hidden shadow-lg mx-auto my-4">
      {/* Form Header */}
      <div className="bg-blue-500 text-white py-2 px-4">
        <h2 className="text-2xl font-semibold">Job Posting Form</h2>
      </div>

      {/* Form Content */}
      <form onSubmit={handleAddJobs}>
        <div className="p-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="jobTitle" className="text-base font-medium mb-1">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-base font-medium mb-1">
              Posted by
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="postingDate" className="text-base font-medium mb-1">
              Job Posting Date
            </label>
            <input
              type="text"
              id="postingDate"
              name="postingDate"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="deadline" className="text-base font-medium mb-1">
              Application Deadline
            </label>
            <input
              type="text"
              id="deadline"
              name="deadline"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="salaryRange" className="text-base font-medium mb-1">
              Salary Range
            </label>
            <input
              type="text"
              id="salaryRange"
              name="salaryRange"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="applicantsNumber"
              className="text-base font-medium mb-1"
            >
              Job Applicants Number
            </label>
            <input
              type="text"
              id="applicantsNumber"
              name="applicantsNumber"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          {/* Job Type Dropdown */}
          <div className="flex flex-col mb-4">
            <label htmlFor="jobType" className="text-base font-medium mb-1">
              Job Type
            </label>
            <select
              id="jobType"
              name="jobType"
              className="border border-gray-300 px-3 py-2 rounded-md"
            >
              <option value="OnSite">On Site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="PartTime">Part-Time</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Submit Job Posting
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
