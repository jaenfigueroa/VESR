import { CardCheckbox } from '../../components/CardCheckbox/CardCheckbox'
import { Hero } from '../../components/Hero/Hero'
import { Main } from '../../components/Main/Main'
import { Slide2 } from '../../components/Slide2/Slide2'
import { Subtitle } from '../../components/Sutitle/Subtitle'
import { COMO_LO_HACEMOS } from './data/comoLoHacemos'
import { ESPECIFICOS_LIST } from './data/especificosList'
import { IMGS_SLIDER } from './data/imgSlider'
import { SKILLS } from './data/skills'

export const Conocenos = () => {
  return (
    <section className='vers-grow'>
      <Hero img='/img4.webp'>
        <div className='vers-h-full vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-[20px] md:vers-gap-[40px] vers-w-full md:vers-w-[700px] vers-bg-[#9b64a1] vers-p-6'>
          <h2 className='vers-text-3xl md:vers-text-4xl vers-font-bold vers-text-white vers-uppercase vers-text-center'>Quienes<br></br>Somos</h2>
          <p className='vers-text-center vers-text-md md:vers-text-xl vers-text-gray-dark vers-text-white'>Somos una ORGANIZACIÓN JUVENIL multidisciplinaria reconocida por la SENAJU y miembro del CMPJ, que se desarrolla bajo los principios de la responsabilidad social, enmarcado en los objetivos de desarrollo sostenible, por medio de la Educación Sexual Responsable. Para promover el bienestar de la salud sexual y reproductiva de los derechos sexuales y reproductivos en la comunidad universitaria y población general.</p>
          <div className='vers-flex vers-flex-wrap vers-gap-1 vers-justify-center'>
            {
              SKILLS.map((skill, index) => (
                <img key={index} className='vers-h-[85px]' src={skill.image} alt={skill.description} />
              ))
            }
          </div>
        </div>
      </Hero>

      <Main>
        <>
          <div className='vers-flex vers-flex-col md:vers-flex-row vers-gap-3 md:vers-gap-[0] vers-bg-lightxxx-gray'>
            <div className='vers-grow'>
              <Subtitle text='misión'>
                <p className='vers-bg-purple-300 vers-p-2 md:vers-p-4 vers-text-white'>Somos un voluntariado multidisciplinario que se desarrolla bajo los principios de la responsabilidad social enmarcado en los objetivos de desarrollo sostenible, principalmente a la promoción de la salud sexual y reproductiva por medio de la educación integral en la comunidad sanmarquina y población general.</p>
              </Subtitle>
            </div>
            <img className='vers-grow-0' src='/conocenos/image 4.png' alt='Dos mujeres mostrarndo el logo de VESR en sus espaldas' />
            <div className='vers-grow'>
              <Subtitle text='visión'>
                <p className='vers-bg-purple-300 vers-p-2 md:vers-p-4 vers-text-white'>Para el año 2022 consolidar una organización juvenil de voluntarios - facilitadores en educación sexual integral, desde las diferentes áreas académicas de la universidad, a nivel distrital y nacional.</p>
              </Subtitle>
            </div>
          </div>

          <Subtitle text='objetivos'>
            <div className='vers-bg-pink-100 vers-p-2 md:vers-p-4 vers-rounded-md vers-flex vers-flex-col vers-gap-2 md:vers-gap-4 md:vers-flex-row md:vers-h-[250px] md:vers-items-center'>
              <div className='vers-flex vers-flex-col vers-gap-1 md:vers-gap-2'>
                <h2 className='vers-text-xl md:vers-text-3xl vers-uppercase vers-font-bold'>general</h2>
                <p>Promoción del bienestar en la salud sexual y reproductiva a través de la comunidad VESR para la comunidad.</p>
              </div>
              <div className=' md:vers-w-[70%] md:vers-h-[200px]'>
                <Slide2>
                  {
                    IMGS_SLIDER.map((img, index) => (
                      <img key={index} className='vers-p-1 md:vers-p-2' src={img.image} alt={img.description} />
                    ))
                  }
                </Slide2>
              </div>
            </div>
          </Subtitle>

          <Subtitle text='especificos'>
            <div className='vers-grid md:vers-grid-cols-2 vers-grid-rows-2 vers-gap-4 md:vers-gap-y-4 md:vers-gap-x-6'>
              {
                ESPECIFICOS_LIST.map((item, index) => (
                  <CardCheckbox text={item} key={index} />
                ))
              }
            </div>
          </Subtitle>

          <Subtitle text='¿Cómo lo hacemos?'>
            <div className='vers-p-2 vers-flex vers-flex-col vers-gap-4 md:vers-gap-8 md:vers-grid md:vers-grid-cols-3' >
              {
                COMO_LO_HACEMOS.map((element, index) => (
                  <article key={index} className={`vers-flex ${!(index % 2) ?'vers-flex-col':'vers-flex-col-reverse'} vers-gap-4`}>
                    <p className='vers-text-justifyxxxxx vers-font-medium'>{ element.text}</p>
                    <img src={element.image} alt={element.description} />
                  </article>
                ))
              }
            </div>
          </Subtitle>
        </>
      </Main>
    </section>
  )
}