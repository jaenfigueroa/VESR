import { CardService } from '../../components/CardService/CardService'
import { Grid } from '../../components/Grid/Grid'
import { HeroServicios } from '../../components/HeroServicios/HeroServicios'
import { Main } from '../../components/Main/Main'
import { Subtitle } from '../../components/Sutitle/Subtitle'
import { SERVICES } from './data/Services'

export const Servicios = () => {
  return (
    <div>
      <HeroServicios/>
      <Main>
        <Subtitle text='Servicios'>
          <Grid>
            <>
              {
                SERVICES.map((element, index) => (
                  <CardService element={element} key={index}/>
                ))
              }
            </>
          </Grid>
        </Subtitle>
      </Main>
    </div>
  )
}