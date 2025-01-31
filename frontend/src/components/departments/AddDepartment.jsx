import React, { useState } from "react";

const AddDepartment = () => {
  const [department, setDepartment] = useState({
    dep_name: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {
      if (error.response.data.error) {
        alert(error.response.data.error);
      }
    }
  };
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <div>
        <h3 className="text-2xl font-bold mb-6">Add Department</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="dep_name"
              className="text-sm font-medium text-gray-700"
            >
              Department Name
            </label>
            <input
              type="text"
              id="dep_name"
              name="dep_name"
              placeholder="Enter Department Name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              value={department.dep_name}
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              placeholder="Enter Department Name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              rows={4}
              onChange={handleChange}
              value={department.description}
            />
          </div>
          <div>
            <button className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
              Add Department
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;
