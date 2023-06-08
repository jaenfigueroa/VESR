import { BackGround } from '../../components/BackGround/BackGround'
import { CardProduct } from '../../components/CardProduct/CardProduct'
import { Grid } from '../../components/Grid/Grid'
import { HeroProducts } from '../../components/HeroProducts/HeroProducts'
import { Main } from '../../components/Main/Main'
import { Subtitle } from '../../components/Sutitle/Subtitle'
import { PRODUCTS_LIST } from './data/productsList'

export const Productos = () => {
  return (
    <section className='vers-grow'>
      <BackGround fondoImg='https://i.pinimg.com/originals/e1/78/d2/e178d2bbb7c6202ad66fc2a173331b28.jpg' alt='montaña blanca con un lago en frente'>
        <HeroProducts/>
      </BackGround>
        <Main>
          <Subtitle text='Productos TOP'>
            <Grid>
              <>
                {
                  PRODUCTS_LIST.map((product, index) => (
                    <CardProduct product={product} key={index}/>
                  ))
                }
              </>
            </Grid>
          </Subtitle>
        </Main>
      </section>

  )
}