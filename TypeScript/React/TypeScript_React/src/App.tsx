import AdminInfo from "./components/AdminInfo"
import Header from "./components/Header"
import UserInfo from "./components/UserInfo"
import type { User, Admin } from "../src/types"
import Counter from "./components/Counter"
import Todo from "./components/Todo"

function App() {

  const user: User = {
    id: 1,
    uname: "Ram Mohan",
    email: "ram54@gmail.com"
  }

  const admin: Admin = {
    id: 2,
    uname: "Rose Marry",
    email: "rose@gmail.com",
    role: "Admin",
    lastlogin: new Date()
  }


  return (
    <div >
      <Header title="React + TypeScript" />
      <div className="flex gap-5 p-4 ">
        <div className="flex flex-col">
          <div className="flex gap-3">
            <UserInfo userData ={user} />
            <AdminInfo adminData ={admin} />
          </div>
          <Counter/>
        </div>
        <div className="m-3">
          <Todo/>
        </div>
      </div>
      
    </div>
  )
}

export default App
