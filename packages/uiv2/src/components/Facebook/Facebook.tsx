export const Facebook = () => {
  return (
    <div className='vers-w- vers-flex vers-flex-col vers-bg-purplexxxxxxx-100 vers-gap-2'>
      <div className='vers-w-full'>
        <img className='vers-w-full' src='/Frame 8.png' alt='Piezas blancas donde se lee facebook' />
      </div>
      <div className='vers-w-full vers-h-[400px] md:vers-h-full vers-bg-light-gray vers-relative'>
        <iframe
          className='vers-border-2 vers-borde-solid vers-border-red vers-w-full vers-h-full'
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVESRoficial&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
          width="200"
          height="300"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
    </div>
  )
}