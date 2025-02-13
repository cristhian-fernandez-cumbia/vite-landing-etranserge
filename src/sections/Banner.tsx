import banner from './../assets/banner/banner_etranserge.jpeg';

const Banner = () => {
  return (
    <div 
      className="relative w-full h-[500px] bg-cover bg-center py-60 overflow-hidden"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>

      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h2 className="text-3xl lg:text-4xl font-semibold">Soluciones</h2>
        <h2 className="text-3xl lg:text-4xl font-semibold"> innovadoras para</h2>
        <h3 className="text-3xl lg:text-5xl font-semibold mt-2 text-orange-500">EMPRESAS MINERAS</h3>
        <div className="mt-2 text-[15px] lg:text-lg font-bold flex gap-4">
          <div className='flex flex-col lg:flex-row lg:gap-5'>
            <p>EFICIENCIA</p>
            <p>PRODUCTIVIDAD</p>
          </div>
          <div className='flex flex-col lg:flex-row lg:gap-5'>
            <p>CUMPLIMIENTO</p>
            <p>SEGURIDAD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;