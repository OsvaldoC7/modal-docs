import React from 'react'
import './styles.css'

const header = () => {
  return (
    <div className='headerContainer'>
      <div className='title'>
        <div>
          <span className='tu'>tu</span>
          <span className='conta'>Conta</span>
        </div>
        <span>Tu Contador en Linea</span>
      </div>
      <div className='subtitle'>
        <span>¡Nuevo servicio!</span>
        <span>Encárgate de tu negocio, nosotros de tu contabilidad.</span>
      </div>
    </div>
  )
}

export default header