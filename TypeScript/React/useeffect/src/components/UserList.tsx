import { useState, useEffect } from "react"
type User ={
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

const UserList = () => {
    const [user,setUser] = useState<User[] | null>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setUser(data)
            setLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })
    },[])

    if(loading){ return <h1>Loading...</h1>}
    

    if(error){ return <h1>{error}</h1>}
    

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
            {
                user?.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    )
            })
        }
        </tbody>
      </table>
    </div>
  )
}

export default UserList
