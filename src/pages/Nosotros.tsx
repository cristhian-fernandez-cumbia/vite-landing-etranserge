import bannerNosotros from './../assets/nosotros/nosotros01.png';
import bannerFondoNosotros from './../assets/nosotros/nosotros02.png';
import bannerVision from './../assets/nosotros/nosotros03.png';
import bannerMision from './../assets/nosotros/nosotros04.png';
import equipo from './../assets/nosotros/nosotros05.png';
import talento from './../assets/nosotros/nosotros06.png';
import valor from './../assets/nosotros/nosotros07.png';

const Nosotros = () => {
  return (
    <div className="relative">
      <div>
        <img src={bannerNosotros} alt="bannerNosotros" className="h-32 w-full" />
      </div>

      <div className="text-center mt-8">
        <span className="text-4xl font-bold">Nosotros</span>
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
        <p className="relative z-10 w-[450px] text-[15px]">
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

      <div className="flex py-16 text-blue-400 text-shadow">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <span className="text-4xl font-semibold">+100</span>
          <span className="text-[15px]">Colaboradores actualmente</span>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <span className="text-4xl font-semibold">+1500</span>
          <span className="text-[15px]">Colaboradores desde nuestros inicios</span>
        </div>
      </div>

      <div className='relative'>
        <img src={bannerVision} alt="bannerVision" className=" w-full" />
        <div className='absolute -bottom-20 flex flex-col w-96 right-10 items-center'>
          <span className='text-2xl font-extrabold mb-5'>VISIÓN</span>
          <span className='text-center text-[14px]'>Alcanzar un desempeño superior y sustentable en el mediano y largo plazo, a través del valor aportado al cliente en los servicios que entrega, con el equipo de calidad y experiencia en el entorno de la construcción.</span>
        </div>
      </div>
      <div className='h-32 w-full'></div>
      <div className='relative'>
        <div className='absolute -top-24 flex flex-col w-96 left-10 items-center'>
          <span className='text-2xl font-extrabold mb-5'>MISIÓN</span>
          <span className='text-center text-[14px]'>Contribuir al desarrollo económico y social del país, desarrollando su actividad con calidad, seguridad y cuidado del medio ambiente, buscando la satisfacción del cliente y de sus proveedores.</span>
        </div>
        <img src={bannerMision} alt="bannerMision" className=" w-full" />
      </div>

      <div className='mt-12'>
        <div className='flex flex-row'>
          <div className='w-5/8'>
            <img src={equipo} alt="bannerNosotros" className="h-64 w-full" />
          </div>
          <div className='w-3/8 flex flex-col items-center justify-center bg-secondary text-white'>
            <span className='text-2xl font-extrabold mb-6'>EQUIPO</span>
            <span className='w-60 text-center text-[14px]'>En ESTRANSERGE S.R.L. Apostamos por el talento como diferenciación. </span>
          </div>
        </div>
        
        <div className='flex flex-row'>
          <div className='w-6/12 flex flex-col items-center justify-center bg-footer text-white'>
            <span className='text-2xl font-extrabold mb-6'>TALENTO</span>
            <span className='w-80 text-center text-[14px]'>Nuestro equipo está compuesto por proactivos, diseñadores e ingenieros civiles que se dedican a generar las herramientas necesarias para optimizar las soluciones y ofrecer a nuestros clientes trabajo eficiente y responsable. </span>
          </div>
          <div className='w-6/12'>
            <img src={talento} alt="talento etranserge" className="h-64 w-full" />
          </div>
        </div>

        <div className='flex flex-row'>
          <div className='w-5/8'>
            <img src={valor} alt="valor etranserge" className="h-64 w-full" />
          </div>
          <div className='w-3/8 flex flex-col items-center justify-center bg-secondary text-white'>
            <span className='text-2xl font-extrabold mb-6'>VALOR</span>
            <span className='w-60 text-center text-[14px]'>Esto significa que abarcamos todo el proceso para el desarrollo de su proyecto en obra. </span>
          </div>
        </div>
      </div>

      <div className='my-12 flex flex-row justify-center'>
        <div className='w-96 flex flex-col items-end'>
          <h3 className='comentario'>
            "En ETRANSERGE S.R.L., nuestro mayor activo son las personas que conforman nuestro equipo, cuyo esfuerzo, dedicación y profesionalismo hacen posible el éxito de cada proyecto."
          </h3>
          <span className='comentario'>-Carlos Aguero</span>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;