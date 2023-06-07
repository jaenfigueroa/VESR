import vesrWhite from '../Icon/logo-white.png'
import vesrPuple from '../Icon/logo-purple.png'

type Props = {
  variant: 'purple' | 'white',
  width?: 'small' | 'medium'
}

const WIDTHS = {
  small: 'vers-w-[170px]',
  medium: 'vers-w-[240px]',
}

export const Logo = ({variant ='purple', width='small'}: Props) => {
  return (
    <div className={WIDTHS[width]}>
      <img className='vers-w-full' src={variant === 'purple' ? vesrPuple : vesrWhite} alt='lOGO de VESR' />
    </div>
  )
}