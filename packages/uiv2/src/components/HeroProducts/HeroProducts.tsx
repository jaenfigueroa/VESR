import ButtonSecondary from '../Buttons/ButtonSecondary'
import { FEATURES, Features } from './Data/features'

export const HeroProducts = () => {
  return (
    <div className='vers-bg-gradient-to-b vers-from-blue vers-to-transparent vers-bg-cover vers-bg-center vers-h-hero vers-p-4 vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-6 sm:vers-gap-8 md:vers-gap-8'>
      <div className='vers-max-w-[400px] sm:vers-max-w-[900px] vers-bg-grexxen vers-flex vers-flex-col vers-gap-2 sm:vers-gap-6 md:vers-gap-8 vers-items-center'>
        <h2 className='vers-text-white vers-text-center vers-text-4xl sm:vers-text-6xl md:vers-text-9xl vers-uppercase vers-font-bold'>Nuestros productos</h2>
        <p className='vers-max-w-[450px] vers-text-white vers-text-center sm:vers-text-2xl md:vers-text-2xl sm:vers-font-semibold'>Ofrecemos una gran variedad de productos de diferentes marcas y de la mejor calidad.</p>
        <ButtonSecondary text='COMPRAR' color='blue'/>
      </div>

      <div className='vers-flex vers-flex-col sm:vers-flex-row vers-gap-1 sm:vers-gap-2 md:vers-gap-3 '>
        {
          FEATURES.map((element:Features, index) => (
            <article key={index} className='vers-bg-white vers-rounded-xl vers-p-1 xsm:vers-p-2 md:vers-p-3 vers-w-full vers-max-w-[270px] vers-flex vers-flex-col md:vers-gap-1 vers-items-center xsm:vers-items-start'>
              <div className='vers-flex vers-items-center vers-gap-1 md:vers-gap-[1.2rem]'>
                <img src={element.icon} className={`vers-hidden xsm:vers-block vers-w-[2rem] sm:vers-w-[3rem] md:vers-w-[3.5rem]`}></img>
                <p className='vers-text-lg vers-font-bold vers-uppercase md:vers-text-2xl md:vers-leading-7'>{element.title}</p>
              </div>
              <p className='xsm:vers-text-start vers-font-medi md:vers-text-xl vers-text-center'>{element.description}</p>
            </article>
          ))
        }
      </div>
    </div>
  )
}