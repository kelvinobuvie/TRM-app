import React from 'react'

const Input = ({label, placeholder, icon, type=""}) => {
  return (
    <div className="input-container w-[478px] h-[100px] bg-white shadow-md py-[21px] px-[34px]">
      <label className="input-label">{label}</label>
      <div className="input-wrapper">
        <input
          type={type}
          className="input-field w-[478px]"
          placeholder={placeholder}
        />
        <span className="input-icon">{icon}</span>
      </div>
    </div>
  )
}

export default Input