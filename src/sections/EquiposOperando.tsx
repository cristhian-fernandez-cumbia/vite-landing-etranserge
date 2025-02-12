import equipo01 from './../assets/equipos-cargio/equipo01.jpeg';
import equipo02 from './../assets/equipos-cargio/equipo02.jpeg';
import equipo03 from './../assets/equipos-cargio/equipo03.jpeg';

const EquiposOperando = () => {
  return (
    <div className="h-80 flex flex-row">
      <div className="w-1/2 flex flex-col bg-secondary">
        <div className="flex flex-row h-40">
          <div className='w-1/2 border-r-[1px] border-r-white flex justify-center items-center'>
            <img src={equipo01} alt="Equipo 1" className="w-32 h-32 object-cover border-2 border-white rounded-full" />
          </div>
          <div className='w-1/2 flex justify-center items-center'>
            <img src={equipo02} alt="Equipo 2" className="w-32 h-32 object-cover border-2 border-white rounded-full" /> 
          </div>
        </div>
        <div className="flex justify-center border-t-[1px] border-t-white h-40 items-center">
          <img src={equipo03} alt="Equipo 3" className="w-32 h-32 object-cover border-2 border-white rounded-full" />
        </div>
      </div>
      <div className="w-1/2 flex flex-row">
        <div className="w-1/2 flex flex-col items-center justify-between py-6">
          <div className="h-2"></div>
          <div className="flex flex-col justify-center items-center mb-6">
            <span className="text-5xl font-bold mb-3">+35</span>
            <span className="font-semibold">EQUIPOS OPERANDO</span>
          </div>
          <button className="bg-button text-white border-0  py-2 px-4 rounded-lg">
            Ver más
          </button>
        </div>
        <div className="w-1/2 bg-secondary flex flex-col justify-center items-center text-center px-14">
          <div className="text-white text-2xl mb-2">EQUIPOS DE TRANSPORTE PESADO</div>
          <div className="text-white text-[15px]"> Vehículos de alta capacidad y resistencia para el traslado seguro de cargas.</div>
        </div>
      </div>
    </div>
  )
}

export default EquiposOperando