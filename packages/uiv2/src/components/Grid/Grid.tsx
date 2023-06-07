type Props = {
  children: JSX.Element
}

export const Grid = ({ children }: Props) => {
  return (
    <div className='vers-grid xsm:vers-grid-cols-2 sm:vers-grid-cols-2 md:vers-grid-cols-3 vers-gap-2 md:vers-gap-3'>
      {children}
    </div>
  )
}