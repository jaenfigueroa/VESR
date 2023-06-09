export type CardUserProps = {
  name: string
  position: string
  age: number
  degree: string
  image: string,
}

const CardUser = ({name, position, image}:CardUserProps) => {
  return (
    <article className='vers-flex vers-items-center vers-justify-center vers-grow vers-relative'>
      <div className='vers-p-4 sm:vers-p-4 vers-flex vers-flex-col vers-gap-2 vers-items-center hover:vers-opacity-0 vers-bg-purple-300 vers-duration-500'>
        <div className='vers-flex vers-justify-centervers-relative vers-bg-xxxxxxxgreen vers-justify-center'>
          <img className='vers-w-[70%] sm:vers-w-[60%] vers-aspect-square vers-object-cover vers-object-center vers-rounded-full' src={image} />
          <img className='vers-w-[60px] sm:vers-w-[80px] vers-absolute vers-ml-[8rem]  sm:vers-ml-[10rem] md:vers-ml-[12rem]' src='/comillas.svg' alt='Signos de comillas' />
        </div>
        <div className='vers-flex vers-flex-col vers-gap-1'>
          <p className='vers-text-2xl lg:vers-text-[1.6rem] vers-font-bold vers-text-white vers-text-center'>{name}</p>
          <p className='vers-text-xl lg:vers-text-[1.4rem] vers-font-normal vers-text-white vers-text-center'>{position }</p>
        </div>
      </div>
      <div className='vers-p-2 sm:vers-p-4 vers-flex vers-flex-col vers-gap-1 vers-absolute vers-bg-blue vers-w-full vers-h-full vers-justify-center vers-items-center vers-z-[-1]'>
        <p className='vers-text-2xl lg:vers-text-[1.6rem] vers-font-normal vers-text-white'><span className='vers-text-2xl md:vers-text-2xl lg:vers-text-[1.6rem] vers-font-medium'>Edad:</span> 34</p>
        <p className='vers-text-xl lg:vers-text-[1.4rem] vers-font-normal vers-text-white'><span className='vers-text-xl md:vers-text-2xl lg:vers-text-[1.4rem] vers-font-medium'>Carrera:</span> Ing. Civil</p>
      </div>
    </article>
  )
}

export default CardUser