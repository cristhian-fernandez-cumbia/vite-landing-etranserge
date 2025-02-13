import { Email, Internet, Phone, Place, Twiter, Youtube } from '../../assets/icons';
import Instagram from '../../assets/icons/Instagram';
import logo from './../../assets/logo/logo_isotipo.png';

const Footer = () => {
  return (
    <div className="flex bg-footer py-20 px-16 flex-col lg:flex-row">
      <div className="lg:w-1/2 flex flex-row mt-2 justify-center lg:justify-start mb-5 lg:mb-0">
        <img src={logo} alt="Logo Etranserge" className="h-16 mr-5"/>
        <div className=' flex flex-col'>
          <span className='text-xl font-bold text-white'>ETRANSERGE S.R.L</span>
          <span className='text-[16px] text-white mb-5'>Empresa de Transportes y Servicios Genuinos S.C.R.L</span>
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
      <div className="lg:w-1/2 text-white flex lg:flex-row gap-6 flex-col text-center lg:text-left">
        <div className="w-full lg:w-1/3 flex flex-col">
          <h2 className='text-3xl font-bold mb-6'>Empresa</h2>
          <ul>
            <li className='text-[18px] mb-2'>Nosotros</li>
            <li className='text-[18px] mb-2'>Programas</li>
            <li className='text-[18px] mb-2'>Proyectos</li>
            <li className='text-[18px] mb-2'>Equipos</li>
          </ul>
        </div>
        <div className="lg:w-2/3 flex flex-col items-center lg:items-start">
        <h2 className='text-3xl font-bold mb-6'>Contáctanos</h2>
          <ul>
            <li className='text-[18px] mb-3 flex flex-row items-center justify-center lg:justify-start'>
              <Phone className='w-7 h-7 mr-3'/>
              <span >+51 995 964 600</span>
            </li>
            <li className='text-[18px] mb-2 flex flex-row items-center justify-center lg:justify-start'>
              <Email className='w-7 h-7 mr-3 mt-1'/>
              <span>administracion@etranserge.com</span>
            </li>
            <li className='text-[18px] mb-2 flex flex-row items-center justify-center lg:justify-start'>
              <Place className='w-9 h-9 mr-4'/>
              <span>Jr. Los Álamos N°309 Urb. Los Ficus - Santa Anita - Lima</span>
            </li>
          </ul></div>
      </div>
    </div>
  )
}

export default Footer