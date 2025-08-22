import React, { use, useState } from 'react'

const TextForm = (props) => {
    const { heading } = props;

  // State to hold the text input
    const [text,setText] = useState("");
    // const [modifiedText, setModifiedText] = useState("");

  // Function to handle the conversion to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  // Function to handle the conversion to lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  // Function to clear the text input
  const handleClear = () => {
    setText("");
  }

  // Function to handle text input changes
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className='container my-4'>
        <div className="mb-3">
          <label htmlFor="myData" className="form-label"><h4>{heading}</h4></label>
          <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="5" onChange={handleOnChange} placeholder='Enter your text'></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-danger mx-1" onClick={handleClear} >Clear</button>
      </div>

      <div className="container my-3">
        <h4>Text Preview </h4>
        <p>{text}</p>
      </div>

      <div className="container my-4">
         <h2>Your text summary</h2>
         <p>{text.split(" ").length} words and {text.length} characters</p>
      </div>
    </>
  )
}

export default TextForm

