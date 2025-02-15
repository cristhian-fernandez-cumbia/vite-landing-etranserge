import { useState, useEffect, useRef } from 'react';

const CantidadExperiencia = () => {
  const [years, setYears] = useState<number>(0); // Contador de años
  const [tons, setTons] = useState<number>(0); // Contador de toneladas
  const [projects, setProjects] = useState<number>(0); // Contador de proyectos
  const [startCounting, setStartCounting] = useState<boolean>(false); // Control de inicio de contadores
  const sectionRef = useRef<HTMLDivElement | null>(null); // Referencia a la sección

  useEffect(() => {
    let yearsInterval: ReturnType<typeof setInterval>, tonsInterval: ReturnType<typeof setInterval>, projectsInterval: ReturnType<typeof setInterval>;

    if (startCounting) {
      const yearsTarget = 20;
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

      const tonsTarget = 1.5;
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

      const projectsTarget = 100;
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
    <div
      ref={sectionRef} // Asignar referencia a la sección
      className="flex py-16 lg:py-24 text-[#6BAEC3] text-shadow flex-wrap flex-col md:flex-row"
    >
      <div className="md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center mb-6">
        <span className="text-5xl font-semibold lg:text-6xl xl:text-7xl 2xl:text-8xl">
          +{Math.round(years)} {/* Años de experiencia */}
        </span>
        <span className="text-[18px] lg:text-lg 2xl:text-xl">Años de experiencia en transportes</span>
      </div>
      <div className="md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center mb-6">
        <span className="text-5xl font-semibold lg:text-6xl xl:text-7xl 2xl:text-8xl">
          {tons.toFixed(1)} MM {/* Toneladas de mineral transportado */}
        </span>
        <span className="text-[18px]">Tn de mineral transportado</span>
      </div>
      <div className="md:w-full lg:w-1/3 flex flex-col justify-center items-center mb-6">
        <span className="text-5xl font-semibold lg:text-6xl xl:text-7xl 2xl:text-8xl">
          +{Math.round(projects)} 
        </span>
        <span className="text-[18px] lg:text-xl">Proyectos finalizados con éxito</span>
      </div>
    </div>
  );
};

export default CantidadExperiencia;