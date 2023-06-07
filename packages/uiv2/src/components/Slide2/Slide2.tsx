import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
  children: JSX.Element[]
}

export const Slide2 = ({ children }: Props) => {
  const childrenArray = React.Children.toArray(children)

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',

    adaptiveHeight:true,
  }

  return (
    <div className='vers-overflow-hidden vers-w-full vers-bgxxxxx-gray'>
      <Slider {...settings} className='vers-h-vers-h-screen vers-w-screen md:vers-w-full'>
        {
          childrenArray.map(element => (
            element
          ))
        }
      </Slider>
    </div>
  )
}