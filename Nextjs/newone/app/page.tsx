import Hello from "../component/Hello"

const page = () => {
  console.log("What kind of component I'm")
  return (
    <div>
      <h1 className="text-3xl font-bold">Home, Next.js!</h1>
      <Hello />
    </div>
  )
}

export default page
