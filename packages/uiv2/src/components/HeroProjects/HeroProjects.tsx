import { BackGround } from '../BackGround/BackGround'

export const HeroProjects = () => {
  return (
    <BackGround fondoImg='/img1.webp' alt='4 mujeres reunidas en circulo'>
      <section className='vers-overflow-hidden vers-relative vers-h-hero vers-flex vers-justify-center vers-items-center md:vers-justify-start md:vers-items-end md:vers-pl-[8rem] md:vers-pb-[8rem] vers-bg-[rgba(256,256,256,.85)] md:vers-bg-white'>
        <img className='vers-hidden md:vers-block vers-absolute vers-w-full vers-h-full vers-object-cover md:vers-w-[780px] md:vers-h-[780px] md:vers-rounded-[3rem] md:vers-rotate-[-40deg] md:vers-top-[-18rem] md:vers-right-[10rem]' src='/img1.webp' alt='' />

        <div className='vers-z-0 vers-flex vers-flex-col vers-justify-center vers-items-center vers-max-w-[320px] vers-gap-4 xsm:vers-gap-6 md:vers-gap-4 vers-p-1 sm:vers-p-[0] md:vers-bg-[rgba(256,256,256,.9)] md:vers-p-2 md:vers-pl-3 md:vers-rounded-xl'>
          <h2 className='vers-text-pink-800 vers-text-center md:vers-text-start vers-text-3xl xsm:vers-text-4xl md:vers-text-5xl vers-uppercase vers-font-bold'>nuestros proyectos</h2>
          <p className='vers-text-pink-800 vers-text-center md:vers-text-start vers-text-xl sm:vers-text-xl xsm:vers-text-2xl'>Cada proyecto se realiza con la maxima energia y apoyo posible.</p>
          <i className='vers-text-pink-800 fa-solid fa-circle-arrow-left vers-text-5xl vers-pr-[.10rem] vers-rotate-[270deg]'></i>
        </div>
      </section>
    </BackGround>
  )
}