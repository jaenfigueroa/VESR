import { CardProject } from '../../components/CardProject/CardProject'
import { HeroProjects } from '../../components/HeroProjects/HeroProjects'
import { Main } from '../../components/Main/Main'

export const Proyectos = () => {
  return (
    <section className='vers-grow'>
      <HeroProjects/>
      <Main>
        <div className='vers-flex vers-flex-col vers-gap-4 sm:vers-gap-6 md:vers-gap-8'>
          <CardProject color='pink-800' direction='normal'/>
          <CardProject direction='reverse' color='blue' />
        </div>
      </Main>
    </section>
  )
}