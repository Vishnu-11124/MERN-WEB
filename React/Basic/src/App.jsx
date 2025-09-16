
import Button from './components/Button'
import HeaderName from './components/HeaderName'
import ListItems from './components/ListItems'

const App = () => {

  let cars = ["Aston Martin", "Lamborghini", "Bugatti", "Ferrari", "Rolls-Royce", "Porsche", "Bentley"];
  
  return (
    <>
      <HeaderName titleName = "Luxury Cars"/>
      {/* Conditional Rendering using Ternary Operator */}
      {cars.length === 0 && <h3 className='text-center'>No Cars Available</h3>}
      <ListItems list = {cars} />
      
    </>
  )
}

export default App
