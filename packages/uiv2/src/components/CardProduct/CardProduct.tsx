export const CardProduct = () => {
  return (
    <article className='vers-bg-pink-800 vers-overflow-hidden vers-rounded-lg vers-drop-shadow-[3px_3px_5px_#f5b4ea] vers-border-solid vers-border-2 vers-border-pink-800'>
      <div className='vers-bg-xxxxxred vers-h-[360px]'>
        <img className='vers-h-full vers-w-full vers-object-contain vers-bg-white vers-p-2' src='/products/product1.png' alt='' />
      </div>
      <div className='vers-px-4 vers-py-3 sm:vers-pt-4 sm:vers-pb-6 vers-flex vers-flex-col vers-gap-2 vers-items-center'>
        <h2 className='vers-text-xl vers-font-bold vers-text-white '>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h2>
        <p className='vers-text-md vers-text-white vers-text-justify'>Lorem ipsam, ullam numquam labore delectus laborum mollitia.</p>
        <div className='vers-flex vers-justify-between vers-w-full vers-items-center'>
          <p className='vers-text-3xl vers-font-bold vers-text-white'>$0.00</p>
          <i className='fa-solid fa-circle-play vers-text-5xl vers-text-white'></i>
        </div>
      </div>
    </article>
  )
}