type Props = {
  children: JSX.Element | string,
  img: string
}

export const Hero = ({ children, img }: Props) => {
  return (
    <section className='vers-h-hero vers-flex vers-items-end md:vers-justify-end vers-relative vers-overflow-hidden'>
      <img className='vers-w-full vers-object-cover vers-absolute vers-h-full' src={img} alt='Imagen de chicas reunidas en circulo' />
      <div className=' vers-h-full vers-w-full md:vers-w-1/2 md:vers-h-full vers-z-0 vers-justify-end vers-flex'>
        {children}
      </div>
    </section>
  )
}