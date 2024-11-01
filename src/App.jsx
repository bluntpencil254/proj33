import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('olive')

  return (
  <div className='w-full h-screen duration-200 bg-neutral-600' 
  style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12
    inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg
      bg-white px-3 py-2 rounded-3xl'>
        <button
        onClick={()=> setColor('red')}
        className='outline-none px-4 py-1 rounded-full shadow-xl
        text-black' style={{backgroundColor: 'red'}}>Red</button>

         <button
        onClick={()=> setColor('green')}
        className='outline-none px-4 py-1 rounded-full shadow-xl
        text-black' style={{backgroundColor: 'green'}} >Green</button>

         <button
        onClick={()=> setColor('blue')}
        className='outline-none px-4 py-1 rounded-full shadow-xl
        text-black' style={{backgroundColor: 'blue'}} >Blue</button>

        <button
        onClick={()=> setColor('pink')}
        className='outline-none px-4 py-1 rounded-full shadow-xl
        text-black' style={{backgroundColor: 'pink'}} >Pink</button>

        <button
        onClick={()=> setColor('yellow')}
        className='outline-none px-4 py-1 rounded-full shadow-xl
        text-black' style={{backgroundColor: 'yellow'}} >Yellow</button>

        <button
        onClick={()=> setColor('orange')}
        className='outline-none px-4 py-1 rounded-full shadow-xl
        text-black' style={{backgroundColor: 'orange'}} >Orange</button>

        <button
        onClick={()=> setColor('violet')}
        className='outline-none px-4 py-1 rounded-full shadow-xl
        text-black' style={{backgroundColor: 'violet'}} >Violet</button>

        <button
        onClick={()=> setColor('gold')}
        className='outline-none px-4 py-1 rounded-full shadow-xl
        text-black' style={{backgroundColor: 'gold'}} >Gold</button>

        
        <button
        onClick={()=> setColor('brown')}
        className='outline-none px-4 py-1 rounded-full shadow-xl
        text-black' style={{backgroundColor: 'brown'}} >Brown</button>

        <button
        onClick={()=> setColor('white')}
        className='outline-none px-4 py-1 rounded-full shadow-xl
        text-black' style={{backgroundColor: 'white'}} >White</button>

        <button
        onClick={()=> setColor('gray')}
        className='outline-none px-4 py-1 rounded-full shadow-xl
        text-black' style={{backgroundColor: 'gray'}} >Gray</button>

        

      </div>
    </div>
  </div>
  )
}

export default App
