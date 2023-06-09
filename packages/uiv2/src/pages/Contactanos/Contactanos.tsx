import { Main } from '../../components/Main/Main'
import { Subtitle } from '../../components/Sutitle/Subtitle'
import {useState} from 'react';

const InputLIst = [
  { type: 'text', placeholder: 'Nombre', name: 'name'},
  { type: 'text', placeholder: 'Apellido', name: 'lastName' },
]

const InputClasses = 'vers-p-1 md:vers-p-3 vers-border-solid vers-border-4 vers-border-primary vers-text-xl placeholder:vers-text-xl vers-text-black placeholder:vers-text-gray vers-font-medium vers-drop-shadow-[-5px_5px_0px_#dbbddc] md:vers-drop-shadow-[10px_10px_0px_#dbbddc]'

export const Contactanos = () => {
  const [formData, setFormData] = useState<object>({})

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <section className='vers-grow vers-h-hero vers-flex'>
      <Main>
        <Subtitle text='Cóntactanos'>
          <form className='vers-grid vers-grid-cols-1 sm:vers-grid-cols-2 vers-gap-4' onSubmit={onSubmit}>
            {
              InputLIst.map((input, index) => (
                <input
                  key={index}
                  className={InputClasses}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  onChange={onChange}
                  required
                />
              ))
            }
            <input
              className={InputClasses}
              type='email'
              name='email'
              placeholder={'Correo Electronico'}
              onChange={onChange}
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              title="Por favor, introduce un email valido, Ejem: usuario123@gmail.com"
              required
            />
            <input
              className={InputClasses}
              type='tel'
              name='telefono'
              placeholder={'Numero de telefono'}
              onChange={onChange}
              pattern="[0-9]{9}"
              title="Por favor, introduce un número de teléfono válido de 9 dígitos, sin incluir el codigo de pais +51, Ejm: 123 456 789"
              required
            />
            <input
              className={`${InputClasses} sm:vers-col-span-2`}
              type='text'
              name='message'
              placeholder={'Escribe tu mensaje aqui...'}
              onChange={onChange}
              required
            />
            <div className='vers-flex sm:vers-col-span-2 vers-justify-end'>
              <input
                className={`${InputClasses} vers-w-full sm:vers-w-auto sm:vers-px-[7rem] md:vers-px-[7rem] vers-bg-white`}
                type='submit'
                placeholder={'Enviar'} />
            </div>
          </form>
        </Subtitle>
      </Main>
    </section>
  )
}