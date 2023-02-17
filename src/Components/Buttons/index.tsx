import React from 'react'

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: Function;
}

function Button(props: IProps) {
  const { isModalOpen, setIsModalOpen } = props

  return (
    <div
      style={{
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        margin: 12,
        justifyContent: 'center'
      }}
    >
      <button 
        style={{
          width: '40%',
          margin: 10,
          borderRadius: 15,
          padding: '5px 0px',
          border: 'none',
          backgroundColor: '#81C82A',
          color: 'white'
        }}
        onClick={() => setIsModalOpen(true)}
      >
        Ver paquetes
      </button>
      <button 
        style={{
          width: '40%',
          margin: 10,
          borderRadius: 15,
          padding: '5px 0px',
          border: 'none',
          backgroundColor: 'rgb(71, 71, 228)',
          color: 'white'
        }}
        onClick={() => {}}
      >
        Agenda una cita con un contador experto
      </button>
    </div>
  )
}

export default Button