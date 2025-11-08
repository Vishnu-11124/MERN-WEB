
import useFecth from './CustomHook/useFetch.jsx'


function App() {
 
  let data = useFecth('https://fakestoreapi.com/products')
  console.log(data)
  return (
   <>
    <h1>Product List</h1>
    {
      data.map((item, index) => 
        (
          <div key={index}>
            {item.title}
            {item.category}
           </div> ))
    }
   </>

  )
}

export default App
