
const Sidebar = () => {
  return (
    <div className="w-16 fixed h-screen bg-slate-950/80 backdrop-blur-xl border-r border-slate-800/50 p-4 flex flex-col items-center space-y-8">
      {/* logo */}
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
        L
      </div>
      
      {/* navigation items */}
      <div className="flex flex-col space-y-6 pt-4">
        <button className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-105">
          📁
        </button>
        
        <button className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-105">
          🙎🏻
        </button>
        
        <button className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-105">
          ⚙️
        </button>
      </div>
    </div>
  )
}
export default Sidebar