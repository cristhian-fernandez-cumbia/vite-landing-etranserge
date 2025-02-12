import equipo01 from './../assets/equipos-cargio/equipo01.jpeg';
import equipo02 from './../assets/equipos-cargio/equipo02.jpeg';
import equipo03 from './../assets/equipos-cargio/equipo03.jpeg';

const Caracteristicas = () => {
  return (
    <div className='flex flex-row gap-10 py-20'>
      <div className='w-1/3'>
        <div className='h-32 flex justify-center items-center relative'>
          <span className='text-[18px] font-semibold px-20 text-center text-[#6BAEC3]'>Personal altamente capacitado</span>
          <div className='absolute top-2 left-2 w-6 h-6 bg-orange-500'></div>
          <div className='absolute bottom-2 right-2 w-6 h-6 bg-blue-900'></div>
        </div>
        <div>
          <img src={equipo01} alt="Equipo 1" className="w-full h-48 object-cover" />
        </div>
      </div>
      <div className='w-1/3'>
        <div>
          <img src={equipo02} alt="Equipo 2" className="w-full h-48 object-cover" />
        </div>
        <div className='h-32 flex justify-center items-center relative'>
          <span className='text-[18px] font-semibold px-20 text-center text-[#6BAEC3]'>para transportar con seguridad</span>
          <div className='absolute top-2 right-2 w-6 h-6 bg-orange-500'></div>
          <div className='absolute bottom-2 left-2 w-6 h-6 bg-blue-900'></div>
        </div>
      </div>
      <div className='w-1/3'>
        <div className='h-32 flex justify-center items-center relative'>
          <span className='text-[18px] font-semibold px-20 text-center text-[#6BAEC3]'>eficiencia en el corazón de la minería</span>
          <div className='absolute top-2 left-2 w-6 h-6 bg-orange-500'></div>
          <div className='absolute bottom-2 right-2 w-6 h-6 bg-blue-900'></div>
        </div>
        <div>
          <img src={equipo03} alt="Equipo 3" className="w-full h-48 object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Caracteristicas