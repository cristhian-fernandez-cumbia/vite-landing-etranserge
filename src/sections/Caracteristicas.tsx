import personal_capacitado from './../assets/inicio/personal_capacitado.png';
import seguridad_transporte from './../assets/inicio/seguridad_transporte.png';
import eficiencia from './../assets/inicio/eficiencia.png';

const Caracteristicas = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 py-20'>

      {/* Bloque que aparece desde la izquierda */}
      <div className='w-full lg:w-1/3 animate-slide-left'>
        <div className='h-32 flex justify-center items-center relative'>
          <span className='text-[18px] font-semibold px-20 text-center text-[#6BAEC3] lg:text-lg xl:text-xl 2xl:text-2xl'>Personal altamente capacitado</span>
          <div className='absolute top-2 left-2 w-6 h-6 bg-orange-500'></div>
          <div className='absolute bottom-2 right-2 w-6 h-6 bg-blue-900'></div>
        </div>
        <div>
          <img src={personal_capacitado} alt="Equipo 1" className="w-full h-56 lg:h-56 xl:h-60 2xl:h-80 object-cover object-center" />
        </div>
      </div>

      {/* Bloque que aparece desde abajo a arriba */}
      <div className='w-full lg:w-1/3 flex flex-col-reverse lg:flex-col animate-slide-up'>
        <div>
          <img src={seguridad_transporte} alt="Equipo 2" className="w-full h-56 lg:h-56 xl:h-60 2xl:h-80 object-cover object-center" />
        </div>
        <div className='h-32 flex justify-center items-center relative'>
          <span className='text-[18px] font-semibold px-20 text-center text-[#6BAEC3] lg:text-lg xl:text-xl 2xl:text-2xl'>para transportar con seguridad</span>
          <div className='absolute top-2 right-2 w-6 h-6 bg-orange-500'></div>
          <div className='absolute bottom-2 left-2 w-6 h-6 bg-blue-900'></div>
        </div>
      </div>

      {/* Bloque que aparece desde la derecha */}
      <div className='w-full lg:w-1/3 animate-slide-right'>
        <div className='h-32 flex justify-center items-center relative'>
          <span className='text-[18px] font-semibold px-20 text-center text-[#6BAEC3] lg:text-lg xl:text-xl 2xl:text-2xl'>eficiencia en el corazón de la minería</span>
          <div className='absolute top-2 left-2 w-6 h-6 bg-orange-500'></div>
          <div className='absolute bottom-2 right-2 w-6 h-6 bg-blue-900'></div>
        </div>
        <div>
          <img src={eficiencia} alt="Equipo 3" className="w-full h-56 lg:h-56 xl:h-60 2xl:h-80 object-cover object-center" />
        </div>
      </div>
    </div>
  )
}

export default Caracteristicas