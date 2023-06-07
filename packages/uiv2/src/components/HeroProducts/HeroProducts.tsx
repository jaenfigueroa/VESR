import { ButtonTertiary } from '../ButtonTertiary/ButtonTertiary'

export const HeroProducts = () => {
  return (
    <div className='vers-bg-gradient-to-r vers-from-blue vers-to-transparent vers-bg-cover vers-bg-center vers-h-hero vers-p-4 vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-6 sm:vers-gap-8 md:vers-gap-8'>
      <div className='vers-max-w-[400px] sm:vers-max-w-[900px] vers-bg-grexxen vers-flex vers-flex-col vers-gap-2 md:vers-gap-4 vers-items-center'>
        <h2 className='vers-text-white vers-text-center vers-text-4xl sm:vers-text-6xl md:vers-text-9xl vers-uppercase vers-font-bold'>Nuestros productos</h2>
        <p className='vers-max-w-[400px] vers-text-white vers-text-center sm:vers-text-2xl md:vers-text-2xl sm:vers-font-semibold'>Ofrecemos una gran variedad de productos de diferentes marcas y de la mejor calidad.</p>
        <ButtonTertiary text='COMPRAR' color='blue'/>
      </div>

      <div className='vers-bg-light-gray vers-w-[280px] vers-h-[120px]'>caja</div>
    </div>
  )
}