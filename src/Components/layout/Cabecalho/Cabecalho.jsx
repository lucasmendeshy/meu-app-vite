import Menu from "../Menu/Menu";
import estilos from "./Cabecalho.module.css";
const Cabecalho = () => {
  return (
    <>
       <header className={estilos.texto}>
         <h1 class="titulo" >
           Vite + React
         </h1>
         <Menu />
       </header>
    </>
  );
};
export default Cabecalho;
