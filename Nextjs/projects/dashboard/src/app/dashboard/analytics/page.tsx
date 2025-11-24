import React from "react";

const Analytics = () => {
  const metrics = [
    {
      title: "Total Users",
      value: "12,450",
      change: "5.2%",
      isPositive: true,
    },
    {
      title: "Monthly Sales",
      value: "$34,800",
      change: "3.8%",
      isPositive: true,
    },
    {
      title: "Bounce Rate",
      value: "48%",
      change: "-2.1%",
      isPositive: false,
    },
    {
      title: "New Signups",
      value: "1,120",
      change: "-0.9%",
      isPositive: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{metric.title}</h3>
            <p className="text-3xl font-bold mt-2">{metric.value}</p>

            <p
              className={`mt-3 font-medium ${
                metric.isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {metric.isPositive ? "▲" : "▼"} {metric.change}
            </p>
          </div>
        ))}
      </div>

      {/* Traffic Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <div className="border rounded-xl p-5 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Website Traffic</h2>
          <div className="h-48 flex items-center justify-center text-gray-500">
            Charts Placeholder
          </div>
        </div>

        <div className="border rounded-xl p-5 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Sales Overview</h2>
          <div className="h-48 flex items-center justify-center text-gray-500">
            Charts Placeholder
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="border rounded-xl p-5 shadow-sm mb-10">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>

        <ul className="space-y-5">
          <li className="flex justify-between border-b pb-3">
            <div>
              <h3 className="font-semibold">User Registration</h3>
              <p className="text-gray-600">New user signed up on 2025-07-23</p>
            </div>
            <p className="text-green-600 font-semibold">+10 Users</p>
          </li>

          <li className="flex justify-between border-b pb-3">
            <div>
              <h3 className="font-semibold">Sales Increase</h3>
              <p className="text-gray-600">Sales grew by 12% on 2025-06-23</p>
            </div>
            <p className="text-green-600 font-semibold">$23,000</p>
          </li>

          <li className="flex justify-between pb-1">
            <div>
              <h3 className="font-semibold">Bounce Rate</h3>
              <p className="text-gray-600">Rate increased 10% on 2025-07-23</p>
            </div>
            <p className="text-red-600 font-semibold">10% ↑</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
