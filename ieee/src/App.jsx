import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

return (
    <>
        <div class="root">
            <div>
            <div>
                <p className='text-white text-4xl mx-10 my-10 font-bold leading-relaxed'>
                    Some Pieces Of Our
                    <br />
                    Work
                </p>
                
                <p className='text-gray-400 font-bold mx-10 leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Facilis necessitatibus eum nam soluta hic cupiditate <br />amet deleniti laborum laboriosam. Aut!
                    </p>
            </div>
            {/* commet */}
            <button className='text-yellow-400 text-xs font-bold border border-yellow-400 px-5 py-3 my-10 mx-10 rounded-[20px]'>SHOW MORE</button>
           
            </div>
               <div className="box">
                <div className="box1"></div>
                <div className="box2"></div>
               </div>

        </div>
    </>
)
}

export default App
