import { useEffect, useState } from 'react';
import banner from './../assets/banner/banner_etranserge.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Usamos useEffect para activar la visibilidad del banner cuando se monta el componente
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <ScrollAnimation
      animateIn={'fadeIn'}
      animateOnce={true}
      offset={100}
    >
      <div
        className={`relative w-full h-[500px] bg-cover bg-center py-60 overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          {/* Primer texto con animación */}
          <h2
            className={`text-3xl lg:text-4xl font-semibold animate-slide-left ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Soluciones
          </h2>
          {/* Segundo texto con animación */}
          <h2
            className={`text-3xl lg:text-4xl font-semibold animate-slide-left ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            innovadoras para
          </h2>
          {/* Tercer texto con animación */}
          <h3
            className={`text-3xl lg:text-5xl font-semibold mt-2 text-orange-500 animate-slide-left ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            EMPRESAS MINERAS
          </h3>

          {/* Nueva sección con los textos EFICIENCIA, PRODUCTIVIDAD, etc. */}
          <div
            className={`mt-2 text-[15px] lg:text-lg font-bold flex gap-4 animate-slide-left ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="flex flex-col lg:flex-row lg:gap-5">
              <p>EFICIENCIA</p>
              <p>PRODUCTIVIDAD</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-5">
              <p>CUMPLIMIENTO</p>
              <p>SEGURIDAD</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Banner;