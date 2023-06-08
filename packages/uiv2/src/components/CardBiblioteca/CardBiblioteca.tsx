type Props = {
  color: 'red' | 'blue' | 'purple'
}

const COLORS = {
  red: 'vers-bg-red',
  blue: 'vers-bg-blue',
  purple: 'vers-bg-purple-300',
}

export const CardBiblioteca = ({ color='red' }: Props) => {
  return (
    <article className={`${COLORS[color]} md:vers-grid md:vers-grid-cols-[1fr,2fr] md:vers-h-[550px]`}>
      <div className='vers-p-3 sm:vers-p-2 md:vers-flex vers-flex-col vers-flex vers-gap-1 md:vers-flex-row'>

        <div className='vers-bg-xxxxxgreen md:vers-w-[50px] vers-flex md:vers-justify-center md:vers-items-center'>
          <div className='md:vers-flex md:vers-gap-4 md:versxxxx-bg-purple-900 md:vers-rotate-[-90deg] md:vers-translate-y-7 md:vers-translate-x-[-.2rem]'>
            <div className='vers-hidden md:vers-flex vers-flex-row vers-justify-center vers-items-center vers-gap-[.6rem]'>
              <div className='vers-w-[100px] vers-h-[2px] vers-bg-white'></div>
              <div className='vers-w-[12px] vers-h-[12px] vers-rounded-full vers-bg-white'></div>
            </div>
            <h2 className='vers-inline-block md:vers-rotate-[-xxxx90deg] vers-text-white vers-text-2xl md:vers-text-3xl vers-uppercase vers-font-bold vers-bg-xxxxred'>festividades</h2>
          </div>
        </div>

        <div className='sm:vers-flex sm:vers-items-end md:vers-pb-6 vers-pr-1'>
          <p className='vers-text-white vers-leading-[20px] sm:vers-leading-[30px] md:vers-leading-[35px]'>Descubre mayor información sobre festividades como el día del condón, el día del sexo oral, entre otros.</p>
        </div>

      </div>
      <div className='vers-h-auto vers-overflow-hidden md:h-full vers-bg-blue'>
        <img className='vers-aspect-[2/1] md:vers-w-full md:vers-h-full md:vers-object-cover' src='/img1.webp' alt='' />
      </div>
    </article>
  )
}