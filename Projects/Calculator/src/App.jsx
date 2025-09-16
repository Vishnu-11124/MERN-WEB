
import './App.css'
import ButtonList from './components/ButtonList'

function App() {
  let buttonValue = [7,8,9,'/',4,5,6,'*',1,2,3,'-',0,'.','=','+']

  return (
   <> 
      <h1 className='text-center text-white my-3'>Calculator</h1>
      <div className="calculator">
        <input type="text" className="form-control mb-3" placeholder="0" disabled/>
        <ButtonList values = {buttonValue}/>
      </div>
   </>
  )
}

export default App
