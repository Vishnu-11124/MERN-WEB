import { useRef, useState } from "react"

type UserData = {
    uname : string,
    email : string,
    password : string
}



const Form = () => {
    const [formData, setFormData] = useState<UserData[]>([])

    const name = useRef<HTMLInputElement | null>(null)
    const email = useRef<HTMLInputElement | null>(null)
    const password = useRef<HTMLInputElement | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>    {
      
      e.preventDefault()
    
    const nameValue = name.current!.value
    const emailValue = email.current!.value
    const passwordValue = password.current!.value

    const user: UserData = {
        uname : nameValue,
        email : emailValue,
        password : passwordValue

    }

    setFormData([...formData, user])
    
}

  return (
    <div className="bg-cyan-400 m-6 p-3 flex flex-col items-center">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        ref={name}
        placeholder="Enter your name"
        />
        <input 
        type="email"
        ref={email}
        placeholder="Enter your email"
        />
        <input 
        type="password"
        ref={password}  
        placeholder="Enter your password"
        />
        <button className="p-2 bg-black text-white">Submit</button>
      </form>

      <div className="flex gap-3 m-4 p-3 bg-white text-black">
        <div>
          <h1>User Info</h1>
          {
            formData.length === 0 ? (
              <h2>No Data Found</h2>
            ) : (
             formData.map((item, index) => {
                return(
                    <div key={index}>
                        <h2>Name: {item.uname}</h2>
                        <h2>Email: {item.email}</h2>
                        <h2>Password: {item.password}</h2>
                    </div>
                )
             })
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Form
