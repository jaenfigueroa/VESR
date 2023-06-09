import { CardBiblioteca } from '../../components/Cards/CardBiblioteca/CardBiblioteca'
import { Main } from '../../components/Main/Main'

export const Biblioteca = () => {
  return (
    <section className='vers-grow'>
      <Main>
        <div className='vers-flex vers-flex-col vers-gap-4 md:vers-mt-[-2rem]'>
          <CardBiblioteca color='purple'/>
          <CardBiblioteca color='red'/>
          <CardBiblioteca color='blue'/>
        </div>
      </Main>
    </section>
  )
}