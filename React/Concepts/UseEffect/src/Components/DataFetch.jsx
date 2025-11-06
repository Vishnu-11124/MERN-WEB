import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function dataCollect() {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/todos')
                const data = await response.json()
                if(data && data.length) setData(data)
                console.log(data)
            }
            catch(err){
                console.log(err)
            }
        }

        dataCollect()
    },[])

  return (
    <div>
         <ul>
            {
                data.map(item => 
                item.id < 10 &&
                <li key={item.id}>{item.title}</li>)
            }
        </ul>       
    </div>
  )
}

export default DataFetch
