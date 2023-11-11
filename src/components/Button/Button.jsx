import React, { useEffect } from 'react'

const Button = (props) => {
  return (
    <a {...props} className={`text-white border-button font-bold p-2 sm:text-xl text-lg  hover:bg-dimWhite2 duration-300 ${props.styles} sm:mb-[200px]`} href={props.href} target='_blank'></a>
  )
}

export default Button