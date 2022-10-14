import Menu from "../Menu/Menu";
import estilos from "./Cabecalho.module.css";
const Cabecalho = () => {
  return (
    <>
      <header
        style={{
          backgroundColor: "#f7f7f7",
          textAlign: "center",
        }}
      >
        <h1 className={estilos.titulo}>
          Criando um mini projeto utiizando Vite+React
        </h1>
        <Menu />
      </header>
    </>
  );
};
export default Cabecalho;
