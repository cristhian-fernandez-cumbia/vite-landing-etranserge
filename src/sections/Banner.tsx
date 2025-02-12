import banner from './../assets/banner/banner_etranserge.jpeg';

const Banner = () => {
  return (
    <div 
      className="relative w-full h-96 bg-cover bg-center py-60"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>

      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h2 className="text-4xl font-semibold">Soluciones</h2>
        <h2 className="text-4xl font-semibold"> innovadoras para</h2>
        <h3 className="text-5xl font-semibold mt-2 text-orange-500">EMPRESAS MINERAS</h3>
        <div className="mt-2 text-lg font-bold flex gap-4">
          <p>EFICIENCIA</p>
          <p>PRODUCTIVIDAD</p>
          <p>CUMPLIMIENTO</p>
          <p>SEGURIDAD</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;