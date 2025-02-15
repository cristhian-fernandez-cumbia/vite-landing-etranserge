import bombonas from './../assets/equipos/bombonas.png'
import cama_baja from './../assets/equipos/cama_baja.png'
import cargador from './../assets/equipos/cargador.png'
import encapsulado from './../assets/equipos/encapsulado.png'
import excavadora from './../assets/equipos/excavadora.png'
import motoniveladora from './../assets/equipos/motoniveladora.png'
import plataforma from './../assets/equipos/plataforma.png'
import rodillo from './../assets/equipos/rodillo.png'
import tractor from './../assets/equipos/tractor.png'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

const Equipos = () => {
  const items_cargio = [
    { image: excavadora, title:"Excavadora", description: "Las excavadoras mineras son gigantes de acero que lideran el camino en la minería de superficie. Estas máquinas robustas desempeñan un papel crucial al excavar y cargar grandes cantidades de material." },
    { image: cargador, title:"Cargador Frontal", description: "Es un equipo tractor que posee una cuchara en su extremo frontal, utilizado generalmente en la construcción de edificios, en minería, carreteras, autopistas, túneles, presas hidráulicas para la carga de camiones con materiales de distintos tipos, como piedra, arena, tierra, etc." },
    { image: motoniveladora, title:"Motoniveladora", description: "Una motoniveladora es una máquina de construcción autopropulsada que se vale de una larga cuchilla metálica ubicada en su tren delantero para, como su nombre lo indica, nivelar terrenos. En su eje delantero tiene escarificadores, que se asemejan a un rastrillo por sus dientes, que sirve para romper terrenos duros." },
    { image: rodillo, title:"Rodillos 10 y 12Tn.", description: "Es un equipo tractor que posee una cuchara en su extremo frontal, utilizado generalmente en la construcción de edificios, en minería, carreteras, autopistas, túneles, presas hidráulicas para la carga de camiones con materiales de distintos tipos, como piedra, arena, tierra, etc." },
    { image: tractor, title:"Tractor", description: "El tractor  es un vehículo universal diseñado para el transporte seguro de material y personas en las exigentes condiciones mineras con riesgo de explosión de gas o polvo de carbón." }
  ];
  const items_transporte = [
    { image: cama_baja, title:"Cama baja", description: "Un lowboy o cama baja se refiere a un tipo de remolque de plataforma baja que son remolcados por un tractocamión y son las más adecuadas para todo tipo de cargas pesadas y materiales de grandes dimensiones. El lowboy son un tipo de remolque menos común y su uso es más costoso." },
    { image: plataforma, title:"Plataformas", description: "Los camiones de plataforma son un método popular de transporte para productos no comercializados y tipos de equipos. Entre ellos están los materiales que pueden cargarse lateralmente con una grúa o carretilla elevadora y los que no son frágiles y pueden exponerse a la intemperie durante el transporte." },
    { image: bombonas, title:"Bombonas", description: "El camion bombona se utiliza para transportar a largas distancias el hormigón elaborado en una central de hormigonado, sin que durante el trayecto el material se deteriore o merme su calidad" },
    { image: encapsulado, title:"Encapsulado", description: " Los camiones encapsulados para minerales están diseñados específicamente para evitar cualquier tipo de contaminación o derrame durante el transporte." },
  ];

  return (
    <div className="py-12">
      <div className="flex flex-row justify-center items-center mb-8">
        <div className="w-2 h-6 lg:h-7 xl:h-8 2xl:h-10 bg-secondary mr-2"></div>
        <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-primario">EQUIPOS DE CARGIO</h1>
      </div>

      <div className="space-y-6">
        {items_cargio.map((item, index) => (
          <ScrollAnimation
            animateIn={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
            animateOnce={true}
            offset={100} // Se aplica cuando se ha desplazado una cierta distancia
            style={{ width: "100%" }}
          >
            <div className={`flex ${index % 2 === 0 ? 'flex-row animate-slide-left':'flex-row-reverse animate-slide-right'} mb-0`} >
              <div className={`flex ${index % 2 === 0 ? 'flex-row':'flex-row-reverse '} md:w-[60%]`}>
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'bg-[#183156]' : 'bg-[#6BAEC3]'} text-white p-6 w-[80%]`}
                >
                  <div className="flex flex-col items-center gap-4 px-6 py-4 w-full">
                    <div className="w-32 h-32 bg-white rounded-full lg:w-36 lg:h-36 xl:w-44 xl:h-44 2xl:w-52 2xl:h-52">
                      <img src={item.image} alt={item.title} className="w-32 h-32 rounded-full border-2 border-white lg:w-36 lg:h-36 xl:w-44 xl:h-44 2xl:w-52 2xl:h-52" />
                    </div>
                    <div className='flex flex-col items-center'>
                      <h2 className="text-xl font-semibold mb-2 lg:text-2xl xl:text-3xl 2xl:text-4xl">{item.title}</h2>
                      <p className="text-xs text-center lg:text-[16px] xl:text-[18px] w-[250px] md:w-[260px] lg:w-[450px] xl:w-[550px]">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'bg-[#183156] -left-[0.5px]' : 'bg-[#6BAEC3] left-[0.5px]'} text-white p-6 w-[20%]`}
                  style={{
                    clipPath: index % 2 === 0
                      ? 'polygon(0 0, 0 100%, 100% 45%)'
                      : 'polygon(100% 0, 100% 100%, 0 45%)',
                  }}
                >
                </div>
              </div>

              <div className='hidden md:w-[40%] md:flex md:flex-row md:justify-center md:items-center md:gap-8'>
                <div className= {`flex gap-24 lg:gap-40 ${index % 2 === 0 ? 'rotate-45' : '-rotate-45'}`}>
                  <div className='w-6 h-6 rotate-45 bg-[#6BAEC3]'></div>
                  <div className='w-6 h-6 rotate-45 bg-[#F4811F]'></div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      <div className="flex flex-row justify-center items-center mb-12 mt-12">
        <div className="w-2 h-6 lg:h-7 xl:h-8 2xl:h-10 bg-secondary mr-2"></div>
        <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-primario">EQUIPOS DE TRANSPORTE PESADO</h1>
      </div>

      <div className="space-y-6">
        {items_transporte.map((item, index) => (
          <ScrollAnimation
            animateIn={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
            animateOnce={true}
            offset={100} // Se aplica cuando se ha desplazado una cierta distancia
            style={{ width: "100%" }}
          >
            <div className={`flex ${index % 2 === 0 ? 'flex-row':'flex-row-reverse'}`} >
              <div className={`flex ${index % 2 === 0 ? 'flex-row':'flex-row-reverse '} md:w-[60%]`}>
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'bg-[#F4811F]' : 'bg-[#6BAEC3]'} text-white p-6 w-[80%]`}
                >
                  <div className="flex flex-col items-center gap-4 px-6 py-4 w-full">
                    <div className="w-32 h-32 bg-white rounded-full lg:w-36 lg:h-36 xl:w-44 xl:h-44 2xl:w-52 2xl:h-52">
                      <img src={item.image} alt={item.title} className="w-32 h-32 rounded-full border-2 border-white lg:w-36 lg:h-36 xl:w-44 xl:h-44 2xl:w-52 2xl:h-52" />
                    </div>
                    <div className='flex flex-col items-center'>
                      <h2 className="text-xl font-semibold mb-2 lg:text-2xl xl:text-3xl 2xl:text-4xl">{item.title}</h2>
                      <p className="text-xs text-center lg:text-[16px] xl:text-[18px] w-[250px] md:w-[260px] lg:w-[450px] xl:w-[550px]">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'bg-[#F4811F] -left-[0.5px]' : 'bg-[#6BAEC3] left-[0.5px]'} text-white p-6 w-[20%]`}
                  style={{
                    clipPath: index % 2 === 0
                      ? 'polygon(0 0, 0 100%, 100% 45%)'
                      : 'polygon(100% 0, 100% 100%, 0 45%)',
                  }}
                >
                </div>
              </div>

              <div className='hidden md:w-[40%] md:flex md:flex-row md:justify-center md:items-center md:gap-8'>
                <div className= {`flex gap-24 lg:gap-40 ${index % 2 === 0 ? 'rotate-45' : '-rotate-45'}`}>
                  <div className='w-6 h-6 rotate-45 bg-[#6BAEC3]'></div>
                  <div className='w-6 h-6 rotate-45 bg-[#183156]'></div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Equipos;