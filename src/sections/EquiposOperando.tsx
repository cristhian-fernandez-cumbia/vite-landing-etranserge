import { useState, useEffect, useRef } from 'react';
import cama_baja from './../assets/equipos/equipo05.jpg';
import bombonas from './../assets/equipos/equipo06.jpg';
import encapsulado from './../assets/equipos/equipo07.jpg';
import { NavLink } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

const EquiposOperando = () => {
  const [count, setCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false); // Estado para iniciar el contador cuando la sección es visible
  const sectionRef = useRef<HTMLDivElement | null>(null); // Referencia a la sección

  // Lógica para contar hasta 35 cuando se activa el observer
  useEffect(() => {
    if (!startCounting) return; // No hacer nada si no debemos contar

    const target = 35; // El número final que quieres alcanzar
    const duration = 2000; // Tiempo total de la animación (en milisegundos)
    const increment = target / (duration / 50); // Incremento por intervalo (50ms)
    
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < target) {
          return Math.min(prevCount + increment, target); // Asegura que no pase de 35
        } else {
          clearInterval(interval); // Detenemos el intervalo cuando se llega a 35
          return target;
        }
      });
    }, 50); // Intervalo de 50ms para incrementar el número

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [startCounting]);

  // Usamos IntersectionObserver para activar el contador cuando la sección es visible
  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true); // Iniciar el contador cuando la sección entra en la vista
        }
      },
      { threshold: 0.5 } // Activar cuando el 50% de la sección es visible
    );

    if (sectionElement) {
      observer.observe(sectionElement); // Empezar a observar la sección
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement); // Dejar de observar cuando se desmonta
      }
    };
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row" ref={sectionRef}> {/* Referencia para el observer */}
      <ScrollAnimation
        animateIn={'fadeInLeft'}
        animateOnce={true}
        offset={100} // Se aplica cuando se ha desplazado una cierta distancia
        style={{width:"100%"}}
      >
        <div className="lg:w-full lg:h-full flex flex-col bg-secondary animate-slide-left">
          <div className="flex flex-row ">
            <div className='w-1/2 border-r-[1px] border-r-white flex justify-center items-center py-6 lg:py-10 2xl:py-16'>
              <img src={cama_baja} alt="Equipo 1" className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-cover border-2 border-white rounded-full" />
            </div>
            <div className='w-1/2 flex justify-center items-center py-6 lg:py-10 2xl:py-16'>
              <img src={bombonas} alt="Equipo 2" className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-cover border-2 border-white rounded-full" /> 
            </div>
          </div>

          <div className="flex justify-center border-t-[1px] border-t-white items-center py-6 lg:py-10 2xl:py-16">
            <img src={encapsulado} alt="Equipo 3" className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-cover border-2 border-white rounded-full" />
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn={'fadeInLeft'}
        animateOnce={true}
        offset={100} // Se aplica cuando se ha desplazado una cierta distancia
        style={{width:"100%"}}
      >
        <div className="lg:w-full lg:h-full flex flex-row mb-4 lg:mb-0 animate-slide-right">
          <div className="w-1/2 flex flex-col justify-between items-center text-center px-2 md:px-8 lg:px-14">
            <div className="h-2"></div>
            <div className="flex flex-col justify-center items-center mb-6 p-8">
              <span className="text-5xl font-bold mb-3 lg:text-6xl xl:text-7xl 2xl:text-8xl">
                +{Math.round(count)} {/* Aquí mostramos el número que se va incrementando */}
              </span>
              <span className="font-semibold lg:text-lg xl:text-xl 2xl:text-2xl">EQUIPOS OPERANDO</span>
            </div>
            <button className="bg-button text-white border-0 py-2 px-4 xl:py-4 xl:px-5 2xl:py-5 2xl:px-6 rounded-lg mb-6">
              <NavLink to="/equipos" className="text-white hover:underline">
                <span className='text-sm lg:text-lg xl:text-2xl 2xl:text-3xl'>Ver más</span>
              </NavLink>
            </button>
          </div>
          <div className="w-1/2 bg-secondary flex flex-col justify-center items-center text-center px-2 md:px-8 lg:px-14">
            <div className="text-white text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2 lg:mb-3 xl:mb-4 2xl:mb-5">EQUIPOS DE TRANSPORTE PESADO</div>
            <div className="text-white text-[15px] lg:text-lg 2xl:text-xl">Vehículos de alta capacidad y resistencia para el traslado seguro de cargas.</div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default EquiposOperando;
