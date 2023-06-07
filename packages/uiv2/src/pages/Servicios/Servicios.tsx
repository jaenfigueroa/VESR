import { CardService } from '../../components/CardService/CardService'
import { Grid } from '../../components/Grid/Grid'
import { HeroServicios } from '../../components/HeroServicios/HeroServicios'
import { Main } from '../../components/Main/Main'
import { Subtitle } from '../../components/Sutitle/Subtitle'

export const Servicios = () => {
  return (
    <div>
      <HeroServicios/>
      <Main>
        <Subtitle text='Servicios'>
          <Grid>
            <>
              <CardService/>
              <CardService/>
              <CardService/>
              <CardService/>
              <CardService/>
              <CardService/>
            </>
          </Grid>
        </Subtitle>
      </Main>
    </div>
  )
}