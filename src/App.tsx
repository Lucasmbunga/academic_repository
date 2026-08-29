
import { BrowserRouter } from 'react-router'
import './App.css'
import { Header } from './components/Header'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <div className='grid grid-cols-2 min-h-screen'>

      <div className='bg-surface-dark p-4 flex items-center '>
        <button className='text-white bg-brand-500 px-4 py-2 rounded-lg'>Entrar</button>
      </div>
      <div className='bg-surface-light p-4'>
        <button className='text-white bg-brand-500 px-4 py-2 rounded-lg'>Entrar</button>

      </div>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
