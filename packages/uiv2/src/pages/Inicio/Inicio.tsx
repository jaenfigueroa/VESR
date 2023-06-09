import SlidePrimary from '../../components/Slides/SlidePrimary'
import ButtonPrimary from '../../components/Buttons/ButtonPrimary'
import Title from '../../components/Title/Title'
import { Link } from 'react-router-dom'
import { Hero } from '../../components/Heros/Hero/Hero'
import { FacebookEmbedded } from '../../components/FacebookEmbedded/FacebookEmbedded'
import MainContainer from '../../components/MainContainer/MainContainer'

export const Inicio = () => {
  return (
    <div className='vers-grow vers-flex vers-flex-col'>
      <SlidePrimary>
        <Hero img='/img1.webp'>
          <div className='vers-h-full vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-[50px] md:vers-gap-[120px] vers-w-full md:vers-w-[500px] vers-bg-[rgba(256,256,256,.8)] vers-p-1'>
            <h2 className='vers-text-3xl md:vers-text-5xl vers-font-bold vers-text-primary vers-uppercase vers-text-center'>Nuestra <br></br>familia</h2>
            <ButtonPrimary text='Más informacion'/>
          </div>
        </Hero>
        <Hero img='/img3.webp'>
          <div className='vers-h-full vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-[50px] md:vers-gap-[120px] vers-w-full md:vers-w-[500px] vers-bg-[rgba(256,256,256,.8)] vers-p-1'>
            <h2 className='vers-text-3xl md:vers-text-5xl vers-font-bold vers-text-primary vers-uppercase vers-text-center'>Biblioteca <br></br>virtual</h2>
            <Link to='/biblioteca-virtual'><ButtonPrimary text='Más informacion'/></Link>
          </div>
        </Hero>
        <Hero img='/img2.webp'>
          <div className='vers-h-full vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-[50px] md:vers-gap-[60px] vers-w-full md:vers-w-[500px] vers-bg-[rgba(256,256,256,.85)] vers-p-1'>
            <h2 className='vers-text-3xl md:vers-text-5xl vers-font-bold vers-text-primary vers-uppercase vers-text-center'>Quienes<br></br>Somos</h2>
            <p className='vers-text-center vers-text-2xl vers-text-gray-dark'>Somos una organización juvenil multidisciplinaria con una misma meta, promover la Educación Sexual.</p>
            <ButtonPrimary text='Más informacion' />
          </div>
        </Hero>
      </SlidePrimary>

      <MainContainer>
        <div className='vers-grid vers-grid-cols-1 md:vers-grid-cols-[1.5fr,2.5fr]   vers-gap-4 lg:vers-gap-6 '>
          <FacebookEmbedded />
          <Title text='Líneas temáticas'>
            <div className='vers-grid vers-grid-cols-2 vers-grid-rows-2'>
              <img className='vers-w-full' src='/main/Frame 4.png' alt='Reunion de mujeres' />
              <img className='vers-w-full' src='/main/Frame 5.png' alt='Reunion de hombres y mujeres' />
              <img className='vers-w-full' src='/main/Frame 6.png' alt='4 manos juntas' />
              <img className='vers-w-full' src='/main/Frame 7.png' alt='Paisaje de un campo con varias personas sentadas' />
            </div>
          </Title>
        </div>
      </MainContainer>

    </div>
  )
}