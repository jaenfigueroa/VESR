type Props = {
  children: JSX.Element
}

export const Main = ({ children }: Props) => {
  return (
    <main className='vers-px-2 vers-py-4 md:vers-px-4 md:vers-py-6 lg:vers-p-8 vers-max-w-[1300px] vers-m-auto vers-bgxxxxx-green vers-flex vers-flex-col vers-gap-3 lg:vers-gap-4'>
      {children}
    </main>
  )
}