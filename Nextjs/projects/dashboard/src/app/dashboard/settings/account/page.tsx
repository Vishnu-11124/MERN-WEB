import React from "react";

const Account = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Account Settings</h1>
        <p className="text-gray-600 mt-2">
          Manage your account information, email, and password.
        </p>
      </div>

      {/* Account Info Section */}
      <div className="bg-white p-8 shadow rounded-xl border border-gray-100 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Account Information
        </h2>

        <div className="space-y-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              value="John Jackob"
              placeholder="Enter your name"
              className="border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value="johnjackob@gmail.com"
              placeholder="Enter your email"
              className="border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              value="JohnJackob"
              placeholder="Enter username"
              className="border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Password Section */}
      <div className="bg-white p-8 shadow rounded-xl border border-gray-100 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Change Password
        </h2>

        <div className="space-y-6">
          {/* Current Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">
              Current Password
            </label>
            <input
              type="password"
              placeholder="Enter current password"
              className="border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          {/* New Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          {/* Confirm New Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              placeholder="Re-enter new password"
              className="border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <button className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
          Cancel
        </button>
        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Account;
