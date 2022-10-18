import Menu from "../Menu/Menu";
import estilos from "./Cabecalho.module.css";
const Cabecalho = () => {
  return (
    <>
       <header>
         <h1 className={estilos.titulo}>
           Vite + React
         </h1>
         <Menu />
       </header>
    </>
  );
};
export default Cabecalho;
