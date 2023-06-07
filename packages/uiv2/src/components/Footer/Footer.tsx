import { Logo } from '../Logo/Logo'
import { Social } from '../Social/Social'
import { EMPRESA } from './data/empresa'

export const Footer = () => {
  return (
    <footer className='vers-bg-primary vers-flex vers-flex-col vers-align-middle vers-justify-center vers-py-5 vers-px-1 md:vers-pt-8 md:vers-pb-6 vers-gap-6 md:vers-gap-8'>
      <div className='vers-gap-4 vers-flex vers-flex-col md:vers-flex-row  md:vers-justify-evenly'>
        <div className='vers-flex vers-flex-col vers-items-center vers-gap-1 md:vers-mt-[-1.5rem]'>
          <Logo variant='white' width='medium'/>
        </div>

        <ul className='vers-flex vers-flex-col vers-items-center vers-gap-1 md:vers-items-start'>
          <h2 className='vers-text-white vers-font-bold vers-text-xl vers-mb-1'>EMPRESA</h2>
          {
            EMPRESA.map((element, index) => (
              <li key={index}><a className='vers-text-white hover:vers-text-light-gray' href={element.url}>{element.title}</a></li>
            ))
          }
        </ul>

        <div className='vers-flex vers-flex-col vers-items-center vers-gap-1 '>
          <h2 className='vers-text-white vers-font-bold vers-text-xl vers-mb-1'>SÍGUENOS</h2>
          <ul className='vers-flex vers-flex-row md:vers-flex-col vers-gap-3'>
            <Social variant='white' direction='column'/>
          </ul>
        </div>

        <ul className='vers-flex vers-flex-col vers-items-center vers-gap-1 md:vers-items-start'>
          <h2 className='vers-text-white vers-font-bold vers-text-xl vers-mb-1'>CONTACTOS</h2>
          <li className='vers-text-white hover:vers-text-light-gray'><a href='mailto:vers.oficial@gmail.com' target='_blank'>vers.oficial@gmail.com</a></li>
          <li className='vers-text-white hover:vers-text-light-gray'><a href='https://api.whatsapp.com/send?phone=51931967276' target='_blank'>931 967 276</a></li>
        </ul>
      </div>
      <p className='vers-text-white vers-text-center'>TODOS LOS DERECHOS RESERVADOS &copy; VESR</p>
    </footer>
  )
}