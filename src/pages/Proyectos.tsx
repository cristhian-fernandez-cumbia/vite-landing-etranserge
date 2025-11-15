import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

const Proyectos = () => {
  const items = [
    { titulo: "NEXA RESOURCES PERU S.A. (CERRO LINDO)", subtitulo: "", meses: "", ano: "2011 - Actualidad", description: "Alquiler de equipo pesado y transporte de material con volquetes" },
    { titulo: "OCHO SUR U S.A.C.", subtitulo: "", meses: "", ano: "2018 - A LA ACTUALIDAD", description: "Transporte de cemento a granel" },
    { titulo: "COMPAÑÍA MINERA ARES S.A.C.", subtitulo: "", meses: "", ano: "2015 - 2023", description: "Transporte de cemento a granel" },
    { titulo: "SOBREANDES SAC (ANTES ALPAYANA)", subtitulo: "", meses: "", ano: "2014 - 2020", description: "Transporte de cemento a granel y en big-bag" },
    { titulo: "SOCIEDAD MINERA EL BROCAL SAA", subtitulo: "", meses: "", ano: "2017 - 2019", description: "Transporte de concentrado con encapsulado" },
    { titulo: "EMPRESA MINERA LOS QUENUALES S.A.C.", subtitulo: "", meses: "", ano: "2003 - 2015", description: "Transporte de cemento a granel" },
    { titulo: "MILPO ANDINA S.A.C.", subtitulo: "", meses: "", ano: "2009 - 2013", description: "Alquiler de equipo pesado y transporte de material con volquetes" },
    { titulo: "CIA MINERA VOLCAN S.A.A. (UM CHUNGAR)", subtitulo: "", meses: "", ano: "2007 - 2012", description: "Alquiler de equipo pesado y transporte de material con volquetes" },
    { titulo: "CEMENTO ANDINO S.A.", subtitulo: "", meses: "", ano: "2006", description: "Transporte de cemento a granel" },
    { titulo: "UNION DE CONCRETERAS S.A. (UNICON)", subtitulo: "", meses: "", ano: "2006", description: "Transporte de cemento a granel" },
    { titulo: "MINERA YANACOCHA S.R.L.", subtitulo: "", meses: "", ano: "2006", description: "Alquiler de equipo pesado y transporte de material con volquetes" },
    { titulo: "MINERA BARRICK PERU S.A.", subtitulo: "", meses: "", ano: "2005", description: "Alquiler de equipo pesado y transporte de material con volquetes" },
    { titulo: "CIA. MINERA RAURA S.A.", subtitulo: "", meses: "", ano: "2004", description: "Transporte de material con volquetes" }
  ];

  return (
    <div className="pt-12">
      <div className="flex flex-col justify-center w-full items-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-center mb-5">
        <h1 className="text-primario">Experiencia con otras prestaciones de</h1>
        <h1 className="text-secundario">servicios y transportes</h1>
      </div>

      {/* Línea de tiempo */}
      <div className="relative px-8 py-12 bg-[#183156] overflow-y-hidden lg:mx-12 xl:mx-28 2xl:mx-36 2xl:px-16">
        <div className="absolute left-1/6 md:left-1/2 border-l-2 border-white h-full"></div>

        {items.map((item, index) => (
          <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Círculo de la línea de tiempo */}
            <div className="w-8 h-8 bg-white rounded-full border-4 border-white absolute left-1/6 md:left-1/2 transform -translate-x-1/2 z-10"></div>

            {/* Contenido del item */}
            <div className={`flex-1 ${index % 2 === 0 ? 'pl-24 md:pl-16 lg:pl-0 xl:pl-16 2xl:pl-32' : 'pl-24 md:pr-16 lg:pr-0 xl:pr-16 2xl:pr-32'} ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}>
              {/* Contenedor del borde */}
              <ScrollAnimation
                animateIn={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
                animateOnce={true}
                offset={100} // Se aplica cuando se ha desplazado una cierta distancia
              >
                <div className="lg:border-2 lg:border-[#FF7D0E] bg-footer inline-flex flex-col lg:w-96 lg:px-6 lg:py-4 lg:rounded-lg lg:relative">
                  {/* Flecha */}
                  
                    <div 
                      className={`lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:border-t-[20px] lg:border-t-transparent lg:border-r-[20px] lg:border-r-[#FF7D0E] lg:border-b-[20px] lg:border-b-transparent lg:w-0 lg:h-0 lg:transform 
                      ${index % 2 === 0 ? 'lg:right-[-20px] lg:rotate-180' : 'lg:left-[-20px] lg:rotate-0'}`}
                    ></div>

                  <h3 className="text-xl font-semibold text-white">{item.titulo}</h3>
                  {item.subtitulo && <p className="text-sm text-gray-600">{item.subtitulo}</p>}
                  <p className="text-sm text-white">{item.meses} {item.ano}</p>
                  <p className="mt-2 text-sm text-white">{item.description}</p>
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