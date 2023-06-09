import CardProduct from '../../components/Cards/CardProduct'
import Title from '../../components/Title/Title'
import MainContainer from '../../components/MainContainer/MainContainer'
import { BackGround } from '../../components/BackGround/BackGround'
import { Grid } from '../../components/Grid/Grid'
import { HeroProducts } from '../../components/HeroProducts/HeroProducts'
import { PRODUCTS_LIST } from './data/productsList'

export const Productos = () => {
  return (
    <section className='vers-grow'>
      <BackGround fondoImg='https://i.pinimg.com/originals/e1/78/d2/e178d2bbb7c6202ad66fc2a173331b28.jpg' alt='montaña blanca con un lago en frente'>
        <HeroProducts/>
      </BackGround>
      <MainContainer>
        <Title text='Productos TOP'>
          <Grid>
            <>
              {
                PRODUCTS_LIST.map((product, index) => (
                  <CardProduct title={product.title} description={ product.description} image={product.image} price={product.price} key={index}/>
                ))
              }
            </>
          </Grid>
        </Title>
      </MainContainer>
    </section>
  )
}