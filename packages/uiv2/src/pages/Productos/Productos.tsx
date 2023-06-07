import { CardProduct } from '../../components/CardProduct/CardProduct'
import { Grid } from '../../components/Grid/Grid'
import { HeroProducts } from '../../components/HeroProducts/HeroProducts'
import { Main } from '../../components/Main/Main'
import { Subtitle } from '../../components/Sutitle/Subtitle'

export const Productos = () => {
  return (
    <section className='vers-grow'>
      <HeroProducts/>
      <Main>
        <Subtitle text='Productos TOP'>
          <Grid>
            <>
              <CardProduct/>
              <CardProduct/>
              <CardProduct/>
              <CardProduct/>
              <CardProduct/>
            </>
          </Grid>
        </Subtitle>
      </Main>
    </section>
  )
}