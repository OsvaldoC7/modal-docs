import React from 'react'
import Card from './Card'
import './styles.css'

const CardContainer = () => {
  return (
    <div className='cardContainer'>
      <Card icon='fa-solid fa-calculator' text='Hacemos tu contabilidad mensual' />
      <Card icon='fa-solid fa-percent' text='Calculamos tus impuestos' />
      <Card icon='fa-solid fa-file-invoice-dollar' text='Presentamos tus declaraciones SAT' />
      <Card icon='fa-solid fa-hand-holding-dollar' text='Cálculo, timbrado y envío de nómina' />
    </div>
  )
}

export default CardContainer