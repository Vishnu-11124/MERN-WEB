import React from 'react'
import {createPortal} from 'react-dom'


const PopupContents = ({copiedValue}) => {
  return createPortal (
    <section>
      {
        copiedValue && (
            <div>
                Copied to Clipboard
            </div>
        )
      }
    </section>,
    document.getElementById('popup')
  )
}

export default PopupContents
