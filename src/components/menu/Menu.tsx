import { NavLink } from 'react-router-dom'

type MenuProps = {
  mobile?: boolean
}

const removeAccents = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const Menu = ({ mobile = false }: MenuProps) => {
  const linkClass = `px-3 py-2 rounded-md text-sm font-medium ${
    mobile ? 'block' : 'inline-block'
  }`

  return (
    <div className={`${mobile ? 'space-y-1' : 'space-x-4'}`}>
      {['Inicio', 'Nosotros', 'Programas', 'Proyectos', 'Contáctanos'].map((item) => (
        <NavLink
          key={item}
          to={item === 'Inicio' ? '/' : `/${removeAccents(item.toLowerCase())}`}
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? 'bg-gray-100 menu-option-seleccionada text-md xl:text-lg'
                : 'menu-option hover:bg-gray-100 text-md xl:text-lg'
            }`
          }
        >
          {item}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu