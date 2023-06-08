import { ButtonTertiary } from '../ButtonTertiary/ButtonTertiary'

export const HeroProducts = () => {
  return (
    <div className='vers-bg-gradient-to-b vers-from-blue vers-to-transparent vers-bg-cover vers-bg-center vers-h-hero vers-p-4 vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-6 sm:vers-gap-8 md:vers-gap-8'>
      <div className='vers-max-w-[400px] sm:vers-max-w-[900px] vers-bg-grexxen vers-flex vers-flex-col vers-gap-2 sm:vers-gap-6 md:vers-gap-8 vers-items-center'>
        <h2 className='vers-text-white vers-text-center vers-text-4xl sm:vers-text-6xl md:vers-text-9xl vers-uppercase vers-font-bold'>Nuestros productos</h2>
        <p className='vers-max-w-[450px] vers-text-white vers-text-center sm:vers-text-2xl md:vers-text-2xl sm:vers-font-semibold'>Ofrecemos una gran variedad de productos de diferentes marcas y de la mejor calidad.</p>
        <ButtonTertiary text='COMPRAR' color={'blue-dark'}/>
      </div>

      <div className='vers-bg-xxxxxgray vers-w-[3xxx0px] vers-h-[120xxxxxpx] vers-flex vers-flex-col sm:vers-flex-row vers-gap-1 sm:vers-gap-2 md:vers-gap-3 '>
        <article className='vers-bg-white vers-rounded-xl vers-p-1 xsm:vers-p-2 md:vers-p-3 vers-w-full vers-max-w-[310px] vers-flex vers-flex-col md:vers-gap-1'>
          <div className='vers-flex vers-items-center vers-gap-1 md:vers-gap-3'>
            <i className="fa-solid fa-gem vers-text-green vers-text-2xl vers-hidden xsm:vers-block sm:vers-text-3xl md:vers-text-4xl"></i>
            <p className='vers-text-lg vers-font-bold vers-uppercase md:vers-text-2xl md:vers-leading-7'>precios accesibles</p>
          </div>
          <p className='xsm:vers-text-start vers-font-medi md:vers-text-xl'>Al alcance de todos los bolsillos</p>
        </article>

        <article className='vers-bg-white vers-rounded-xl vers-p-1 xsm:vers-p-2 md:vers-p-3 vers-w-full vers-max-w-[310px] vers-flex vers-flex-col md:vers-gap-1'>
          <div className='vers-flex vers-items-center vers-gap-1 md:vers-gap-3'>
            <i className="fa-solid fa-gem vers-text-red vers-text-2xl vers-hidden xsm:vers-block sm:vers-text-3xl md:vers-text-4xl"></i>
            <p className='vers-text-lg vers-font-bold vers-uppercase md:vers-text-2xl md:vers-leading-7'>máxima durabilidad</p>
          </div>
          <p className='vers-font-medi md:vers-text-xl'>Al alcance de todos los bolsillos</p>
        </article>

        <article className='vers-bg-white vers-rounded-xl vers-p-1 xsm:vers-p-2 md:vers-p-3 vers-w-full vers-max-w-[310px] vers-flex vers-flex-col md:vers-gap-1'>
          <div className='vers-flex vers-items-center vers-gap-1 md:vers-gap-3'>
            <i className="fa-solid fa-gem vers-text-blue vers-text-2xl vers-hidden xsm:vers-block sm:vers-text-3xl md:vers-text-4xl"></i>
            <p className='vers-text-lg vers-font-bold vers-uppercase md:vers-text-2xl md:vers-leading-7'>mejores diseños</p>
          </div>
          <p className='vers-font-medi md:vers-text-xl'>Al alcance de todos los bolsillos</p>
        </article>
      </div>
    </div>
  )
}