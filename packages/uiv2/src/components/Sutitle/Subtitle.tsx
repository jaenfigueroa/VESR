type Props = {
  text: string,
  children: JSX.Element
}

export const Subtitle = ({ text, children }: Props) => {
  return (
    <div className='vers-flex vers-flex-col vers-gap-2 md:vers-gap-4'>
      <h3 className='vers-text-2xl md:vers-text-3xl vers-uppercase vers-font-bold vers-border-solid vers-border-l-4 vers-border-primary vers-pl-1 md:vers-pl-2'>
        {text}
      </h3>
      <div className='vers-bg-xxxxgreen'>
        {children}
      </div>
    </div>
  )
}