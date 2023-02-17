import React from 'react'

const Steps = () => {
  return (
    <div
      style={{
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(71, 71, 228)',
        margin: 24
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 32,
          width: '25%'
        }}
      >
        <span style={{ color: '#81C82A', fontSize: 50, padding: 16 }} className='fa-solid fa-file-signature'></span>
        <span
          style={{ fontWeight: 'bold', fontSize: '16px', color: '#81C82A' }}
        >
          PASO 1
        </span>
        <span
          style={{
            color: 'white',
            textAlign: 'center'
          }}
        >
          Agrega tu FIEL
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 32,
          width: '25%'
        }}
      >
        <span style={{ color: '#81C82A', fontSize: 50, padding: 16 }} className='fa-solid fa-database'></span>
        <span
          style={{ fontWeight: 'bold', fontSize: '16px', color: '#81C82A' }}
        >
          PASO 2
        </span>
        <span
          style={{
            color: 'white',
            textAlign: 'center'
          }}
        >
          Sincroniza tus cuentas bancarias
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 32,
          width: '25%'
        }}
      >
        <span style={{ color: '#81C82A', fontSize: 50, padding: 16 }} className={'fa-sharp fa-solid fa-file-arrow-down'}></span>
        <span
          style={{ fontWeight: 'bold', fontSize: '16px', color: '#81C82A' }}
        >
          PASO 3
        </span>
        <span
          style={{
            color: 'white',
            textAlign: 'center'
          }}
        >
          Recibe mensualmente tu declaración de impuestos
        </span>
      </div>
    </div>
  )
}

export default Steps