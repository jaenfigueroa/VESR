import face from './face.svg'
// import facebook from './facebook.svg'
// import instagram from './instagram.svg'
// import twitter from './twitter.svg'
// import facebook2 from './facebook-2.svg'
// import instagram2 from './instagram-2.svg'
// import twitter2 from './twitter-2.svg'

// export type IconTypes = 'face' | 'facebook' | 'instagram' | 'twitter' | 'facebook2' | 'instagram2' | 'twitter2'
export type IconTypes = 'face'

type Props = {
  type: IconTypes,
}

const iconMap: Record<IconTypes, { src: string, alt: string }> = {
  face: { src: face, alt: 'face Icon' },
  // facebook: { src: facebook, alt: 'Facebook Icon' },
  // instagram: { src: instagram, alt: 'Instagram Icon' },
  // twitter: { src: twitter, alt: 'Twitter Icon' },
  // facebook2: { src: facebook2, alt: 'Facebook Icon' },
  // instagram2: { src: instagram2, alt: 'Instagram Icon' },
  // twitter2: { src: twitter2, alt: 'Twitter Icon' },
}

export const Icon = ({ type }: Props) => {
  const { src, alt } = iconMap[type]

  return <img  src={src} alt={alt} />
}
