type Props = {
  text: string
  color: string
}

export const ButtonTertiary = ({text, color}: Props) => {
  return (
    <button className={ `${color} vers-text-white vers-py-[.2rem] vers-px-[.5rem] vers-rounded-full  vers-flex vers-justify-center sm:vers-justify-between vers-items-center vers-gap-4`}>
      <p className='vers-font-bold vers-uppercase sm:vers-text-xl vers-pl-[3rem]'>{text }</p>
      <i className='fa-solid fa-circle-arrow-right vers-text-3xl md:vers-text-4xl vers-pr-[.10rem]'></i>
    </button>
  )
}