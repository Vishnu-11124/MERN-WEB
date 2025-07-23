import React, { use, useState } from 'react'

const TextForm = (props) => {
    const { heading } = props;

  // State to hold the text input
    const [text,setText] = useState("");

  // Function to handle the conversion to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  // Function to handle text input changes
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="myData" className="form-label"><h4>{heading}</h4></label>
        <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="5" onChange={handleOnChange} placeholder='Enter your text'></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
    </div>
  )
}

export default TextForm

