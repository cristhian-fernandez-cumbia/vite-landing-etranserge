import { useEffect, useRef, useState } from 'react';
import bannerNosotros from './../assets/nosotros/nosotros01.png';
import bannerFondoNosotros from './../assets/nosotros/nosotros02.png';
import bannerVision from './../assets/nosotros/nosotros03.png';
import bannerMision from './../assets/nosotros/nosotros04.png';
import equipo from './../assets/nosotros/nosotros05.png';
import talento from './../assets/nosotros/nosotros06.png';
import valor from './../assets/nosotros/nosotros07.png';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

const Nosotros = () => {
    const [years, setYears] = useState<number>(0); // Contador de años
    const [projects, setProjects] = useState<number>(0); // Contador de proyectos
    const [startCounting, setStartCounting] = useState<boolean>(false); // Control de inicio de contadores
    const sectionRef = useRef<HTMLDivElement | null>(null); // Referencia a la sección
  
    useEffect(() => {
      let yearsInterval: ReturnType<typeof setInterval>, projectsInterval: ReturnType<typeof setInterval>;
  
      if (startCounting) {
        const yearsTarget = 100;
        const yearsDuration = 2000;
        const yearsIncrement = yearsTarget / (yearsDuration / 50);
        yearsInterval = setInterval(() => {
          setYears(prev => {
            if (prev < yearsTarget) {
              return Math.min(prev + yearsIncrement, yearsTarget);
            } else {
              clearInterval(yearsInterval);
              return yearsTarget;
            }
          });
        }, 50);
  
  
        const projectsTarget = 1500;
        const projectsDuration = 2000;
        const projectsIncrement = projectsTarget / (projectsDuration / 50);
        projectsInterval = setInterval(() => {
          setProjects(prev => {
            if (prev < projectsTarget) {
              return Math.min(prev + projectsIncrement, projectsTarget);
            } else {
              clearInterval(projectsInterval);
              return projectsTarget;
            }
          });
        }, 50);
      }
  
      return () => {
        clearInterval(yearsInterval);
        clearInterval(projectsInterval);
      };
    }, [startCounting]);
  
    useEffect(() => {
      const sectionElement = sectionRef.current;
  
      // Crear un observer para detectar cuando la sección entra en la vista
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStartCounting(true); // Iniciar contadores cuando la sección es visible
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
    <div className="relative">
      <div>
        <img src={bannerNosotros} alt="bannerNosotros" className="h-32 w-full" />
      </div>

      <div className="text-center mt-8">
        <span className="text-3xl xl:text-5xl 2xl:text-6xl font-bold">Nosotros</span>
      </div>

      <div className="flex justify-center my-2 mb-10">
        <div className="w-24 h-0.5 bg-[#183156]"></div>
      </div>

      <div
        className="relative text-white py-20 text-center flex flex-row justify-center items-center"
        style={{
          backgroundImage: `url(${bannerFondoNosotros})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.98',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <p className="relative z-10 w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]">
          ETRANSERGE S.R.L, constituida el 17 de enero de 2002, tiene como finalidad ofrecer la prestación de
          servicios inherentes y/o conexos tanto a la Construcción y Minería, brindando servicios específicos, con el
          propósito de reducir los costos e incrementar la productividad de sus clientes en la ejecución de trabajos
          de transporte de mineral y otros. ESTRANSERGE S.R.L cuenta con un equipo especializado de gran experiencia en
          la prestación de Servicios de Carguío y Movimiento de tierras; además del servicio de transporte, los cuales
          nos permite ofrecer un servicio de calidad. ESTRANSERGE S.R.L opera de acuerdo a la política establecida por
          el Directorio, bajo la dirección de su Gerente General. ESTRANSERGE S.R.L opera de acuerdo a la política
          establecida por el Directorio, bajo la dirección de su Gerente General.
        </p>
      </div>

      <div
        ref={sectionRef} // Asignar referencia a la sección
        className="flex py-16 lg:py-24 text-[#6BAEC3] text-shadow flex-wrap flex-col md:flex-row"
      >
        <div className="md:w-1/2 flex flex-col justify-center items-center mb-6">
          <span className="text-5xl font-semibold lg:text-6xl xl:text-7xl 2xl:text-8xl">
            +{Math.round(years)} {/* Años de experiencia */}
          </span>
          <span className="text-[18px] lg:text-lg 2xl:text-xl">Colaboradores actualmente</span>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center mb-6">
          <span className="text-5xl font-semibold lg:text-6xl xl:text-7xl 2xl:text-8xl">
            +{Math.round(projects)} 
          </span>
          <span className="text-[18px] lg:text-xl">Colaboradores desde nuestros inicios</span>
        </div>
      </div>

      <div className='relative flex justify-center flex-col items-center'>
        <img src={bannerVision} alt="bannerVision" className=" w-full" />
        <div className='relative md:absolute md:-bottom-20 flex flex-col w-96 md:right-10 items-center'>
          <span className='text-2xl lg:text-4xl font-extrabold mb-5'>VISIÓN</span>
          <span className='text-center text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]'>Alcanzar un desempeño superior y sustentable en el mediano y largo plazo, a través del valor aportado al cliente en los servicios que entrega, con el equipo de calidad y experiencia en el entorno de la construcción.</span>
        </div>
      </div>
      <div className='h-6 md:h-32 w-full'></div>
      <div className='relative flex justify-center flex-col items-center'>
        <div className='relative md:absolute md:-top-24 flex flex-col w-96 md:left-10 items-center'>
          <span className='text-2xl lg:text-4xl font-extrabold mb-5'>MISIÓN</span>
          <span className='text-center text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]'>Contribuir al desarrollo económico y social del país, desarrollando su actividad con calidad, seguridad y cuidado del medio ambiente, buscando la satisfacción del cliente y de sus proveedores.</span>
        </div>
        <img src={bannerMision} alt="bannerMision" className=" w-full" />
      </div>

      <div className='mt-12'>
        <ScrollAnimation
          animateIn={'fadeInLeft'}
          animateOnce={true}
          offset={100} // Se aplica cuando se ha desplazado una cierta distancia
          style={{ width: "100%" }}
        >
          <div className='flex flex-col-reverse md:flex-row'>
            <div className='w-full md:w-5/8'>
              <img src={equipo} alt="bannerNosotros" className="h-64 w-full" />
            </div>
            <div className='w-full md:w-3/8 flex flex-col items-center justify-center bg-secondary text-white py-6 md:py-0'>
              <span className='text-2xl font-extrabold mb-2 md:mb-6'>EQUIPO</span>
              <span className='w-60 text-center text-[14px]'>En ESTRANSERGE S.R.L. Apostamos por el talento como diferenciación. </span>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn={'fadeInRight'}
          animateOnce={true}
          offset={100} // Se aplica cuando se ha desplazado una cierta distancia
          style={{ width: "100%" }}
        >  
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-6/12 flex flex-col items-center justify-center bg-footer text-white py-6 md:py-0'>
              <span className='text-2xl font-extrabold mb-2 md:mb-6'>TALENTO</span>
              <span className='w-80 text-center text-[14px]'>Nuestro equipo está compuesto por proactivos, diseñadores e ingenieros civiles que se dedican a generar las herramientas necesarias para optimizar las soluciones y ofrecer a nuestros clientes trabajo eficiente y responsable. </span>
            </div>
            <div className='w-full md:w-6/12'>
              <img src={talento} alt="talento etranserge" className="h-64 w-full" />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn={'fadeInLeft'}
          animateOnce={true}
          offset={100} // Se aplica cuando se ha desplazado una cierta distancia
          style={{ width: "100%" }}
        >
          <div className='flex flex-col-reverse md:flex-row'>
            <div className='w-full md:w-5/8'>
              <img src={valor} alt="valor etranserge" className="h-64 w-full" />
            </div>
            <div className='w-full md:w-3/8 flex flex-col items-center justify-center bg-secondary text-white py-6 md:py-0'>
              <span className='text-2xl font-extrabold mb-2 md:mb-6'>VALOR</span>
              <span className='w-60 text-center text-[14px]'>Esto significa que abarcamos todo el proceso para el desarrollo de su proyecto en obra. </span>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className='my-12 flex flex-row justify-center text-[24px]'>
        <div className='w-80 md:w-96 lg:w-[450px] xl:w-[600px] flex flex-col items-end text-[24px]'>
          <h3 className='comentario text-[14px] md:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]'>
            "En ETRANSERGE S.R.L., nuestro mayor activo son las personas que conforman nuestro equipo, cuyo esfuerzo, dedicación y profesionalismo hacen posible el éxito de cada proyecto."
          </h3>
          <span className='comentario'>-Carlos Aguero</span>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;