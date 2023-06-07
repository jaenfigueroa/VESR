import facebook_white from './assets/facebook.svg'
import instagram_white from './assets/instagram.svg'
import twitter_white from './assets/twitter.svg'
import facebook_purple from './assets/facebook-2.svg'
import instagram_purple from './assets/instagram-2.svg'
import twitter_purple from './assets/twitter-2.svg'
import { SOCIALS } from './data/social'

type Props = {
  variant?: 'white' | 'purple',
  direction?: 'row' | 'column'
}

const DIRECCTIONS = {
  row: 'vers-flex-row',
  column: 'vers-flex-col',
}

export const Social = ({ variant = 'purple', direction='row' }: Props) => {
  return (
    <div className={`vers-flex ${DIRECCTIONS[direction]} vers-gap-2`}>
      <a href={SOCIALS.facebook} target='_blank'><img className='vers-w-4' src={ variant === 'white' ? facebook_white :facebook_purple } alt='Logo de Facebook' /></a>
      <a href={SOCIALS.instagram} target='_blank'><img className='vers-w-4' src={ variant === 'white' ? instagram_white :instagram_purple } alt='Logo de Instagram' /></a>
      <a href={SOCIALS.twitter} target='_blank'><img className='vers-w-4' src={ variant === 'white' ? twitter_white :twitter_purple } alt='Logo de Twitter' /></a>
    </div>
  )
}