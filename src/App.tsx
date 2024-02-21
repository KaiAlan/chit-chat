import { } from 'react'
import Chat from './components/Chat'

const App = () => {
  return (
    <main className='container flex flex-col justify-center items-center h-screen bg-[#1b1b1b] text-white'>
      <div className='flex justify-center items-center w-4/5 h-4/5 border'>
        {/* <p className='font-bold text-5xl'>Hello</p> */}

        <Chat />
      </div>
    </main>
  )
}

export default App