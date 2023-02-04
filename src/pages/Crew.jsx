import React, { useEffect, useState } from 'react'
import { BsCircle } from 'react-icons/bs'
import doug from '../assets/crew/image-douglas-hurley.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import victor from '../assets/crew/image-victor-glover.png';
import ans from '../assets/crew/image-anousheh-ansari.png'


function Crew() {
  const [crew, setCrew] = useState([]) 
  const [value, setValue] = useState(0)

  const {name, role, bio} = crew[value] || {};

  const images = [doug, mark, victor, ans] ;

  const fetchDestination = async () => {
    const res = await fetch('https://my-json-server.typicode.com/Kehinde13/demo.json/crew');
    const data = await res.json()
    
     setCrew(data);
  
  } 

  useEffect(() => {
    fetchDestination()
  }, []);


  return (
    <div>
      
      <section className='px-4 home crew'>
      <h1 className='pt-20 lg:ml-32 text-white md:text-2xl md:pt-40 
               lg:text-left text-xl uppercase mb-10 text-center'>
         <span className='text-gray-400'>02</span> meet your crew
        </h1>

        <div className='lg:grid grid-cols-2 gap-5
                        lg:items-center lg:max-w-7xl 
                        lg:mx-auto'>


          <article className='col-start-2 col-end-3 lg:-mt-20'>
             <img 
             src={images[value]} 
             alt={name} 
             title={name} 
             className="block mx-auto w-1/2 sm:pt-5 lg:pt-0"
             /> 
          </article>

          <article className='text-center lg:ml-24 pb-10 lg:text-left 
                            col-start-1 col-end-2 row-start-1'>

            <h3 className='text-2xl lg:text-4xl md:mb-5 text-gray-400 uppercase'>
              {role}
            </h3>

            <h2 className='md:text-5xl text-3x text-white mb-5 uppercase tracking-widest'>
              {name}
            </h2>
            <p className='text-gray-400 pb-10'>
              {bio}
            </p>

            {crew.map((item, index) => (
              <button key={index} onClick={() => 
              setValue(index)} 
              className={` text-white h-5 rounded-full pb-2 mx-3 
                         ${index === value && "bg-white"}`}>
                <BsCircle className="h-5 w-5"/>
              </button>
            ))}

          </article>

        </div>    

      </section>
    </div>
  )  
  
} 

export default Crew
