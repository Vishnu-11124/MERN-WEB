import React from "react";
import Link from "next/link";

const Settings = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600 mt-2">
          Customize your Account, Profile and Notifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Sidebar */}
        <div className="bg-white shadow rounded-xl p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/dashboard/settings/account"
                className="block px-3 py-2 bg-green-100 rounded-lg border hover:bg-gray-100 transition"
              >
                Account
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings/profile"
                className="block px-3 py-2 bg-green-100 rounded-lg border hover:bg-gray-100 transition"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings/notifications"
                className="block px-3 py-2 bg-green-100 rounded-lg border hover:bg-gray-100 transition"
              >
                Notifications
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Page Content */}
        <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Select a Setting</h2>
          <p className="text-gray-500 mt-2">
            Choose an option from the sidebar to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
