
import { type User} from "../types"

type UserInfoData = {
  userData : User
}


const UserInfo: React.FC<UserInfoData>= ({userData}) => {
  return (
    <div>
      <h1>User Info</h1>
        <h1>Name: {userData.uname}</h1>
        <h1>Email: {userData.email}</h1>
      
    </div>
  )
}

export default UserInfo
