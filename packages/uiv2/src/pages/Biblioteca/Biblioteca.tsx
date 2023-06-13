import CardBiblioteca, { VariantColor } from '../../components/Cards/CardBiblioteca'
import MainContainer from '../../components/MainContainer/MainContainer'
import { SECCTIONS_LIST } from './data/sectionList'

const getColorByIndex = (index: number): VariantColor => {
  const colors:VariantColor[] = ['purple', 'blue', 'red']
  return colors[index % colors.length]
}

export const Biblioteca = () => {
  return (
    <section className='vers-grow'>
      <MainContainer>
        <div className='vers-flex vers-flex-col vers-gap-4 md:vers-mt-[-2rem]'>
        {SECCTIONS_LIST.map((section, index) => (
          <CardBiblioteca
            key={index}
            color={getColorByIndex(index)}
            title={section.title}
            description={section.description}
            image={section.image}
          />
        ))}
        </div>
      </MainContainer>
    </section>
  )
}
