import face from './face.svg'
// import facebook from './facebook.svg'
// import twitter from './twitter.svg'

// export type IconTypes = 'face' | 'facebook' | 'twitter'
export type IconTypes = 'face'

type Props = {
  type: IconTypes,
}

const iconMap: Record<IconTypes, { src: string, alt: string }> = {
  face: { src: face, alt: 'face Icon' },
  // facebook: { src: facebook, alt: 'Facebook Icon' },
  // twitter: { src: twitter, alt: 'Twitter Icon' },
}

const Icon = ({ type }: Props) => {
  const { src, alt } = iconMap[type]

  return <img  src={src} alt={alt} />
}

export default Icon
