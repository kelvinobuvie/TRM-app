import React from 'react'

const Loginbutton = ({ onClick, text }) => {
  return (
    <button className="custom-button w-[400px] mt-9" onClick={onClick}>
      {text}
    </button>
  )
}

export default Loginbutton