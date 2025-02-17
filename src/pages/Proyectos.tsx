import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

const Proyectos = () => {
  const items = [
    { titulo: "CIA. MINERA ISCAYCRUZ", subtitulo: "", meses: "Feb - Nov", ano: "2002", description: "Transporte de concentrado de mineral encapsulado" },
    { titulo: "CIA. MINERA RAURA", subtitulo: "", meses: "Nov", ano: "2003", description: "Alquiler de vehículos y volquete" },
    { titulo: "MICONG S.R.L", subtitulo: "", meses: "Nov - Nov", ano: "2003-2005", description: "Transporte de concentrado de mineral" },
    { titulo: "UNICON", subtitulo: "", meses: "May - Nov", ano: "2006", description: "Transporte de cemento a granel" },
    { titulo: "EMPRESA MINERA LOS QUENUALES", subtitulo: "", meses: "Feb - Actualidad", ano: "2002", description: "Transporte de cemento a granel" },
    { titulo: "CIA MINERA VOLCAN S.A.A", subtitulo: "", meses: "Ago - May", ano: "2007 - 2012", description: "Alquiler de maquinas pesadas y volquete. Transporte de concentrado de mineral" },
    { titulo: "COMPAÑIA MINERA EL BROCAL", subtitulo: "", meses: "2017 - 2019", ano: "", description: "Transporte de concentrado de mineral encapsulado" },
    { titulo: "CEMENTO ANDINO S.A.", subtitulo: "", meses: "Feb - Dic", ano: "2006", description: "Transporte a granel en bombona" },
    { titulo: "CONSORCIO MINERO HACIA DOE RUN LA OROYA", subtitulo: "", meses: "May - Dic", ano: "2002 - 2005", description: "Transporte de concentrado de mineral" },
    { titulo: "NEXA RESOURCES PERU S.A", subtitulo: "", meses: "Mar - Nov", ano: "2009 - 2015", description: "Alquiler de maquina pesada y volquete" },
    { titulo: "CIA. MINERA YANACOCHA", subtitulo: "", meses: "Ago - Nov", ano: "2003 - 2005", description: "Alquiler de maquina pesada y volquetes (GYM S.A.A.)" },
    { titulo: "NEXA RESOURCES PERU S.A", subtitulo: "", meses: "Mar - Actualidad", ano: "2005", description: "Alquiler de volquetes" },
    { titulo: "COMPAÑIA MINERA ALPAYANA", subtitulo: "", meses: "Jun - Oct", ano: "2014 - 2020", description: "Transporte de concentrado de mineral" },
    { titulo: "COMPAÑIA MINERA ARES SAC", subtitulo: "", meses: "Mar - Actualidad", ano: "2007", description: "Transporte de cemento a granel" }
  ];

  return (
    <div className="pt-12">
      <div className="flex flex-col justify-center w-full items-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-center mb-5">
        <h1 className="text-primario">Experiencia con otras prestaciones de</h1>
        <h1 className="text-secundario">servicios y transportes</h1>
      </div>

      {/* Línea de tiempo */}
      <div className="relative pl-8 py-12 bg-[#183156] overflow-y-hidden">
        <div className="absolute left-1/6 md:left-1/2 border-l-2 border-gray-300 h-full"></div>

        {items.map((item, index) => (
          <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Círculo de la línea de tiempo */}
            <div className="w-8 h-8 bg-white rounded-full border-4 border-white absolute left-1/6 md:left-1/2 transform -translate-x-1/2 z-10"></div>

            {/* Contenido del item */}
            <div className={`flex-1 ${index % 2 === 0 ? 'pl-24 md:pl-16' : 'pl-24 md:pr-16'} ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}>
              {/* Contenedor del borde */}
              <ScrollAnimation
                animateIn={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
                animateOnce={true}
                offset={100} // Se aplica cuando se ha desplazado una cierta distancia
              >
                <div className="lg:border-2 lg:border-white inline-flex flex-col lg:w-96 lg:px-6 lg:py-4 lg:rounded-lg lg:relative">
                  {/* Flecha */}
                  
                    <div 
                      className={`lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:border-t-[20px] lg:border-t-transparent lg:border-r-[20px] lg:border-r-white lg:border-b-[20px] lg:border-b-transparent lg:w-0 lg:h-0 lg:transform 
                      ${index % 2 === 0 ? 'lg:right-[-20px] lg:rotate-180' : 'lg:left-[-20px] lg:rotate-0'}`}
                    ></div>

                  <h3 className="text-xl font-semibold text-secundario">{item.titulo}</h3>
                  {item.subtitulo && <p className="text-sm text-gray-600">{item.subtitulo}</p>}
                  <p className="text-sm text-white">{item.meses} {item.ano}</p>
                  <p className="mt-2 text-sm text-[#6BAEC3]">{item.description}</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;