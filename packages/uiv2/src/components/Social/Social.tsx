import facebook_white from './assets/facebook.svg'
import instagram_white from './assets/instagram.svg'
import twitter_white from './assets/twitter.svg'
import facebook_purple from './assets/facebook-2.svg'
import instagram_purple from './assets/instagram-2.svg'
import twitter_purple from './assets/twitter-2.svg'
import { SOCIALS } from './data/social'

type Props = {
  color?: 'white' | 'purple',
  direction?: 'row' | 'column'
}

const DIRECCTIONS = {
  row: 'vers-flex-row',
  column: 'vers-flex-col',
}

const SOCIAL_ICONS = {
  facebook: {
    white: facebook_white,
    purple: facebook_purple,
  },
  twitter: {
    white: twitter_white,
    purple: twitter_purple,
  },
  instagram: {
    white: instagram_white,
    purple: instagram_purple,
  }
}

export const Social = ({ color = 'purple', direction='row' }: Props) => {
  return (
    <div className={`vers-flex ${DIRECCTIONS[direction]} vers-gap-2`}>
      <a href={SOCIALS.facebook} target='_blank'><img className='vers-w-4' src={SOCIAL_ICONS['facebook'][color]} alt='Logo de Facebook' /></a>
      <a href={SOCIALS.instagram} target='_blank'><img className='vers-w-4' src={ SOCIAL_ICONS['instagram'][color] } alt='Logo de Instagram' /></a>
      <a href={SOCIALS.twitter} target='_blank'><img className='vers-w-4' src={ SOCIAL_ICONS['twitter'][color] } alt='Logo de Twitter' /></a>
    </div>
  )
}