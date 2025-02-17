import seguridad from './../assets/programas/seguridad.png'
import fondo_seccion from './../assets/programas/fondo_seccion.jpeg'
import icono_persona from './../assets/programas/icono_persona.png'
import icono_empresa from './../assets/programas/icono_empresa.png'
import icono_seguridad from './../assets/programas/icono_seguridad.png'
import icono_planeta from './../assets/programas/icono_planeta.png'
import icono_lista from './../assets/programas/icono_lista.png'
import icono_foco from './../assets/programas/icono_foco.png'
import icono_global from './../assets/programas/icono_global.png'
import icono_ajuste from './../assets/programas/icono_ajuste.png'
import icono_lupa from './../assets/programas/icono_lupa.png'
import bienestar_social from './../assets/programas/bienestar_social.png'
import calidad_servicio from './../assets/programas/calidad_servicio.png'
import proteccion_recursos from './../assets/programas/proteccion-recursos.png'
import reconocimiento_promocion from './../assets/programas/reconocimiento_promocion.png'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';
import { useEffect, useRef, useState } from 'react'

const Programas = () => {

  const items = [
    { icon: icono_persona, description: "Tener liderazgo activo comprometidos en los aspectos de Medio Ambiente, Salud y Seguridad de parte de todos nuestros trabajadores." },
    { icon: icono_empresa, description: "Implementar las mejores prácticas en el sistema de Gestión en Medio Ambiente, Salud y Seguridad." },
    { icon: icono_seguridad, description: "Identificar, evaluar y controlar todos los peligros potenciales e impactos ambientales." },
    { icon: icono_planeta, description: "Siempre mantener vivos nuestros valores en Medio Ambiente, Salud y Seguridad, en el lugar de trabajo, en las comunidades que estamos insertos y en nuestra vida fuera del trabajo." },
    { icon: icono_lista, description: "Desarrollar planes formales de Medio Ambiente, Salud y Seguridad para cumplir nuestros objetivos y metas." },
    { icon: icono_foco, description: "Asegurar que cada persona entienda y cumpla sus responsabilidades en Medio Ambiente, Salud y Seguridad." },
    { icon: icono_global, description: "Establecer canales de comunicación claros y abiertos con nuestros trabajadores, contratistas, clientes y otras terceras partes." },
    { icon: icono_ajuste, description: "Aplicar un nivel equivalente de requerimientos en Medio Ambiente, Salud y Seguridad a nuestros contratistas, visitantes y proveedores." },
    { icon: icono_lupa, description: "Asegurar que nuestras actividades de Investigación y Desarrollo formalmente consideren todas las oportunidades para minimizar cualquier riesgo de Medio Ambiente, Salud,etc. " },
  ];

      const [years, setYears] = useState<number>(0); // Contador de años
      const [tons, setTons] = useState<number>(0);
      const [projects, setProjects] = useState<number>(0); // Contador de proyectos
      const [startCounting, setStartCounting] = useState<boolean>(false); // Control de inicio de contadores
      const sectionRef = useRef<HTMLDivElement | null>(null); // Referencia a la sección
    
      useEffect(() => {
        let yearsInterval: ReturnType<typeof setInterval>, tonsInterval: ReturnType<typeof setInterval>, projectsInterval: ReturnType<typeof setInterval>;
    
        if (startCounting) {
          const yearsTarget = 200;
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
    
          const tonsTarget = 500;
          const tonsDuration = 2000;
          const tonsIncrement = tonsTarget / (tonsDuration / 50);
          tonsInterval = setInterval(() => {
            setTons(prev => {
              if (prev < tonsTarget) {
                return Math.min(prev + tonsIncrement, tonsTarget);
              } else {
                clearInterval(tonsInterval);
                return tonsTarget;
              }
            });
          }, 50);
    
          const projectsTarget = 15;
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
          clearInterval(tonsInterval);
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
    <div>
      <div className='flex flex-col py-12 px-10 lg:flex-row'>
        <div className='flex flex-col justify-center items-center mb-5 lg:w-1/2 lg:items-start'>
          <h1 className='text-3xl xl:text-4xl 2xl:text-5xl w-[300px] xl:w-[350px] 2xl:w-[450px] text-center font-extrabold text-secundario mb-2 lg:text-left'><span className='text-primario'>Programa de</span> Seguridad y Salud Ocupacional</h1>
          <p className='text-primario text-[15px] lg:text-[16px]  xl:text-[18px] 2xl:text-[20px] font-medium text-center lg:text-left'>En ETRANSERGE S.R.L, estamos comprometidos en respetar y dar cumplimiento a su Política Empresarial, la misma que abarca los aspectos en materia de Calidad.</p>
        </div>
        <div className='flex justify-center items-center lg:w-1/2'>
          <img src={seguridad} alt="Seguridad y Salud Ocupacional" className="w-full object-cover object-center max-w-lg" />
        </div>
      </div>

      <div className='bg-cover bg-center' style={{ backgroundImage: `url(${fondo_seccion})` }}>
        <div className='py-12 xl:py-16 2xl:py-20 px-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-14 2xl:gap-16 justify-items-center'>
            {items.map((item, index) => (
              <ScrollAnimation
                animateIn={'zoomIn'}
                animateOnce={true}
                offset={100}
                key={index}
              >
                <div key={index} className='bg-[#7AB10A] p-6 rounded-lg shadow-lg max-w-[450px] flex flex-col justify-center h-full' >
                  <div className='flex justify-center mb-2'>
                    <img src={item.icon} alt="Icono" className="w-16 h-16 object-contain xl:w-20 xl:h-20" />
                  </div>
                  <p className='text-white text-center text-[14px] lg:text-[15px] xl:text-[16px]'>{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
      
      <ScrollAnimation
          animateIn={'fadeInRight'}
          animateOnce={true}
          offset={100}
          style={{ width: "100%" }}
        >
        <div className='flex flex-col items-center md:flex-row my-8 text-white xl:mt-16'>
          <div className='hidden md:block md:w-[20%]'></div>
          <div className='flex flex-col md:flex-row w-[80%] bg-secondary py-8 px-6 xl:px-12 2xl:px-16 items-center'>
            <div className='md:w-[70%] flex-col'>
              <h1 className='text-2xl xl:text-3xl 2xl:text-4xl text-center mb-3 font-bold w-[70%] m-auto'>Programa de <span className='text-secundario'>Protección de los Recursos</span></h1>
              <p className='text-center mb-5 font-normal text-[14px] pr-6 lg:text-[16px] xl:text-[18px] 2xl:text-[20px] lg:text-left'>El programa de seguridad se considera como una función de la administración, al igual que la producción, la calidad los costos operacionales, entre otras razones por que la seguridad no es más que el resultado de un trabajo bien ordenado y por qué las causas de los accidentes son las mismas que alteran la eficiencia operacional en cada uno de los aspectos, de tal forma, resulta indispensable que el liderazgo ejercido por nuestra supervisión en el desarrollo del Programa de seguridad sea evidente y suficiente en cantidad y calidad para crear un clima de aceptación y participación de todos los trabajadores.</p>
            </div>
            <div className='md:w-[30%]'>
              <img src={proteccion_recursos} alt="Icono" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn={'fadeInLeft'}
        animateOnce={true}
        offset={100}
        style={{ width: "100%" }}
        >
        <div className='flex flex-col items-center md:flex-row my-8 text-white'>
          <div className='flex flex-col md:flex-row w-[80%] bg-footer py-8 px-6 xl:px-12 2xl:px-16 items-center'>
            <div className='md:w-[30%]'>
              <img src={reconocimiento_promocion} alt="Icono" className="w-full h-full object-contain" />
            </div>
            <div className='md:w-[70%] flex-col'>
              <h1 className='text-2xl xl:text-3xl 2xl:text-4xl text-center mb-3 font-bold w-[70%] m-auto'>Programa de <span className='text-primario'>Reconocimiento y Promoción</span></h1>
              <p className='text-center mb-5 font-normal text-[14px] pl-6 lg:text-[16px] xl:text-[18px] 2xl:text-[20px] lg:text-left'>Definir y mantener un programa de promoción y reconocimiento de personal.</p>
              <p className='text-center mb-5 font-normal text-[14px] pl-6 lg:text-[16px] xl:text-[18px] 2xl:text-[20px] lg:text-left'>Promover reconocimiento por áreas destacadas.</p>
              <p className='text-center mb-5 font-normal text-[14px] pl-6 lg:text-[16px] xl:text-[18px] 2xl:text-[20px] lg:text-left'>Uso y promoción de estadísticas.</p>
            </div>
          </div>
          <div className='hidden md:block md:w-[20%]'></div>
        </div>
      </ScrollAnimation>

      <div
        ref={sectionRef} 
        className="flex py-16 lg:py-16 text-[#6BAEC3] text-shadow flex-wrap flex-col md:flex-row"
      >
        <div className="md:w-1/2 flex flex-col justify-center items-center mb-6">
          <span className="text-5xl font-semibold lg:text-6xl xl:text-7xl 2xl:text-8xl">
            +{Math.round(years)}
          </span>
          <span className="text-[18px] lg:text-lg 2xl:text-xl">Colaboradores reconocidos</span>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center mb-6">
          <span className="text-5xl font-semibold lg:text-6xl xl:text-7xl 2xl:text-8xl">
            +{Math.round(projects)} 
          </span>
          <span className="text-[18px] lg:text-xl">Reconocimientos al año</span>
        </div>
      </div>

      <ScrollAnimation
        animateIn={'fadeInRight'}
        animateOnce={true}
        offset={100}
        style={{ width: "100%" }}
      >
        <div className='flex flex-col items-center md:flex-row my-8 text-white'>
          <div className='hidden md:block md:w-[20%]'></div>
          <div className='flex flex-col md:flex-row w-[80%] bg-secondary py-8 px-6 xl:px-12 2xl:px-16 items-center'>
            <div className='md:w-[70%] flex-col'>
              <h1 className='text-2xl xl:text-3xl 2xl:text-4xl text-center mb-3 font-bold w-[70%] m-auto'>Programa de <span className='text-secundario'>Bienestar Social</span></h1>
              <p className='text-center mb-5 font-normal text-[14px] pr-6 lg:text-[16px] xl:text-[18px] 2xl:text-[20px] lg:text-left'>Su objetivo principal es contribuir a la labor social de la empresa, disminuyendo los problemas en asuntos laborales, que puedan afectar el normal desempeño del trabajador. Se continuará con la labor asistencial a los trabajadores, tomando en cuenta la problemática socio económica del trabajador. Se seguirá brindando servicios de atención personalizada al trabajador que lo solicite, así como a sus familiares.</p>
            </div>
            <div className='md:w-[30%]'>
              <img src={bienestar_social} alt="Icono" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <div
        ref={sectionRef} // Asignar referencia a la sección
        className="flex py-16 lg:py-16 text-[#6BAEC3] text-shadow md:flex-row justify-center"
      >
        <div className="flex flex-col justify-center items-center mb-6">
          <span className="text-5xl font-semibold lg:text-6xl xl:text-7xl 2xl:text-8xl">
            +{Math.round(tons)} 
          </span>
          <span className="text-[18px]">Familias beneficiadas</span>
        </div>

      </div>

      <ScrollAnimation
        animateIn={'fadeInLeft'}
        animateOnce={true}
        offset={100}
        style={{ width: "100%" }}
        >
        <div className='flex flex-col items-center md:flex-row my-8 text-white xl:mb-16'>
          <div className='flex flex-col md:flex-row w-[80%] bg-footer py-8 px-6 xl:px-12 2xl:px-16 items-center'>
            <div className='md:w-[30%]'>
              <img src={calidad_servicio} alt="Icono" className="w-full h-full object-contain" />
            </div>
            <div className='md:w-[70%] flex-col'>
              <h1 className='text-2xl xl:text-3xl 2xl:text-4xl text-center mb-3 font-bold w-[70%] m-auto'>Programa de <span className='text-primario'>dispuesto a sus necesidades</span></h1>
              <p className='text-center mb-5 font-normal text-[14px] pl-6 lg:text-[16px] xl:text-[18px] 2xl:text-[20px] lg:text-left'>Es debido a todos y cada uno de los clientes que depositan su confianza en nosotros que logramos consolidar nuestro camino y afrontar nuevos desafíos que nos alientan a seguir creciendo. </p>
              <p className='text-center mb-5 font-normal text-[14px] pl-6 lg:text-[16px] xl:text-[18px] 2xl:text-[20px] lg:text-left'>Gracias a ellos renovamos a diario el compromiso de trabajar arduamente en la calidad de nuestros servicios, ofreciendo las mejores soluciones a las crecientes demandas del mercado.</p>
              <p className='text-center mb-5 font-normal text-[14px] pl-6 lg:text-[16px] xl:text-[18px] 2xl:text-[20px] lg:text-left'>Estamos orgullosos de todos los clientes que nos han elegido, confiando en la experiencia y trayectoria de nuestra empresa, y que nos impulsan a esforzamos cada vez más para brindar un servicio de mejor calidad y mayor confiabilidad.</p>
            </div>
          </div>
          <div className='hidden md:block md:w-[20%]'></div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Programas