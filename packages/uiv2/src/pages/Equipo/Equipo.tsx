import ButtonPrimary from '../../components/Buttons/ButtonPrimary'
import CardUser from '../../components/Cards/CardUser'
import Title from '../../components/Title/Title'
import MainContainer from '../../components/MainContainer/MainContainer'
import { Grid } from '../../components/Grid/Grid'
import { Hero } from '../../components/Heros/Hero/Hero'
import { FUNDADORA } from './data/fundadora'
import { NUESTRO_EQUIPOS } from './data/nuestroEquipos'

export const Equipo = () => {
  return (
    <section className='vers-grow'>
      <Hero img='/img5.webp'>
        <div className='vers-h-full vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-[50px] md:vers-gap-[80px] vers-w-full md:vers-w-[600px]  vers-bg-[rgba(256,256,256,.85)] vers-p-5'>
          <h2 className='vers-text-3xl sm:vers-text-4xl md:vers-text-5xl vers-font-bold vers-text-primary vers-uppercase vers-text-center'>Nuestro <br></br>equipo</h2>
          <p className='vers-text-center vers-text-xl vers-text-gray-dark'>Nos referimos a ese grupo humano en donde se comparte buenos y malos  momentos, donde hay amor a pesar  de las discusiones.  Hablamos de ese vínculo afectivo que nunca dejaríamos de lado y que nos llena de paz.</p>
          <div className='vers-flex vers-gap-2'>
            <ButtonPrimary text='Algunas experiencias' />
            <ButtonPrimary text='Nuestros aliados' />
          </div>
        </div>
      </Hero>

      <MainContainer>
        <>
          <div className='vers-flex vers-flex-col sm:vers-grid sm:vers-grid-cols-[1.5fr,3fr]'>
            <div className='vers-hidden sm:vers-inline-block'>
              <img className='vers-w-full' src='/equipo/image 4 (1).png' alt='Fotografia de Andrea, Rojas Vera' />
            </div>
            <div className='vers-bg-purple-100 vers-p-2 sm:vers-p-4 md:vers-p-6'>
              <Title text='fundadora y coordinadora'>
                <div className='vers-flex vers-flex-col vers-gap-2'>
                  <img className='sm:vers-hidden' src='/equipo/image 4 (1).png' alt='' />
                  <div className='vers-flex vers-flex-col vers-gap-1'>
                    <h2 className='vers-font-bold vers-text-xl'>{FUNDADORA.name}</h2>
                    <p className='vers-font-medium md:vers-font-normal md:vers-text-xl'>{FUNDADORA.biography}</p>
                  </div>
                </div>
              </Title>
            </div>
          </div>

          {/* LISTA */}
          {
            NUESTRO_EQUIPOS.map((list, index) => (
              <Title text={list.title} key={index}>
                <Grid>
                  <>
                    {
                      list.members.map((member, index) => (
                        <CardUser {...member} key={index} />
                      ))
                    }
                  </>
                </Grid>
              </Title>
            ))
          }
        </>
      </MainContainer>
    </section>
  )
}