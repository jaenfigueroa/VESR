import { useRef, useEffect, useState } from 'react'

export const Facebook = () => {
  const targetRef = useRef<HTMLIFrameElement>(null)
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        setWidth(Math.floor(width))
        setHeight(Math.floor(height))
      }
    })

    resizeObserver.observe(target)

    return () => {
      resizeObserver.unobserve(target)
    }
  }, [])

  return (
    <div className='vers-w- vers-flex vers-flex-col vers-bg-purplexxxxxxx-100 vers-gap-2'>
      <div className='vers-w-full'>
        <img className='vers-w-full' src='/Frame 8.png' alt='Piezas blancas donde se lee facebook' />
      </div>
      <div className='vers-w-full vers-h-[400px] md:vers-h-full vers-bg-light-gray vers-relative vers-max-w-[500px] vers-m-auto'>
        <iframe
          ref={targetRef}
          className='vers-border-2 vers-borde-solid versxxx-border-red vers-w-full vers-h-full vers-border-none'
          src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVESRoficial&tabs=timeline&width=${width}&height=${height}&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId`}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
    </div>
  )
}