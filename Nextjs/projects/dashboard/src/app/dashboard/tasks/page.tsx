import React from "react";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Fix Navbar Bug",
      description:
        "Resolve the issue where the navbar overlaps content on scroll.",
      status: "in-progress",
      dueDate: "2025-12-03",
    },
    {
      id: 2,
      title: "Write API Documentation",
      description: "Prepare detailed documentation for the authentication API.",
      status: "pending",
      dueDate: "2025-12-10",
    },
    {
      id: 3,
      title: "Update User Profile UI",
      description: "Redesign the user profile page with new components.",
      status: "completed",
      dueDate: "2025-11-29",
    },
    {
      id: 4,
      title: "Optimize Database Queries",
      description: "Improve performance of product listing queries.",
      status: "in-progress",
      dueDate: "2025-12-08",
    },
    {
      id: 5,
      title: "Create Test Cases",
      description: "Write unit and integration test cases for the cart module.",
      status: "pending",
      dueDate: "2025-12-12",
    },
    {
      id: 6,
      title: "Implement Dark Mode",
      description: "Add dark mode toggle and theme persistence.",
      status: "in-progress",
      dueDate: "2025-12-15",
    },
    {
      id: 7,
      title: "Refactor Login Logic",
      description: "Improve login state handling and remove redundant code.",
      status: "completed",
      dueDate: "2025-11-27",
    },
    {
      id: 8,
      title: "Set Up Analytics",
      description: "Integrate analytics tracking for user interactions.",
      status: "pending",
      dueDate: "2025-12-18",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div>
              <h2 className="text-xl font-semibold">{task.title}</h2>
              <p className="text-gray-600 mt-1">{task.description}</p>
              <p className="text-sm mt-2 font-medium">
                Due Date: {task.dueDate}
              </p>
            </div>

            <section className="flex items-center justify-between mt-4">
              <span
                className={`px-3 py-1 text-sm rounded-full border ${
                  task.status === "pending"
                    ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                    : task.status === "in-progress"
                    ? "bg-blue-100 text-blue-700 border-blue-300"
                    : "bg-green-100 text-green-700 border-green-300"
                }`}
              >
                {task.status}
              </span>

              <div className="flex items-center gap-2">
                <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Edit
                </button>

                {task.status !== "completed" && (
                  <button className="px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600">
                    Complete
                  </button>
                )}

                <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
                  Delete
                </button>
              </div>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Tasks;
