import Artigo from "../../Artigo";
import estilos from "./Conteudo.module.css";
const Conteudo = () => {
  return (
    <>
      <main>
        <section>
          <h2 className={estilos.subtitulo}>História da Paçoca</h2>
          <p>
            A paçoca servia como alimento dos garimpeiros que saíam para
            procurar diamantes às margens do rio Tibagi, no Paraná, e teve
            origem nos alforjes dos tropeiros e dos senhores das sesmarias dos
            Campos Gerais.
          </p>
        </section>

        <Artigo />
      </main>
    </>
  );
};
export default Conteudo;
