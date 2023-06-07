type Props = {
  children: JSX.Element,
  fondoImg: string
  alt: string
}

export const BackGround = ({children, fondoImg, alt}: Props) => {
  return (
    <div className='vers-bg-gxxreen vers-relative'>
      <div className='vers-bg-red vers-w-full vers-h-full vers-absolute vers-z-[-1]'>
        <img className='vers-w-full vers-h-full vers-absolute vers-object-cover' src={fondoImg} alt={alt} />
      </div>
      {children}
    </div>
  )
}