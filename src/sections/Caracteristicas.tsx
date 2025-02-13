import equipo01 from './../assets/equipos-cargio/equipo01.jpeg';
import equipo02 from './../assets/equipos-cargio/equipo02.jpeg';
import equipo03 from './../assets/equipos-cargio/equipo03.jpeg';

const Caracteristicas = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 py-20'>

      <div className='w-full lg:w-1/3'>
        <div className='h-32 flex justify-center items-center relative'>
          <span className='text-[18px] font-semibold px-20 text-center text-[#6BAEC3] lg:text-lg xl:text-xl 2xl:text-2xl'>Personal altamente capacitado</span>
          <div className='absolute top-2 left-2 w-6 h-6 bg-orange-500'></div>
          <div className='absolute bottom-2 right-2 w-6 h-6 bg-blue-900'></div>
        </div>
        <div>
          <img src={equipo01} alt="Equipo 1" className="w-full h-56 lg:h-56 xl:h-60 2xl:h-80 object-cover object-center" />
        </div>
      </div>

      <div className='w-full lg:w-1/3 flex flex-col-reverse lg:flex-col'>
        <div>
          <img src={equipo02} alt="Equipo 2" className="w-full h-56 lg:h-56 xl:h-60 2xl:h-80 object-cover object-center" />
        </div>
        <div className='h-32 flex justify-center items-center relative'>
          <span className='text-[18px] font-semibold px-20 text-center text-[#6BAEC3] lg:text-lg xl:text-xl 2xl:text-2xl'>para transportar con seguridad</span>
          <div className='absolute top-2 right-2 w-6 h-6 bg-orange-500'></div>
          <div className='absolute bottom-2 left-2 w-6 h-6 bg-blue-900'></div>
        </div>
      </div>

      <div className='w-full lg:w-1/3'>
        <div className='h-32 flex justify-center items-center relative'>
          <span className='text-[18px] font-semibold px-20 text-center text-[#6BAEC3] lg:text-lg xl:text-xl 2xl:text-2xl'>eficiencia en el corazón de la minería</span>
          <div className='absolute top-2 left-2 w-6 h-6 bg-orange-500'></div>
          <div className='absolute bottom-2 right-2 w-6 h-6 bg-blue-900'></div>
        </div>
        <div>
          <img src={equipo03} alt="Equipo 3" className="w-full h-56 lg:h-56 xl:h-60 2xl:h-80 object-cover object-center" />
        </div>
      </div>
    </div>
  )
}

export default Caracteristicas