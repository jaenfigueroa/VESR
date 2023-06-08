import { ButtonTertiary } from '../ButtonTertiary/ButtonTertiary'

type Props = {
  direction: 'normal' | 'reverse',
  color: string
}

const DIRECTIONS = {
  normal: 'sm:vers-flex-row',
  reverse: 'sm:vers-flex-row-reverse',
}

export const CardProject = ({direction = 'normal', color}:Props) => {
  return (
    <article className={`vers-flex vers-flex-col  ${DIRECTIONS[direction]} vers-gap-2 sm:vers-gap-4 md:vers-gap-6`}>
      <div>
        <div className='vers-grid vers-grid-cols-2 vers-grid-rows-2 vers-gap-1'>
          <img className='vers-rounded-xl vers-aspect-square vers-object-cover' src='/img1.webp' alt='' />
          <img className='vers-rounded-xl vers-aspect-square vers-object-cover' src='/img2.webp' alt='' />
          <img className='vers-rounded-xl vers-aspect-[2/1] vers-object-cover vers-col-span-2' src='/img3.webp' alt='' />
        </div>
      </div>

      <div className='vers-bg-bxxxlue vers-flex vers-flex-col vers-gap-2 sm:vers-gap-4 md:vers-gap-6 vers-justify-center'>
        <div className=' vers-flex vers-flex-col vers-px-2 vers-py-1 sm:vers-p-[0] vers-gap-2 sm:vers-gap-4 md:vers-gap-6'>
          <h2 className={`vers-text-${color} vers-font-bold vers-text-xl sm:vers-text-3xl md:vers-text-5xl`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p className='vers-text-pinkxxxx-800 vers-text-md sm:vers-text-lg md:vers-text-xl vers-text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam praesentium ipsa ex fuga, rem doloribus voluptas voluptates pariatur repudiandae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quasi distinctio voluptatem? Cumque mollitia aliquid eius inventore maiores blanditiis nostrum?</p>
        </div>
        <div>
          <ButtonTertiary text='visitar' color={`vers-bg-${color}`}/>
        </div>
      </div>
    </article>
  )
}