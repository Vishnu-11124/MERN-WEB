import React, { useEffect, useState } from 'react'

const FetchingPosts = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(err => console.log(err))
    })

    
  return (
    <div>
      {
        post.map((item) => 
            item.id < 6 &&
        (
            <div key={item.id}>
                <h1>Title: {item.title}</h1>
                <p>Content: {item.body}</p>
            </div>
        ))
      }
    </div>
  )
}

export default FetchingPosts
