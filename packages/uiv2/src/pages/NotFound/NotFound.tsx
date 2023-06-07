import { Link } from 'react-router-dom'
import { Button } from '../../components/Button/Button'

export const NotFound = () => {
  return (
    <section className='vers-grow vers-flex vers-flex-col vers-items-center vers-justify-center vers-p-2'>
      <div className='vers-h-hero vers-flex vers-flex-col vers-items-center vers-justify-center vers-gap-8'>
        <div className='vers-text-center vers-flex vers-flex-col vers-gap-2'>
          <h2 className='vers-text-3xl sm:vers-text-5xl md:vers-text-6xl vers-font-extrabold'>¡Ups! Página no encontrada</h2>
          <p className='vers-text-xl sm:vers-text-2xl vers-text-gray'>La pagina a la que intenta acceder no existe o ha sido movida.</p>
        </div>
        <Link to='/inicio' relative='path'>
          <Button text='Ir a la pagina de inicio' variant='primary' icon='face'/>
        </Link>
      </div>
    </section>
  )
}