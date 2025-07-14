import { NavLink } from 'react-router-dom'

type MenuProps = {
  mobile?: boolean
}

const menuItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Sist. de Gestión', path: '/sistemagestion' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Equipos', path: '/equipos' },
  { label: 'Contáctanos', path: '/contactanos' }
]

export const Menu = ({ mobile = false }: MenuProps) => {
  const linkClass = `px-3 py-2 rounded-md text-sm font-medium ${
    mobile ? 'block' : 'inline-block'
  }`

  return (
    <div className={`${mobile ? 'space-y-1' : 'space-x-4'}`}>
      {menuItems.map(({ label, path }) => (
        <NavLink
          key={label}
          to={path}
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? 'bg-gray-100 menu-option-seleccionada text-md xl:text-lg'
                : 'menu-option hover:bg-gray-100 text-md xl:text-lg'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu