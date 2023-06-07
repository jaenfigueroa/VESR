// interface User {
//   img: string,
//   name: string
//   position: string
//   age: number
//   degree: string
// }

// type Props = {
//   user?:User
// }

export const CardUser = () => {
  return (
    <article className='vers-bg-purple-300 vers-rounded-md vers-flex vers-items-center vers-justify-center  vers-grow'>
      <div className='vers-p-4 sm:vers-p-4 vers-flex vers-flex-col vers-gap-2 vers-items-center '>
        <div className='vers-flex vers-justify-centervers-relative vers-bg-xxxxxxxgreen vers-justify-center'>
          <img className='vers-w-[70%] sm:vers-w-[60%] vers-aspect-square vers-object-cover vers-object-center vers-rounded-full' src='/equipo/image 4 (1).png' />
          <img className='vers-w-[60px] sm:vers-w-[80px] vers-absolute vers-ml-[8rem]  sm:vers-ml-[10rem] md:vers-ml-[12rem]' src='/comillas.svg' alt='Signos de comillas' />
        </div>
        <div className='vers-flex vers-flex-col vers-gap-1'>
          <p className='vers-text-2xl vers-font-bold vers-text-white'>Rosa Ramales</p>
          <p  className='vers-text-lg vers-font-medium vers-text-white'>Genente general</p>
        </div>
      </div>
      {/* <div className='vers-p-2 sm:vers-p-4 vers-flex vers-flex-col vers-gap-1'>
        <p className='vers-text-xl vers-font-normal vers-text-white'><span className='vers-text-xl vers-font-medium'>Edad:</span> 34</p>
        <p className='vers-text-xl vers-font-normal vers-text-white'><span className='vers-text-xl vers-font-medium'>Carrera:</span> Ing. Civil</p>
      </div> */}
    </article>
  )
}