import React from 'react'
import './styles.css'

interface IProps {
  icon: string
  text: string
}

const Card = (props: IProps) => {
  const { icon, text } = props

  return (
    <div className='card'>
      <span className={`${icon} icon`}></span>
      <span className='text'>{text}</span>
    </div>
  )
}

export default Card