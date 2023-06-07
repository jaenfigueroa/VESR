import { CardCheckbox } from '../../components/CardCheckbox/CardCheckbox'
import { Hero } from '../../components/Hero/Hero'
import { Main } from '../../components/Main/Main'
import { Slide2 } from '../../components/Slide2/Slide2'
import { Subtitle } from '../../components/Sutitle/Subtitle'

export const Conocenos = () => {
  return (
    <section className='vers-grow'>
      <Hero img='/img4.webp'>
        <div className='vers-h-full vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-[20px] md:vers-gap-[40px] vers-w-full md:vers-w-[700px] vers-bg-[#9b64a1] vers-p-6'>
          <h2 className='vers-text-3xl md:vers-text-4xl vers-font-bold vers-text-white vers-uppercase vers-text-center'>Quienes<br></br>Somos</h2>
          <p className='vers-text-center vers-text-md md:vers-text-xl vers-text-gray-dark vers-text-white'>Somos una ORGANIZACIÓN JUVENIL multidisciplinaria reconocida por la SENAJU y miembro del CMPJ, que se desarrolla bajo los principios de la responsabilidad social, enmarcado en los objetivos de desarrollo sostenible, por medio de la Educación Sexual Responsable. Para promover el bienestar de la salud sexual y reproductiva de los derechos sexuales y reproductivos en la comunidad universitaria y población general.</p>
          <div className='vers-flex vers-flex-wrap vers-gap-1 vers-justify-center'>
            <img className='vers-h-[85px]' src='/skills/skill1.webp' alt='3 salud y binestar' />
            <img className='vers-h-[85px]' src='/skills/skill2.webp' alt='4 educación de calidad' />
            <img className='vers-h-[85px]' src='/skills/skill3.webp' alt='5 igualdad de género' />
            <img className='vers-h-[85px]' src='/skills/skill4.webp' alt='10 reducción de la desigualdad' />
            <img className='vers-h-[85px]' src='/skills/skill5.webp' alt='16 paz, justicia e intituciones sólidas' />
            <img className='vers-h-[85px]' src='/skills/skill6.webp' alt='17 alianzas para lograr los objetivos' />
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
                  <img className='vers-p-1 md:vers-p-2' src='/conocenos/objetivos/Frame 16.png' alt='' />
                  <img className='vers-p-1 md:vers-p-2' src='/conocenos/objetivos/Frame 17.png' alt='' />
                  <img className='vers-p-1 md:vers-p-2' src='/conocenos/objetivos/Frame 18.png' alt='' />
                  <img className='vers-p-1 md:vers-p-2' src='/conocenos/objetivos/Frame 16.png' alt='' />
                  <img className='vers-p-1 md:vers-p-2' src='/conocenos/objetivos/Frame 17.png' alt='' />
                  <img className='vers-p-1 md:vers-p-2' src='/conocenos/objetivos/Frame 18.png' alt='' />
                </Slide2>
              </div>
            </div>
          </Subtitle>

          <Subtitle text='especificos'>
            <div className='vers-grid md:vers-grid-cols-2 vers-grid-rows-2 vers-gap-4 md:vers-gap-y-4 md:vers-gap-x-6'>
              <CardCheckbox text='Promover una sexualidad placentera, responsable y saludable, a través de la comunidad VESR para la humanidad.'/>
              <CardCheckbox text='Concientizar sobre la importancia de la planificación familiar, a través de actividades y la comunidad VESR para la humanidad.'/>
              <CardCheckbox text='Concientizar sobre la prevención de infecciones de transmisión sexual y cáncer, a través de actividades y la comunidad VESR para la humanidad.'/>
              <CardCheckbox text='Promover una cultura de tolerancia y respeto a todas las diversidades, a través de actividades y la comunidad VESR para la humanidad.'/>
              <CardCheckbox text='Concientizar sobre la prevención de la violencia en todos sus ámbito, a través de actividades y la comunidad VESR para la humanidad.'/>
            </div>
          </Subtitle>

          <Subtitle text='¿Cómo lo hacemos?'>
            <div className='vers-p-2 vers-flex vers-flex-col vers-gap-4 md:vers-gap-8 md:vers-grid md:vers-grid-cols-3' >
              <article className='vers-flex vers-flex-col vers-gap-4 vers-bg-grxxxxxeen'>
                <p className='vers-text-justifyxxxxx vers-font-medium'>Nos capacitamos con especialistas y nos formamos para hacer sesiones educativas sobre ESI.</p>
                <img src='/conocenos/como lo hacemos/image 5.png' alt='' />
              </article>
              <article className='vers-flex vers-flex-col vers-gap-4 vers-bg-grxxxxxeen md:vers-flex-col-reverse'>
                <p className='vers-text-justifyxxxxx vers-font-medium'>Hacemos dinámicas de casos y sesiones educativas sobre ESI para la comunidad san marquina.</p>
                <img src='/conocenos/como lo hacemos/image 7.png' alt='' />
              </article>
              <article className='vers-flex vers-flex-col vers-gap-4 vers-bg-grxxxxxeen'>
                <p className='vers-text-justifyxxxxx vers-font-medium'>Hacemos sesiones educativas sobre ESI para la población en general.</p>
                <img src='/conocenos/como lo hacemos/image 8.png' alt='' />
              </article>
            </div>
          </Subtitle>
        </>
      </Main>
    </section>
  )
}