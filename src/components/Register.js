import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    adminName: '',
    email: '',
    password: '',
    schoolType: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:h-screen bg-white">
      {/* Mobile image */}
      <div className="block lg:hidden w-full h-64 bg-gray-100">
        <img
          src="https://hopkinsville.kctcs.edu/about/media/announcements/grad-hats.jpeg" 
          alt="Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 lg:p-8 w-full lg:w-1/2 lg:mr-8 lg:flex lg:items-center lg:justify-center lg:h-full">
        <div className="w-full max-w-sm lg:w-full"> 
          <div className="text-center mb-7 mt-7">
            <h2 className="text-2xl font-bold mb-1">Create an Account</h2>
            <p className="mb-4 text-gray-400">Sign up to start managing your <br/>school's finances efficiently</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-800 mb-1">School Name</label>
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your school's name"
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-1">Administrator Name</label>
              <input
                type="text"
                name="adminName"
                value={formData.adminName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="admin@school.edu"
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Create a strong password"
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-1">School Type</label>
              <select
                name="schoolType"
                value={formData.schoolType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select school type</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded focus:outline-none focus:ring-2"
            >
              Create Account
            </button>
            <p className="text-center mt-4">
              Already have an account? <Link to="/" className="text-black hover:underline">Log in</Link>
            </p>
          </form>
        </div>
      </div>

      {/* Desktop image */}
      <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center lg:h-full">
        <img
          src="https://hopkinsville.kctcs.edu/about/media/announcements/grad-hats.jpeg" 
          alt="Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
