import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

return (
    <>
        <div class="root">
            <div className="root2">
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
              <div className='boxx'>
                <div className="box">
                    <div className="box1 leading-loose">
                        <p>
                            <div className="boxa"></div>
                            <br />
                            <button className='butonn text-base text-slate-600 font-light bg-yellow-400 px-3 rounded-[5px]'>Website</button>
                            <br />
                            Create Landing Page
                            <br />
                            <button className='butonn text-base text-slate-600 font-light'>Read More</button>
                        </p>
                        
                    </div>
                    <div className="box2 leading-9">
                        <p>
                            <button className='butonn text-base text-slate-600 font-light bg-yellow-400 px-3 rounded-[5px]'>Branding</button>
                            <br />
                            Creative Branding
                            <br />
                            <button className='butonn text-base text-slate-600 font-light'>Read More</button>
                        </p> 
                    </div>
                </div>

                        <div className="box3">
                            <p>
                            Automation. Advanced Level

                            <br />
                            <button className='butonn text-base text-slate-600 font-light'>Read More</button>
                            </p> 
                        </div>

                        <div className="box4">
                            <p>
                                Why We Collect User's Data
                                <br />
                                <button className='butonn text-base text-slate-600 font-light'>Read More</button>
                                </p> 
                        </div>

                        

                    </div> 
                    {/* boxx end */}

                    <div className='boxx'>
                <div className="box">
                    <div className="box1 leading-loose">
                        <p>
                            <div className="boxa"></div>
                            <br />
                            <button className='butonn text-base text-slate-600 font-light bg-yellow-400 px-3 rounded-[5px]'>Website</button>
                            <br />
                            Create Landing Page
                            <br />
                            <button className='butonn text-base text-slate-600 font-light'>Read More</button>
                        </p>
                        
                    </div>
                    <div className="box2 leading-9">
                        <p>
                            <button className='butonn text-base text-slate-600 font-light bg-yellow-400 px-3 rounded-[5px]'>Branding</button>
                            <br />
                            Creative Branding
                            <br />
                            <button className='butonn text-base text-slate-600 font-light'>Read More</button>
                        </p> 
                    </div>
                </div>

                        <div className="box3">
                            <p>
                            Automation. Advanced Level

                            <br />
                            <button className='butonn text-base text-slate-600 font-light'>Read More</button>
                            </p> 
                        </div>

                        <div className="box4">
                            <p>
                                Why We Collect User's Data
                                <br />
                                <button className='butonn text-base text-slate-600 font-light'>Read More</button>
                                </p> 
                        </div>

                        

                    </div> 
                    {/* boxx end */}

                    
            </div>
            {/* root2 end */}

                    

                </div> 
                {/* root end */}

                
        
    </>
)
}

export default App
