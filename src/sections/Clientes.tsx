import logo01 from './../assets/clientes/logo01-clientes.png';
import logo02 from './../assets/clientes/logo02-clientes.png';
import logo03 from './../assets/clientes/logo03-clientes.png';
import logo04 from './../assets/clientes/logo04-clientes.png';

const Clientes = () => {
  return (
    <div className="py-12">
      <div className="flex items-center justify-center mb-8">
        <div className="w-24 h-1 bg-blue-500"></div> 
        <h2 className="text-blue-500 text-3xl font-semibold mx-4">Ellos confían en NOSOTROS</h2>
        <div className="w-24 h-1 bg-blue-500"></div> 
      </div>

      <div className="overflow-hidden py-8">
        <div className="flex animate-marquee">
          <img src={logo01} alt="Logo 1" className="h-32 mx-12"/>
          <img src={logo02} alt="Logo 2" className="h-32 mx-12"/>
          <img src={logo03} alt="Logo 3" className="h-32 mx-12"/>
          <img src={logo04} alt="Logo 4" className="h-32 mx-12"/>
          {/* Repetimos las imágenes para crear un bucle continuo */}
          <img src={logo01} alt="Logo 1" className="h-32 mx-12"/>
          <img src={logo02} alt="Logo 2" className="h-32 mx-12"/>
          <img src={logo03} alt="Logo 3" className="h-32 mx-12"/>
          <img src={logo04} alt="Logo 4" className="h-32 mx-12"/>
        </div>
      </div>
    </div>
  );
};

export default Clientes;