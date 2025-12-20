import { FaUserCircle } from "react-icons/fa";
import type { Person } from "./PeopleToFollow";

interface UserCardProps {
    key: number,
    person: Person;
  }
  
const UserCard = ({key, person}: UserCardProps) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-200 hover:border-purple-400 group">
      <section key={key} className="flex items-center gap-4">
        <div className="relative">
          <FaUserCircle className="text-5xl text-purple-600 group-hover:text-purple-700 transition-colors duration-200" />
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <span className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">
            {
                person.name
            }
        </span>
      </section>

      <button className={`py-2.5 px-6 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap ${
          person.following 
            ? "bg-gray-200 text-gray-700 hover:bg-gray-300 border-2 border-gray-300 hover:border-gray-400" 
            : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg hover:scale-105 border-2 border-transparent"
        }`}>
        {
            person.following ? "Following" : "Follow"
        }
      </button>
    </div>
  )
}

export default UserCard