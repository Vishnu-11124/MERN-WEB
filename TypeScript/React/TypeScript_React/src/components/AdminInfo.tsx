
import type {Admin} from "../types"

type AdminInfoData = {
  adminData : Admin
}


const AdminInfo: React.FC<AdminInfoData> = ({adminData}) => {
  return (
    <div>
      <h1>Admin Info</h1>
      <h2>Name: {adminData.uname}</h2>
      <h2>Email: {adminData.email}</h2>
      <h2>Role: {adminData.role}</h2>
      <h2>Last Login: {adminData.lastlogin.toLocaleTimeString()}</h2>
    </div>
  )
}

export default AdminInfo
