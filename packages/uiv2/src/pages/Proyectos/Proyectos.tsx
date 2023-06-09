import CardProject from '../../components/Cards/CardProject'
import MainContainer from '../../components/MainContainer/MainContainer'
import { HeroProjects } from '../../components/Heros/HeroProjects/HeroProjects'

export const Proyectos = () => {
  return (
    <section className='vers-grow'>
      <HeroProjects/>
      <MainContainer>
        <div className='vers-flex vers-flex-col vers-gap-4 sm:vers-gap-6 md:vers-gap-8'>
          <CardProject direction='normal' images={['/img1.webp', '/img2.webp', '/img3.webp']} color='purple' title='Lorem ipsum dolor sit amet consectetur adipisicing elit.' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam praesentium ipsa ex fuga, rem doloribus voluptas voluptates pariatur repudiandae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quasi distinctio voluptatem? Cumque mollitia aliquid eius inventore maiores blanditiis nostrum?'/>
          <CardProject direction='reverse' images={['/img1.webp', '/img2.webp', '/img3.webp']} color='blue' title='Lorem ipsum dolor sit amet consectetur adipisicing elit.' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam praesentium ipsa ex fuga, rem doloribus voluptas voluptates pariatur repudiandae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quasi distinctio voluptatem? Cumque mollitia aliquid eius inventore maiores blanditiis nostrum?'/>
        </div>
      </MainContainer>
    </section>
  )
}