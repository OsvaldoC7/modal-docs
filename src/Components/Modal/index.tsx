import React from 'react'

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: Function;
}

const Card = (
  {
    title,
    price,
    description
  }: {
    title: string,
    price: string,
    description: string
  }
) => {
  return (
    <div
      style={{
        borderRadius: 5,
        backgroundColor: '#D9EAF3',
        display: 'flex',
        flexDirection: 'column',
        margin: 8,
        padding: 16
      }}
    >
      <span
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#3778AF'
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#000',
          textAlign: 'center'
        }}
      >
        {price}
      </span>
    </div>
  )
}

function Modal(props: IProps) {
  const { isModalOpen, setIsModalOpen } = props

  if (!isModalOpen) {
    return <></>
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          width: '800px',
          height: '200px',
          backgroundColor: 'white',
          borderRadius: 7,
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%'
            }}
          >
            <Card
              description='1-30 movimientos bancarios al mes'
              price='$1,000'
              title='Emprendedor'
            />
            <Card
              description='1-30 movimientos bancarios al mes'
              price='$1,000'
              title='Emprendedor'
            />
            <Card
              description='1-30 movimientos bancarios al mes'
              price='$1,000'
              title='Emprendedor'
            />
            <Card
              description='1-30 movimientos bancarios al mes'
              price='$1,000'
              title='Emprendedor'
            />
          </div>
        </div>
        <button style={{ width: 60, alignSelf: 'center', marginTop: 16 }} onClick={() => setIsModalOpen(false)}>Cerrar</button>
      </div>
    </div>
  )
}

export default Modal