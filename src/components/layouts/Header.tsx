import { useState } from 'react'
import Menu from './../menu/Menu'
import Logo from '../logo/Logo'
import { Close, MenuIcon } from '../../assets/icons'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg">
      <nav className="px-4 lg:px-12 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <div className='w-[80%] lg:w-[40%] '>
            <Logo />
          </div>
          <div className="hidden lg:flex w-[20%] lg:w-[60%] lg:justify-end xl:justify-center">
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