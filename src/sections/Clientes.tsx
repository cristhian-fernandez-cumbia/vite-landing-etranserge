import logo01 from './../assets/clientes/logo01-clientes.png';
import logo02 from './../assets/clientes/logo02-clientes.png';
import logo03 from './../assets/clientes/logo03-clientes.png';
import logo04 from './../assets/clientes/logo04-clientes.png';

const Clientes = () => {
  return (
    <div className="py-12">
      <div className="flex items-center justify-center mb-8">
        <div className="w-24 h-1 bg-[#6BAEC3]"></div> 
        <h2 className="text-[#6BAEC3] text-2xl lg:text-3xl 2xl:text-4xl font-semibold mx-4">Ellos confían en NOSOTROS</h2>
        <div className="w-24 h-1 bg-[#6BAEC3]"></div> 
      </div>

      <div className="overflow-hidden py-8">
        <div className="flex animate-marquee">
          <img src={logo01} alt="Logo 1" className="h-32 lg:h-36 2xl:h-40 mx-12"/>
          <img src={logo02} alt="Logo 2" className="h-32 lg:h-36 2xl:h-40 mx-12"/>
          <img src={logo03} alt="Logo 3" className="h-32 lg:h-36 2xl:h-40 mx-12"/>
          <img src={logo04} alt="Logo 4" className="h-32 lg:h-36 2xl:h-40 mx-12"/>
          
          <img src={logo01} alt="Logo 1" className="h-32 lg:h-36 2xl:h-40 mx-12"/>
          <img src={logo02} alt="Logo 2" className="h-32 lg:h-36 2xl:h-40 mx-12"/>
          <img src={logo03} alt="Logo 3" className="h-32 lg:h-36 2xl:h-40 mx-12"/>
          <img src={logo04} alt="Logo 4" className="h-32 lg:h-36 2xl:h-40 mx-12"/>
        </div>
      </div>
    </div>
  );
};

export default Clientes;