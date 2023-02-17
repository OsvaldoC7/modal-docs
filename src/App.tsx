import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CardContainer from './Components/Cards/CardContainer'
import Header from './Components/Header'
import './App.css'
import Benefits from './Components/Benefits'
import Steps from './Components/Steps'
import Modal from './Components/Modal'
import Buttons from './Components/Buttons'

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className='app'>
      <Header />
      <CardContainer />
      <Benefits />
      <Steps />
      <Buttons
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Modal 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
      />
    </div>
  )
}

export default App
