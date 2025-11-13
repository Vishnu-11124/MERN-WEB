import { useContext, type FC} from "react"
import { CountContext } from "../context/CountContext"


const Count: FC = () => {

const context = useContext(CountContext);
if (!context) throw new Error("CountContext must be used within MyContextProvider");

const { count, increment, decrement, reset } = context;


  return (
    <div>
      <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>       
      </div>
    </div>
  )
}

export default Count
