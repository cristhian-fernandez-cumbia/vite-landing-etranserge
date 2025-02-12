import Banner from "../sections/Banner";
import CantidadExperiencia from "../sections/CantidadExperiencia";
import Caracteristicas from "../sections/Caracteristicas";
import Clientes from "../sections/Clientes";
import EquiposCargio from "../sections/EquiposCargio";
import EquiposOperando from "../sections/EquiposOperando";

export default function Inicio() {
  return (
    <div>
      <Banner />
      <Clientes />
      <EquiposCargio />
      <CantidadExperiencia />
      <EquiposOperando />
      <Caracteristicas />
    </div>
  )
}