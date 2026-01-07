import { MessageCircle, ThumbsUp } from "lucide-react";

interface PopularBlogsProps {
  title: string;
  author: string;
  likes: number;
  comments: number;
}

const PopularBlogs = () => {
  const Blogs: PopularBlogsProps[] = [
    {
      title: "Understanding React Hooks",
      author: "Vishnu Kumar",
      likes: 245,
      comments: 34,
    },
    {
      title: "Getting Started with TypeScript",
      author: "Anjali Sharma",
      likes: 198,
      comments: 27,
    },
    {
      title: "Mastering Tailwind CSS",
      author: "Rahul Mehta",
      likes: 312,
      comments: 45,
    },
    {
      title: "Node.js Best Practices",
      author: "Sneha Patel",
      likes: 176,
      comments: 19,
    },
    {
      title: "Building REST APIs with Express",
      author: "Amit Verma",
      likes: 289,
      comments: 38,
    },
    {
      title: "MongoDB Schema Design Tips",
      author: "Priya Nair",
      likes: 221,
      comments: 26,
    },
    {
      title: "JavaScript ES6 Features Explained",
      author: "Karan Singh",
      likes: 340,
      comments: 52,
    },
    {
      title: "Authentication in MERN Stack",
      author: "Neha Gupta",
      likes: 267,
      comments: 41,
    },
    {
      title: "Optimizing React Performance",
      author: "Arjun Rao",
      likes: 193,
      comments: 22,
    },
    {
      title: "Deploying Apps with Docker",
      author: "Rohit Iyer",
      likes: 158,
      comments: 17,
    },
  ];

  return (
    <div className="w-[23rem] bg-white p-5 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Popular Blogs</h2>

      <ul className="space-y-4">
        {Blogs.map((blog, index) => (
          <li
            key={index}
            className="pb-3 border-b last:border-none"
          >
            {/* Title */}
            <h3 className="text-sm font-medium text-gray-900 leading-snug">
              {blog.title}
            </h3>

            {/* Author */}
            <p className="text-xs text-gray-500 mt-1">
              Published by <span className="font-medium">{blog.author}</span>
            </p>

            {/* Stats */}
            <div className="flex items-center gap-5 mt-3 text-gray-600 text-sm">
              <div className="flex items-center gap-1">
                <ThumbsUp size={16} />
                <span>{blog.likes}</span>
              </div>

              <div className="flex items-center gap-1">
                <MessageCircle size={16} />
                <span>{blog.comments}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
