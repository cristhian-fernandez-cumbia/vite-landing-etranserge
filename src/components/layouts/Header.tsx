import { useState } from 'react'
import Menu from './../menu/Menu'
import Logo from '../logo/Logo'
import { Close, MenuIcon } from '../../assets/icons'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg">
      <nav className="px-12 py-2 ">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden lg:flex">
            <Menu />
          </div>
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <Close className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" /> 
            )}
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden mt-2">
            <Menu mobile />
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header