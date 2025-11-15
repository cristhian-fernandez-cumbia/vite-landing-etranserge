import { useState } from 'react';
import bannerContactanos from './../assets/contactanos/banner-top-contactanos.png';
import bannerFormulario from './../assets/contactanos/banner-formulario.jpeg';
import mail from './../assets/contactanos/icon-mail.png';
import phone from './../assets/contactanos/icon-phone.png';
import place from './../assets/contactanos/icon-place.png';

const Contactanos = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    celular: '',
    email: '',
    asunto: '',
  });

  const [errors, setErrors] = useState({
    nombre: false,
    apellidos: false,
    celular: false,
    email: false,
    asunto: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = {
      nombre: !formData.nombre,
      apellidos: !formData.apellidos,
      celular: !formData.celular,
      email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
      asunto: !formData.asunto,
    };

    setErrors(formErrors);

    if (Object.values(formErrors).every((error) => !error)) {
      console.log(formData);
    }
  };

  return (
    <div>
      <div>
        <img src={bannerContactanos} alt="banner-top-contactanos" className='h-32 w-full' />
      </div>
      <div className='flex flex-col md:flex-row pt-14 pb-10 justify-center gap-8 md:gap-0'>
  <div className='flex flex-col md:flex-row pt-10 pb-10 justify-center gap-8 md:gap-0 md:divide-x md:divide-black'>
    <div className='w-full md:w-1/3 text-[#183156] justify-center flex flex-row'>
      <div className='flex flex-row px-8 justify-center items-center gap-3'>
        <img src={phone} alt="telefono contactanos" className='h-12' />
        <div className='flex flex-col text-[16px]'>
          <h5 className='font-extrabold'>¡Llámanos!</h5>
          <span className='font-medium'>362-9523</span>
          <span className='font-medium'>345-9441</span>
          <span className='font-medium'>989-446-759</span>
        </div>
      </div>
    </div>
    
    <div className='w-full md:w-1/3 text-[#183156] justify-center flex flex-row'>
      <div className='flex flex-row px-8 justify-center items-center gap-3'>
        <img src={mail} alt="telefono contactanos" className='h-12' />
        <div className='flex flex-col text-[16px]'>
          <h5 className='font-extrabold'>¡Escríbanos!</h5>
          <span className='font-medium'>administracion@etranserge.com</span>
        </div>
      </div>
    </div>
    
    <div className='w-full md:w-1/3 text-[#183156] justify-center flex flex-row'>
      <div className='flex flex-row px-8 justify-center items-center gap-3'>
        <img src={place} alt="telefono contactanos" className='h-12' />
        <div className='flex flex-col text-[16px]'>
          <h5 className='font-extrabold'>Oficina Central</h5>
          <span className='font-medium text-center'>Jr. Los Álamos N°309 Urb. Los Ficus - Santa Anita - Lima</span>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className='bg-cover bg-center h-auto md:h-[600px] py-8 px-10 md:px-0 md:py-0' style={{ backgroundImage: `url(${bannerFormulario})` }}>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center h-full'>
          <form onSubmit={handleSubmit} className='w-full md:w-6/10 bg-formulario p-8 rounded-lg mx-12'>
            <div className='flex flex-row gap-4'>
              <div className='mb-4 w-1/2'>
                <label className='block text-white mb-2' htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full p-2 border ${errors.nombre ? 'border-[#183156]' : 'border-gray-300'} rounded-md`}
                  placeholder="Ingrese su nombre"
                />
                {errors.nombre && <p className="text-[#183156] text-sm">Este campo es obligatorio</p>}
              </div>

              <div className='mb-4 w-1/2'>
                <label className='block text-white mb-2' htmlFor="apellidos">Apellidos</label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  className={`w-full p-2 border ${errors.apellidos ? 'border-[#183156]' : 'border-gray-300'} rounded-md`}
                  placeholder="Ingrese sus apellidos"
                />
                {errors.apellidos && <p className="text-[#183156] text-sm">Este campo es obligatorio</p>}
              </div>
            </div>

            <div className='flex flex-row gap-4'>
              <div className='mb-4 w-1/2'>
                <label className='block text-white mb-2' htmlFor="celular">Celular</label>
                <input
                  type="text"
                  id="celular"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  className={`w-full p-2 border ${errors.celular ? 'border-[#183156]' : 'border-gray-300'} rounded-md`}
                  placeholder="Ingrese su celular"
                />
                {errors.celular && <p className="text-[#183156] text-sm">Este campo es obligatorio</p>}
              </div>

              <div className='mb-4 w-1/2'>
                <label className='block text-white mb-2' htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border ${errors.email ? 'border-[#183156]' : 'border-gray-300'} rounded-md`}
                  placeholder="Ingrese su email"
                />
                {errors.email && <p className="text-[#183156] text-sm">Por favor ingrese un correo válido</p>}
              </div>
            </div>
            

            <div className='mb-4'>
              <label className='block text-white mb-2' htmlFor="asunto">Asunto</label>
              <textarea
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.asunto ? 'border-[#183156]' : 'border-gray-300'} rounded-md`}
                placeholder="Escriba su mensaje"
                rows={5}
              />
              {errors.asunto && <p className="text-[#183156] text-sm">Este campo es obligatorio</p>}
            </div>

            <button
              type="submit"
              className='w-full py-2 bg-button-formulario text-white font-semibold rounded-md'
            >
              Enviar
            </button>
          </form>

          <div className='w-full md:w-4/10 text-white flex flex-col justify-center items-center px-6 text-center mb-5 md:mb-0'>
            <h2 className='text-3xl font-bold mb-4'>¡Envíanos un mensaje!</h2>
            <p className='text-lg text-center'>
              Estaremos atentos para brindarte mayor información.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;