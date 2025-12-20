interface Trend {
    title: string;
    author: string;
  }
  

const trends: Trend[] = [
    {
        title: "Global Leaders Meet to Discuss Climate Change",
        author: "James Anderson"
    },
    {
        title: "Rising Food Prices Affect Millions Worldwide",
        author: "Maria Gonzalez"
    },
    {
        title: "Historic Peace Talks Bring Hope to War-Torn Region",
        author: "Daniel Kim"
    },
    {
        title: "Major Cities Adopt New Sustainable Transport Systems",
        author: "Sophia Williams"
    },
    {
        title: "Cultural Festivals Unite Communities Across Continents",
        author: "Ahmed Hassan"
    },
    {
        title: "International Sports Event Draws Record Viewership",
        author: "Emily Brown"
    }
];


const TrendsList = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 max-w-md w-full mt-6">
      <h3 className="text-3xl font-black text-gray-900 mb-6 pb-4 border-b-2 border-gray-200 flex items-center gap-3">
        <span className="text-4xl">🔥</span>
        Today's Top Trends
      </h3>
      <ul className="space-y-4">
        {
            trends.map((trend, index) => (
                <li 
                    key={index}
                    className="group p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-orange-300 hover:shadow-md"
                >
                    <div className="flex items-start gap-3 mb-2">
                        <span className="text-orange-600 font-black text-lg mt-0.5">#{index + 1}</span>
                        <span className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-200 leading-snug">
                            {trend.title}
                        </span>
                    </div>
                    <div className="pl-8">
                        <span className="text-sm text-gray-500 font-medium">
                            By - <span className="text-gray-700 font-semibold">{trend.author}</span>
                        </span>
                    </div>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default TrendsList