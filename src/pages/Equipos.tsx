import bombonas from './../assets/equipos/bombonas.png'
import cama_baja from './../assets/equipos/img_cama_baja.jpg'
import cargador from './../assets/equipos/equipo09.jpg'
import encapsulado from './../assets/equipos/img_encapsulado.jpg'
import excavadora from './../assets/equipos/equipo08.jpg'
import motoniveladora from './../assets/equipos/equipo10.jpg'
import plataforma from './../assets/equipos/img_plataforma.jpg'
import rodillo from './../assets/equipos/equipo11.jpg'
import tractor from './../assets/equipos/img_tractor.jpg'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';
import { useEffect } from 'react'

const Equipos = () => {
  const items_cargio = [
    { image: excavadora, title:"Excavadora", description: "Las excavadoras son máquinas esenciales para realizar diversas tareas como excavar, mover tierra, cargar materiales y nivelar terrenos. Su versatilidad las hace indispensables en proyectos de minería, construcción, obras viales y más." },
    { image: cargador, title:"Cargador Frontal", description: "El Cargador Frontal  es una máquina pesada utilizada en minería para realizar acarreo, carga de material (mineral, desmonte, relaves) y corte de salud." },
    { image: motoniveladora, title:"Motoniveladora", description: "La motoniveladora es utilizada principalmente para nivelar y dar forma a superficies. Equipo de gran importancia en minería para el mantenimiento de vías, extendido de material en plataformas, entre otros." },
    { image: rodillo, title:"Rodillos 10 y 12Tn.", description: "El Rodillo máquina utilizada para compactar diferentes tipos de materiales, como desmonte, tierra, concreto, relave entre otros con el objetivo de mejorar la densidad y estabilidad de la superficie." },
    { image: tractor, title:"Tractor", description: "El tractor es una máquina pesada utilizada en construcción y minería, especialmente en terrenos difíciles, debido a su tracción superior y estabilidad. Su diseño con orugas le permite operar en superficies irregulares, pendientes y terrenos inestables, a diferencia de los tractores con ruedas." }
  ];
  const items_transporte = [
    { image: cama_baja, title:"Cama baja", description: "En minería, una cama baja (también conocida como lowboy o remolque de plataforma baja) es un tipo de remolque utilizado para transportar maquinaria pesada y equipos de grandes dimensiones." },
    { image: plataforma, title:"Plataformas", description: "Se emplean para trasladar materiales sin embalar, equipos y maquinaria. Estos camiones, que suelen ser plataformas extensibles o adaptables, resultan imprescindibles para transportar materiales tales como acero, madera, tuberías, maquinaria de gran peso y componentes prefabricados." },
    { image: bombonas, title:"Bombonas", description: "También denominados camiones mineros, son vehículos de gran tamaño diseñados para llevar grandes volúmenes de materiales como  cemento, concentrado y otros minerales. Estos vehículos, frecuentemente capaces de transportar decenas o de toneladas, resultan cruciales para la eficacia en proyectos de gran magnitud en ambas industrias." },
    { image: encapsulado, title:"Encapsulado", description: "En la minería, los camiones encapsulados son cruciales para transportar minerales concentrados de manera segura y eficiente, cumpliendo con las normativas ambientales. Estos camiones suelen estar equipados con tolvas o contenedores cerrados para evitar la dispersión de polvo o materiales durante el transporte, especialmente en áreas sensibles como zonas urbanas o cerca de comunidades." },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12">
      <div className="flex flex-row justify-center items-center mb-8">
        <div className="w-2 h-6 lg:h-7 xl:h-8 2xl:h-10 bg-secondary mr-2"></div>
        <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-primario">EQUIPOS DE CARGUIO</h1>
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