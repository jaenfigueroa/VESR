import { Main } from '../../components/Main/Main'
import { Subtitle } from '../../components/Sutitle/Subtitle'

const InputLIst = [
  { type: 'text', placeholder: 'Nombre'},
  { type: 'text', placeholder: 'Apellido' },
  { type: 'text', placeholder: 'Email' },
  { type: 'text', placeholder: 'Celular' },
]

const InputClasses = 'vers-p-1 md:vers-p-3 vers-border-solid vers-border-4 vers-border-primary vers-text-xl placeholder:vers-text-xl vers-text-black placeholder:vers-text-gray vers-font-medium vers-drop-shadow-[-5px_5px_0px_#dbbddc] md:vers-drop-shadow-[10px_10px_0px_#dbbddc]'

export const Contactanos = () => {
  return (
    <section className='vers-grow vers-h-hero vers-flex'>
      <Main>
        <Subtitle text='Cóntactanos'>
          <form className='vers-grid vers-grid-cols-1 sm:vers-grid-cols-2 vers-gap-4  ' >
            {
              InputLIst.map(input => (
                <input className={InputClasses} type={input.type} placeholder={input.placeholder} />
              ))
            }
            <input className={ `${InputClasses} sm:vers-col-span-2`} type='text' placeholder={'Escribe tu mensaje aqui...' } />
            <div className='vers-flex sm:vers-col-span-2 vers-justify-end'>
              <input className={ `${InputClasses} vers-w-full sm:vers-w-auto sm:vers-px-[7rem] md:vers-px-[7rem] vers-bg-white`} type='submit' placeholder={'Enviar'} />
            </div>
          </form>
        </Subtitle>
      </Main>
    </section>
  )
}