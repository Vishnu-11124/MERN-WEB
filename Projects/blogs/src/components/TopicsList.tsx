const topics: string[] = [
  "Crypto",
  "Blockchain",
  "Web Development",
  "React",
  "TypeScript",
  "Node.js",
  "Artificial Intelligence",
  "Machine Learning",
  "Cyber Security",
  "Cloud Computing",
  "DevOps",
  "Data Structures",
  "Algorithms",
  "FinTech",
  "Startup Culture"
];


const TopicsList = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-xl">🎯</span>
          Topics for you
        </h3>
        <div className="flex flex-wrap gap-2">
          {
              topics.map((topic, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-gray-700 hover:text-white font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-200 hover:border-transparent text-xs"
                  >
                      {topic}
                  </span>
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default TopicsList