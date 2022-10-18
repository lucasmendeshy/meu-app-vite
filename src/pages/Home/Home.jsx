import Artigo from "../../Components/Artigo";
import estilos from "./Home.module.css"
const Home = () => {
    return (
      <>
        <main className={estilos.conteudo}>
          <section>
            <h2 className={estilos.titulo}>Home</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae illo neque exercitationem aspernatur nobis, quasi sit hic praesentium dolore? Quam vel esse porro laudantium minus nihil dolore libero ut labore optio quidem voluptatum ducimus eum commodi tempore explicabo similique reprehenderit dolorum, quod laboriosam molestiae nostrum. Sed natus dolore maxime quia, tempora sapiente impedit, nesciunt esse est dolores quos voluptatum quis eius itaque? Nisi, nemo nihil vel quasi recusandae consequuntur asperiores magni sit iusto a! Quo quibusdam illum quos porro error culpa veniam repellendus minima expedita magnam soluta, fugiat reprehenderit iusto neque numquam in ullam quod cum voluptate eius eos!
            </p>
          </section>
  
          <Artigo />
          <Artigo />
          <Artigo />
        </main>
      </>
    );
  };
  export default Home;