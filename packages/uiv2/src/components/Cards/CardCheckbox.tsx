type Props = {
  text: string
}

const CardCheckbox = ({ text }: Props) => {
  return (
    <article className='vers-flex vers-gap-2 vers-justify-center vers-items-center'>
      <div className='vers-border-solid vers-border-4 vers-border-primary vers-w-[40px] vers-h-[40px] vers-flex vers-justify-center vers-items-center vers-p-2'>
        <p className='vers-text-2xl vers-font-bold vers-text-primary'>X</p>
      </div>
      <div className='vers-border-solid vers-border-4 vers-border-primary vers-p-2'>
        <p className='vers-font-medium'>{text}</p>
      </div>
    </article>
  )
}

export default CardCheckbox