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
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

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

  return (
    <div>
      <div className='flex flex-col py-12 px-10 lg:flex-row'>
        <div className='flex flex-col justify-center items-center mb-5 lg:w-1/2 lg:items-start'>
          <h1 className='text-3xl xl:text-4xl 2xl:text-5xl w-[300px] xl:w-[350px] 2xl:w-[450px] text-center font-extrabold text-secundario mb-2 lg:text-left'><span className='text-primario'>Programa de</span> Seguridad y Salud Ocupacional</h1>
          <p className='text-primario text-[15px] lg:text-[16px]  xl:text-[18px] 2xl:text-[20px] font-medium text-center lg:text-left'>En ESTRANSERGE S.R.L, estamos comprometidos en respetar y dar cumplimiento a su Política Empresarial, la misma que abarca los aspectos en materia de Calidad.</p>
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
    </div>
  )
}

export default Programas