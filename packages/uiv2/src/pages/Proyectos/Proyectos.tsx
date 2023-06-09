import CardProject from '../../components/Cards/CardProject'
import MainContainer from '../../components/MainContainer/MainContainer'
import { HeroProjects } from '../../components/Heros/HeroProjects/HeroProjects'

export const Proyectos = () => {
  return (
    <section className='vers-grow'>
      <HeroProjects/>
      <MainContainer>
        <div className='vers-flex vers-flex-col vers-gap-4 sm:vers-gap-6 md:vers-gap-8'>
          <CardProject direction='normal' color='purple' />
          <CardProject direction='reverse' color='blue' />
        </div>
      </MainContainer>
    </section>
  )
}