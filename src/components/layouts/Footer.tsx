import { Email, Internet, Phone, Place, Twiter, Youtube } from '../../assets/icons';
import Instagram from '../../assets/icons/Instagram';
import logo from './../../assets/logo/logo_etranserge.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex bg-footer py-20 px-16 flex-col lg:flex-row lg:gap-8">
      {/* 1ra columna - Logo y redes sociales */}
      {/* <div className="lg:w-1/3 flex flex-row mt-2 justify-center lg:justify-start mb-8 lg:mb-0">
        <img src={logo} alt="Logo Etranserge" className="h-16 mr-5"/>
        <div className='flex flex-col'>
          <span className='text-xl font-bold text-white'>ETRANSERGE</span>
          <span className='text-[16px] text-white mb-5'>Empresa de Transportes y Servicios Genuinos S.R.L</span>
          <div className='flex flex-row'>
            <div className='p-2 bg-icon rounded-full mr-3'>
              <Instagram className='w-5 h-5'/>
            </div>
            <div className='p-2 bg-icon rounded-full mr-3'>
              <Internet className='w-5 h-5'/>
            </div>
            <div className='p-2 bg-icon rounded-full mr-3'>
              <Twiter className='w-5 h-5'/>
            </div>
            <div className='p-2 bg-icon rounded-full'>
              <Youtube className='w-5 h-5'/>
            </div>
          </div>
        </div>
      </div> */}
      <div className="lg:w-1/3 flex flex-col items-center lg:items-start mt-2 mb-8 lg:mb-0">
      {/* Logo arriba */}
      <img src={logo} alt="Logo Etranserge" className="h-16 mb-4"/>
      
      {/* Contenedor de texto y redes sociales */}
      <div className='flex flex-col items-center lg:items-start'>
        <div className='flex flex-row'>
          <div className='p-2 bg-icon rounded-full mr-3'>
            <Instagram className='w-5 h-5'/>
          </div>
          <div className='p-2 bg-icon rounded-full mr-3'>
            <Internet className='w-5 h-5'/>
          </div>
          <div className='p-2 bg-icon rounded-full mr-3'>
            <Twiter className='w-5 h-5'/>
          </div>
          <div className='p-2 bg-icon rounded-full'>
            <Youtube className='w-5 h-5'/>
          </div>
        </div>
      </div>
</div>

      {/* Contenedor para las 3 columnas restantes */}
      <div className="lg:w-3/4 flex flex-col lg:flex-row lg:gap-8 lg:justify-between">
        {/* 2da columna - Empresa */}
        <div className="lg:w-1/4 text-white flex flex-col text-center lg:text-left mb-8 lg:mb-0">
          <h2 className='text-3xl font-bold mb-6'>Empresa</h2>
          <ul>
            <li className='text-[18px] mb-2'>
              <NavLink to="/nosotros" className="text-white hover:text-primary">Nosotros</NavLink>
            </li>
            <li className='text-[18px] mb-2'>
              <NavLink to="/sistemagestion" className="text-white hover:text-primary">Sistema de Gestión</NavLink>
            </li>
            <li className='text-[18px] mb-2'>
              <NavLink to="/proyectos" className="text-white hover:text-primary">Proyectos</NavLink>
            </li>
            <li className='text-[18px] mb-2'>
              <NavLink to="/equipos" className="text-white hover:text-primary">Equipos</NavLink>
            </li>
          </ul>
        </div>

        {/* 3ra columna - Contáctanos */}
        <div className="text-white flex flex-col text-center lg:text-left mb-8 lg:mb-0">
          <h2 className='text-3xl font-bold mb-6'>Contáctanos</h2>
          <ul>
            <li className='text-[18px] mb-3 flex flex-row items-center justify-center lg:justify-start'>
              <Phone className='w-7 h-7 mr-3'/>
              <span>+51 995 964 600</span>
            </li>
            <li className='text-[18px] mb-2 flex flex-row items-center justify-center lg:justify-start'>
              <Email className='w-7 h-7 mr-3 mt-1'/>
              <span>administracion@etranserge.com</span>
            </li>
            <li className='text-[18px] mb-2 flex flex-row items-center justify-center lg:justify-start'>
              <Place className='w-9 h-9 mr-4'/>
              <span>Jr. Los Álamos N°309 Urb. Los Ficus - Santa Anita - Lima</span>
            </li>
          </ul>
        </div>

        {/* 4ta columna - Consultas */}
        <div className="text-white flex flex-col text-center lg:text-left">
          <h2 className='text-3xl font-bold mb-6'>Consultas</h2>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col items-center lg:items-start gap-2'>
              <p className='text-[18px] font-semibold'>Consulta de comprobante Electrónico</p>
              <a 
                href="https://www.nubefact.com/find_document" 
                target="_blank" 
                rel="noopener noreferrer"
                className='bg-[#183156] text-white px-6 py-2 rounded-lg hover:bg-[#0f1f3a] transition-colors duration-300 font-medium'
              >
                Consultar Comprobante
              </a>
            </div>
            
            <div className='flex flex-col items-center lg:items-start gap-2'>
              <p className='text-[18px] font-semibold'>Consulta de validez del comprobante de pago electrónico</p>
              <a 
                href="https://e-consulta.sunat.gob.pe/ol-ti-itconsvalicpe/ConsValiCpe.htm" 
                target="_blank" 
                rel="noopener noreferrer"
                className='bg-[#183156] text-white px-6 py-2 rounded-lg hover:bg-[#0f1f3a] transition-colors duration-300 font-medium'
              >
                Validar en SUNAT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer