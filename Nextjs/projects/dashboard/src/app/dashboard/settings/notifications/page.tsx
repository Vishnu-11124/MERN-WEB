import React from "react";

const Notifications = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Notifications</h1>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white p-8 shadow rounded-xl border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Notification Preferences
        </h2>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium">
              Email Notifications
            </label>
            <select className="border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200 outline-none">
              <option>Enable</option>
              <option>Disable</option>
            </select>
          </div>

          {/* SMS */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium">
              SMS Notifications
            </label>
            <select className="border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200 outline-none">
              <option>Enable</option>
              <option>Disable</option>
            </select>
          </div>

          {/* Push */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium">
              Push Notifications
            </label>
            <select className="border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200 outline-none">
              <option>Enable</option>
              <option>Disable</option>
            </select>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-8">
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

export default Notifications;
