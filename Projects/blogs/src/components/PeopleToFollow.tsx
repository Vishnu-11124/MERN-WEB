import UserCard from "./UserCard";

export interface Person {
    name: string;
    following: boolean;
  }
  
const peopleToFollow: Person[] = [
    { name: "Roney Davis", following: false },
    { name: "Aarav Sharma", following: true },
    { name: "Neha Patel", following: false },
    { name: "Karthik Rao", following: true },
    { name: "Priya Mehta", following: false },
    { name: "Rahul Verma", following: true },
    { name: "Ananya Singh", following: false }
];


const PeopleToFollow = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 max-w-md w-full">
      <h3 className="text-3xl font-black text-gray-900 mb-6 pb-4 border-b-2 border-gray-200 flex items-center gap-3">
        <span className="text-4xl">👥</span>
        People to Follow
      </h3>
      <div className="space-y-4">
        {
            peopleToFollow.map((person, index) => (
                <UserCard key={index} person={person}/>
            ))
        }
      </div>
    </div>
  )
}

export default PeopleToFollow