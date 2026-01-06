import { useState } from "react";
import { data } from "../utils/data.ts"

interface UserType {
  client: string;
  image: string;
  country: string;
  email: string;
  project: string;
  progress: string;
  status: string;
  date: string;
}

const Table = () => {
    const [ userData, setUserData ] = useState<UserType[]>(data);


    const viewUserList = 7;
    const [ startIndex, setStartIndex ] = useState(0);
    const [ FinalList, setFinalList ] = useState<UserType[] >(userData.slice(startIndex, viewUserList));

    const handlePrevPage = () => {
        if (startIndex === 0) return;
        setStartIndex(startIndex - viewUserList);
        const newFinalList = userData.slice(startIndex - viewUserList, startIndex);
        setFinalList(newFinalList);
    }
    

    const handleNextPage = () => {
        setStartIndex(startIndex + viewUserList);
        const newFinalList = userData.slice(startIndex + viewUserList, startIndex + viewUserList * 2);
        console.log(startIndex+ viewUserList);
        setFinalList(newFinalList);
    }
    
    
  return (
    <div className="p-8">
      <div className="flex gap-4 mb-6">
        {/* Sort */}
        {/* Filter */}
      </div>
      {/* Table */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl ml-12 overflow-hidden">
        <table className="text-white w-full">
          <thead>
            <tr className="border-b border-slate-800/50 bg-slate-800/30">
            <th className="text-left p-4 text-sm font-medium text-gray-400">Image</th>
            <th className="text-left p-4 text-sm font-medium text-gray-400">Name</th>
            <th className="text-left p-4 text-sm font-medium text-gray-400">Country</th>
            <th className="text-left p-4 text-sm font-medium text-gray-400">Email</th>
            <th className="text-left p-4 text-sm font-medium text-gray-400">Project Name</th>
            <th className="text-left p-4 text-sm font-medium text-gray-400">Task Progress</th>
            <th className="text-left p-4 text-sm font-medium text-gray-400">Status</th>
            <th className="text-left p-4 text-sm font-medium text-gray-400">Date</th>
            <th className="text-left p-4 text-sm font-medium text-gray-400">Actions</th>
          </tr>
          </thead>
         <tbody>
             {
            FinalList.map((item, index) => (
                <tr key={index} className="border-b border-slate-800/30 hover:bg-slate-800/20 transition-colors">
                  <td className="p-4"><img src={item.image} alt={item.client} className="w-10 h-10 rounded-full ring-2 ring-slate-700/50" /></td>
                  <td className="p-4 font-medium">{item.client}</td>
                  <td className="p-4 text-gray-400">{item.country}</td>
                  <td className="p-4 text-gray-400">{item.email}</td>
                  <td className="p-4">{item.project}</td>
                  <td className="p-4 text-gray-400">{item.progress}</td>
                  <td className="p-4">{item.status}</td>
                  <td className="p-4 text-gray-400">{item.date}</td>
                  <td className="p-4"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">Edit</button></td>
                </tr>
            ))
          }
         </tbody>
        </table>
        <div className="flex gap-6 m-5 justify-end">
            {/* Pagination */}
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-all"
              onClick={handlePrevPage}>Last Page</button>
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-all"
              onClick={handleNextPage}>Next Page</button>
        </div>
      </div>
    </div>
  );
};

export default Table;