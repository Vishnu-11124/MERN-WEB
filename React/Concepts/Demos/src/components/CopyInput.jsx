import React, { useState } from 'react'
import PopupContents from './PopupContents'

const CopyInput = () => {

    const [inputValue, setInputValue] = useState('')
    const [copiedValue, setCopiedValue] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopiedValue(true)
            setTimeout(() => {
                setCopiedValue(false)
            }, 2000)
        })
        
    }


  return (
    <div>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>

      <button onClick={handleCopy}>Copy</button>
      <PopupContents copiedValue={copiedValue} />
    </div>
  )
}

export default CopyInput
