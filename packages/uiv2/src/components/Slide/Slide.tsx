import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
  children: JSX.Element[]
}

export const Slide = ({ children }: Props) => {
  const childrenArray = React.Children.toArray(children)

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className='vers-h-hero vers-overflow-hidden'>
      <Slider {...settings} className='vers-h-vers-h-screen vers-w-screen'>
        {
          childrenArray.map(element => (
            element
          ))
        }
      </Slider>
    </div>
  )
}