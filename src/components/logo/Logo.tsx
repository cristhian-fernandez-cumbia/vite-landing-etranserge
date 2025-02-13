import logo from './../../assets/logo/logo_etranserge.png'
export const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Logo Etransgerge" width={250} className='block lg:hidden'/>
      <img src={logo} alt="Logo Etransgerge" width={400} className='hidden lg:block'/>
    </div>
  )
}

export default Logo
