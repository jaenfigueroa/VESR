export type CardUserProps = {
  name: string
  position: string
  age: number
  degree: string
  image: string,
}

const CardUser = ({name, position, image,age, degree}:CardUserProps) => {
  return (
    <article className='vers-flex vers-items-center vers-justify-center vers-grow vers-relative vers-h-full vers-w-full'>
      <div className='vers-p-4 sm:vers-p-4 vers-flex vers-flex-col vers-gap-2 vers-items-center vers-bg-purple-300 '>
        <div className='vers-flex vers-justify-centervers-relative vers-justify-center'>
          <img className='vers-w-[70%] sm:vers-w-[60%] vers-aspect-square vers-object-cover vers-object-center vers-rounded-full' src={image} />
          <img className='vers-w-[60px] sm:vers-w-[80px] vers-absolute vers-ml-[8rem]  sm:vers-ml-[10rem] md:vers-ml-[12rem]' src='https://res.cloudinary.com/djksz5k3c/image/upload/v1686353442/MI-NUBE/VESR/comillas_avhbe5.svg' alt='Signos de comillas' />
        </div>
        <div className='vers-flex vers-flex-col vers-gap-1'>
          <p className='vers-text-2xl lg:vers-text-[1.6rem] vers-font-bold vers-text-white vers-text-center'>{name}</p>
          <p className='vers-text-xl lg:vers-text-[1.4rem] vers-font-normal vers-text-white vers-text-center'>{position }</p>
        </div>
      </div>
      <div className='vers-p-2 sm:vers-p-4 vers-flex vers-flex-col vers-gap-1 vers-absolute vers-bg-blue vers-w-full vers-h-full vers-justify-center vers-items-center vers-z-[1] vers-opacity-0 hover:vers-opacity-[1]'>
        <p className='vers-text-2xl lg:vers-text-[1.6rem] vers-font-normal vers-text-white'><span className='vers-text-2xl md:vers-text-2xl lg:vers-text-[1.6rem] vers-font-medium'>Edad:</span> {age}</p>
        <p className='vers-text-xl lg:vers-text-[1.4rem] vers-font-normal vers-text-white'><span className='vers-text-xl md:vers-text-2xl lg:vers-text-[1.4rem] vers-font-medium'>Carrera:</span> {degree}</p>
      </div>
    </article>
  )
}

export default CardUser