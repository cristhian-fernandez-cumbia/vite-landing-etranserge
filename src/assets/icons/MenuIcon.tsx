import { IconProps } from '../../interfaces/icons'

const MenuIcon = (props: IconProps) => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" className={props?.className}>
      <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default MenuIcon




