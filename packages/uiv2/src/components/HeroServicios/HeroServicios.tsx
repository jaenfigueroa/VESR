import { Button } from '../Button/Button'

export const HeroServicios = () => {
  return (
    <section className='vers-bg-gradient-to-r vers-from-purple-800 vers-to-transparent vers-bg-cover vers-bg-center vers-h-hero vers-flex vers-items-center vers-p-3 sm:vers-pl-8 md:vers-pl-[8rem]'>
      <div className='vers-flex vers-flex-col vers-justify-center vers-items-center sm:vers-items-start vers-gap-2 sm:vers-w-[400px] vers-bg-gxxxxxreen md:vers-gap-5'>
        <h2 className='vers-text-white vers-text-center sm:vers-text-left vers-text-3xl sm:vers-text-4xl md:vers-text-7xl vers-uppercase vers-font-bold'>nuestros servicios</h2>
        <p className='vers-text-white vers-text-center sm:vers-text-xl sm:vers-text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores omnis sit harum beatae alias corrupti, iusto possimus recusandae sunt minus.</p>
        <Button text='Ver Más'/>
      </div>
    </section>
  )
}