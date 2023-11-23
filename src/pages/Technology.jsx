import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import vehicleP from '../assets/technology/image-launch-vehicle-portrait.jpg';
import vehiclel from '../assets/technology/image-launch-vehicle-landscape.jpg';
import capsuleP from '../assets/technology/image-space-capsule-portrait.jpg';
import capsulel from '../assets/technology/image-space-capsule-landscape.jpg';
import spaceP from '../assets/technology/image-spaceport-portrait.jpg';
import spacel from '../assets/technology/image-spaceport-landscape.jpg';

function Technology() {

  const [Tech, setTech] = useState([]) 
  const [value, setValue] = useState(0)
  const app = useRef()

  const {name, description} = Tech[value] || {};

  const imagesP = [vehicleP, capsuleP, spaceP];
  const imagesl = [vehiclel, capsulel, spacel];


  const fetchDestination = async () => {
    const res = await fetch('https://my-json-server.typicode.com/Kehinde13/demo.json/technology')
    const data = await res.json()
    
     setTech(data);
  
  } 

  useEffect(() => {
    fetchDestination()
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      app.current,
      {
        y: -600,
        duration: 5,
        
      },
      {
        y: 0,
      }
    );
  }, []);

  return (
    <div>
      
      <section className='px-4 home Tech'>
        <h1 className='pt-20 lg:ml-28 text-white md:text-2xl md:pt-36 
              lg:text-left text-xl uppercase mb-10 text-center'>
        <span className='text-gray-400'>03</span> space launch 101
        </h1>

        <div className='lg:grid grid-cols-2 gap-5
                        lg:items-center lg:max-w-7xl 
                        lg:mx-auto'>

          <article className='col-start-2 col-end-3 lg:-mt-20'>
           <picture>
              <source media="(min-width: 768px)" src={imagesl[value]} />
            </picture>
            <img 
            src={imagesP[value]} 
            alt={name} 
            title={name} 
            className="block mx-auto md:w-[60%] w-[80%]"
            ref={app}
            /> 
          </article>


          <article className='text-center lg:ml-2 lg:text-left lg:-mt-20
                             relative col-start-1 col-end-2 row-start-1'>

            {Tech.map((item, index) => (
                <button key={index} onClick={() => 
                setValue(index)} 
                className={`text-white h-12 w-12 rounded-full pb-2 md:p-3 my-5 text-center
                          text-2xl border-2 border-white p-1 m-2 lg:flex flex-row
                          ${index === value && "bg-white text-black"}`}>
                  {index + 1}
                </button>
              ))}
            <div className='lg:absolute top-3 left-24'>  
                <h3 className='text-xl lg:text-2xl md:mb-5 text-gray-400 uppercase'>
                  the terminology
                </h3>

                <h2 className='text-5xl text-white mb-5 uppercase tracking-widest'>
                  {name}
                </h2>

                <p className='text-gray-400 pb-10  top-0 left-10'>
                  {description}
                </p> 
            </div>
            

          </article>

          

        </div>    

      </section>
  </div>
  )
}

export default Technology
