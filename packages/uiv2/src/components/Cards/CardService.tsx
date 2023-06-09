export interface ServiceItem {
  title: string
  description: string
}

type Props = {
  element: ServiceItem
}

export const CardService = ({ element }: Props) => {
  return (
    <article className='vers-bg-purple-500 vers-overflow-hidden vers-rounded-tr-[2.5rem] vers-rounded-bl-[2.5rem]'>
      <img className='vers-h-[220px] vers-w-full vers-rounded-bl-[2.5rem]' src='/img3.webp' alt='' />
      <div className='vers-px-4 vers-py-3 sm:vers-pt-4 sm:vers-pb-6 vers-flex vers-flex-col vers-gap-2 vers-items-center'>
        <h2 className='vers-text-xl vers-font-bold vers-text-white  '>{element.title}</h2>
        <p className='vers-text-md vers-text-white '>{element.description }</p>
      </div>
    </article>
  )
}

export default CardService