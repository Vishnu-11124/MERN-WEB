
import { useState } from 'react';
import Button from './components/Button'
import Container from './components/Container';
import HeaderName from './components/HeaderName'
import InputSection from './components/InputSection';
import ListItems from './components/ListItems'

const App = () => {

  let [cars, setCars] = useState(["Aston Martin", "Lamborghini", "Bugatti"]);
  console.log(cars)

  const keyDown = (e) => {
    if(e.key === 'Enter'){
      let newCar = e.target.value;
      e.target.value='';
      let updatedCars = [...cars,newCar];
      setCars(updatedCars)
      // console.log(e.target.value);
    }
  }
  
  return (
    <>
      <Container>
        <HeaderName titleName = "Luxury Cars"/>
        <InputSection handleKeyDown={keyDown}/>
        {/* <p>Food Item: {userFood}</p> */}
        {/* Conditional Rendering using Ternary Operator */}
        {cars.length === 0 && <h3 className='text-center'>No Cars Available</h3>}
        <ListItems list = {cars} />
      </Container>
      
    </>
  )
}

export default App
