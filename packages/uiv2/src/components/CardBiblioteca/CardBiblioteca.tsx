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
        <div className='vers-bg-xxxxgreen md:vers-w-[50px] vers-flex md:vers-justify-center md:vers-items-center'>
          {/* <div className='hiddden vers-flex vers-flex-col'>
            <div>ssssss</div>
            <div>c</div>
          </div> */}
          <h2 className='vers-inline-block md:vers-rotate-[-90deg]  vers-text-white vers-text-2xl md:vers-text-3xl vers-uppercase vers-font-bold vers-bg-xxxxxred'>festividades</h2>
        </div>
        <div className='sm:vers-flex sm:vers-items-end vers-bgxxxxx-red vers-pb-6 vers-pr-1'>
          <p className='vers-text-white vers-leading-[30px]'>Descubre mayor información sobre festividades como el día del condón, el día del sexo oral, entre otros.</p>
        </div>
      </div>
      <div className='vers-h-auto vers-overflow-hidden md:h-full vers-bg-blue'>
        <img className='vers-aspect-[2/1] md:vers-w-full md:vers-h-full md:vers-object-cover' src='/img1.webp' alt='' />
      </div>
    </article>
  )
}