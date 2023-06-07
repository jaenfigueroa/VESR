import { Button } from '../../components/Button/Button'
import { CardUser } from '../../components/CardUser/CardUser'
import { Grid } from '../../components/Grid/Grid'
import { Hero } from '../../components/Hero/Hero'
import { Main } from '../../components/Main/Main'
import { Subtitle } from '../../components/Sutitle/Subtitle'

export const Equipo = () => {
  return (
    <section className='vers-grow'>
      <Hero img='/img5.webp'>
        <div className='vers-h-full vers-flex vers-flex-col vers-justify-center vers-items-center vers-gap-[50px] md:vers-gap-[80px] vers-w-full md:vers-w-[600px]  vers-bg-[rgba(256,256,256,.85)] vers-p-5'>
          <h2 className='vers-text-3xl md:vers-text-5xl vers-font-bold vers-text-primary vers-uppercase vers-text-center'>Nuestro <br></br>equipo</h2>
          <p className='vers-text-center vers-text-xl vers-text-gray-dark'>Nos referimos a ese grupo humano en donde se comparte buenos y malos  momentos, donde hay amor a pesar  de las discusiones.  Hablamos de ese vínculo afectivo que nunca dejaríamos de lado y que nos llena de paz.</p>
          <div className='vers-flex vers-gap-2'>
            <Button text='Algunas experiencias' />
            <Button text='Nuestros aliados' />
          </div>
        </div>
      </Hero>

      <Main>
        <>
          <div className='vers-flex vers-flex-col sm:vers-grid sm:vers-grid-cols-[1.5fr,3fr]'>
            <div className='vers-hidden sm:vers-inline-block'>
              <img className='vers-w-full' src='/equipo/image 4 (1).png' alt='Fotografia de Andrea, Rojas Vera' />
            </div>
            <div className='vers-bg-purple-100 vers-p-2 sm:vers-p-4 md:vers-p-6'>
              <Subtitle text='fundadora y coordinadora'>
                <div className='vers-flex vers-flex-col vers-gap-2'>
                  <img className='sm:vers-hidden' src='/equipo/image 4 (1).png' alt='' />
                  <div className='vers-flex vers-flex-col vers-gap-1'>
                    <h2 className='vers-font-bold vers-text-xl'>Andrea, Rojas Vera</h2>
                    <p className='vers-font-medium md:vers-font-normal md:vers-text-xl'>¡Hola!
Mi nombre es Andrea Rojas Vera estudio obstetricia tengo 25 años, soy la fundadora y actual coordinadora del Voluntariado de Educación Sexual Responsable. Ver atrás y darme cuenta todo lo que con amor, trabajo en equipo y mucha pasión se ha logrado, me llena de alegría. Sin duda, hemos vivido de todo en este laborioso trayecto, pero sabemos que lo vale, no importa cuántas desveladas nos costó, porque saber en lo que se ha convertido realmente motiva. Este lindo bebé llamado VESR o cariñosamente llamado VERS sigue creciendo. Tal vez se preguntarán qué diferente tiene VESR y déjenme decirles que muchísimo. Nosotros crecimos rebeldes dispuestos a romper tabús y estereotipos. Sin miedo a la censura ni a la vergüenza porque vivir nuestra sexualidad con responsabilidad es una de las cosas más geniales que puede existir. Porque nos cansamos de la desinformación sobre las infecciones de transmisión sexual. Porque nos cansamos del acoso, abuso sexual y violencia que se propinaba aún en nuestra propia universidad, aún con reglamentos, aún cuando las personas seguían creyendo que minimizar los problemas ayudaría en algo, pues realmente callar, omitir, censurar, ignorar... no ayuda en nada. Nos cansamos de que solo creyeran que educación sexual era solo morbo. Porque realmente la sexualidad no significa coito y morbo, va más allá y la educación sexual integral que fomentamos lo demuestra de muchas maneras. Aquí en esta linda familia sabemos que hay muchos temas que tocar y no dejamos ninguno de lado, desde la prevención de infecciones de transmisión sexual hasta la diversidad sexual y de género. Porque sabemos que necesitas una familia que te escuché ,que te muestre como par ,que si no aprendiste en el colegio .Aquí gracias a nuestros aliados lo aprenderás. Formamos pares responsables de su sexualidad que sean esa semilla en cada familia ,facultad y comunidad. Podemos hacer grandes cosas si nos lo proponemos.

Qué esperas?

Se esa semilla, únete al cambio.
Se parte de nuestra familia.</p>
                  </div>
                </div>
              </Subtitle>
            </div>
          </div>

          <Subtitle text='equipo directivo'>
            <Grid>
              <>
                <CardUser user={{  img: '/equipo/image 4 (1).png',
                  name: 'Maria',
                  position: 'Gerente',
                  age: 23,
                  degree: 'Ing. Industrial',
                }} />
                <CardUser user={{  img: '/equipo/image 4 (1).png',
                  name: 'Maria',
                  position: 'Gerente',
                  age: 23,
                  degree: 'Ing. Industrial',
                }} />
                <CardUser user={{  img: '/equipo/image 4 (1).png',
                  name: 'Maria',
                  position: 'Gerente',
                  age: 23,
                  degree: 'Ing. Industrial',
                }} />
                <CardUser user={{  img: '/equipo/image 4 (1).png',
                  name: 'Maria',
                  position: 'Gerente',
                  age: 23,
                  degree: 'Ing. Industrial',
                }} />
                <CardUser user={{  img: '/equipo/image 4 (1).png',
                  name: 'Maria',
                  position: 'Gerente',
                  age: 23,
                  degree: 'Ing. Industrial'} } />
              </>
            </Grid>
          </Subtitle>
        </>
      </Main>
    </section>
  )
}