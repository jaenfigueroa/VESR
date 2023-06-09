import Title from '../../components/Title/Title'
import MainContainer from '../../components/MainContainer/MainContainer'
import { CardService } from '../../components/Cards/CardService'
import { Grid } from '../../components/Grid/Grid'
import { HeroServicios } from '../../components/Heros/HeroServicios/HeroServicios'
import { SERVICES } from './data/Services'

export const Servicios = () => {
  return (
    <div>
      <HeroServicios/>
      <MainContainer>
        <Title text='Servicios'>
          <Grid>
            <>
              {
                SERVICES.map((element, index) => (
                  <CardService element={element} key={index}/>
                ))
              }
            </>
          </Grid>
        </Title>
      </MainContainer>
    </div>
  )
}