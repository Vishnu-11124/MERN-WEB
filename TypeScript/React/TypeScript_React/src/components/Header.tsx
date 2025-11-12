import Button from "./Button"

type Data = {
  title: string
}


const Header = ({title} : Data) => {
  return (
    <nav className="bg-black h-[50px] text-white flex justify-between px-6 items-center">
      <div>
        <h1 className="text-yellow-400 text-xl font-bold">{title}</h1>
      </div>
      <div className="flex decoration-none gap-4 items-center">
        <a href="">Home</a>
        <a href="">Contact</a>
        <a href="">About</a>
        <Button btnText = "Login" login= {() => alert("Login")} disabled={false}/>
      </div>
      
    </nav>
  )
}

export default Header
