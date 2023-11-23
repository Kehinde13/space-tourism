import { useRef, useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'



function Home() {

 const app = useRef()

 useLayoutEffect(() => {
  gsap.fromTo(
    app.current,
    {
      scale: 0,
      duration: 5,
      
    },
    {
      scale: 1.1,
    }
  );
}, []);

  return (
    <div>
       <section className='home px-5 pt-10'>
           <div className='overlay flex flex-col justify-center text-center lg:flex-row lg:space-x-36'>
               <article className='lg:w-1/2 lg:text-left' ref={app}>
                   <h1 className='text-2xl text-gray-400'>
                   SO, YOU WANT TO TRAVEL TO
                   <span className='block text-4xl lg:text-9xl text-white mt-5 mb-10'> SPACE </span> 
                   </h1>
                    <p className='text-gray-400 lg:pr-48'>
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
               </article>

               <article className='mt-20'>
                <NavLink to='/Destination'>
                   <button className='w-48 h-48 rounded-full bg-white text-gray-800 md:w-72 md:h-72
                            uppercase font-bold text-2xl lg:text-3xl animate-pulse'>
                           Explore  
                   </button>
                </NavLink>
               </article>
           </div>
       </section>
    </div>
  )
}

export default Home