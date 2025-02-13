import equipo01 from './../assets/equipos-cargio/equipo01.jpeg';
import equipo02 from './../assets/equipos-cargio/equipo02.jpeg';
import equipo03 from './../assets/equipos-cargio/equipo03.jpeg';

const EquiposOperando = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="lg:w-1/2 flex flex-col bg-secondary">
        <div className="flex flex-row ">
          <div className='w-1/2 border-r-[1px] border-r-white flex justify-center items-center py-6 lg:py-10 2xl:py-16'>
            <img src={equipo01} alt="Equipo 1" className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-cover border-2 border-white rounded-full" />
          </div>
          <div className='w-1/2 flex justify-center items-center py-6 lg:py-10 2xl:py-16'>
            <img src={equipo02} alt="Equipo 2" className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-cover border-2 border-white rounded-full" /> 
          </div>
        </div>

        <div className="flex justify-center border-t-[1px] border-t-white items-center py-6 lg:py-10 2xl:py-16">
          <img src={equipo03} alt="Equipo 3" className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-cover border-2 border-white rounded-full" />
        </div>
      </div>

      <div className="lg:w-1/2 flex flex-row mb-4 lg:mb-0">
        <div className="w-1/2 flex flex-col justify-between items-center text-center px-2 md:px-8 lg:px-14">
          <div className="h-2"></div>
          <div className="flex flex-col justify-center items-center mb-6 p-8">
            <span className="text-5xl font-bold mb-3 lg:text-6xl xl:text-7xl 2xl:text-8xl">+35</span>
            <span className="font-semibold lg:text-lg xl:text-xl 2xl:text-2xl">EQUIPOS OPERANDO</span>
          </div>
          <button className="bg-button text-white border-0  py-2 px-4 rounded-lg mb-6">
            <span className='text-sm lg:text-lg xl:text-xl'>Ver más</span>
          </button>
        </div>
        <div className="w-1/2 bg-secondary flex flex-col justify-center items-center text-center px-2 md:px-8 lg:px-14">
          <div className="text-white text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2 lg:mb-3 xl:mb-4 2xl:mb-5">EQUIPOS DE TRANSPORTE PESADO</div>
          <div className="text-white text-[15px] lg:text-lg 2xl:text-xl">Vehículos de alta capacidad y resistencia para el traslado seguro de cargas.</div>
        </div>
      </div>

      
    </div>
  )
}

export default EquiposOperando