import Artigo from "../../Components/Artigo";
import estilos from "./Servicos.module.css";
const Servicos = () => {
  return (
    <>
    <section className={estilos.servicos}>
    <h2 className={estilos.titulo}>Serviços</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta excepturi repellat voluptas consequuntur cumque nulla necessitatibus iusto aliquam officiis, nisi accusamus illum voluptatum dolores minima id animi vel quas. Dolorum nisi rerum quisquam eius minima laborum, vel dignissimos autem expedita cupiditate quaerat fugit quibusdam corporis illum eaque voluptatem aliquam! Inventore ea provident exercitationem suscipit in consequatur sapiente iste, temporibus eaque, nemo ipsam ipsum reprehenderit dolore rem nihil recusandae consectetur. Ipsa placeat excepturi quia harum autem minima repellendus perferendis dolorem expedita ratione incidunt odio, alias sapiente praesentium, labore doloremque mollitia cupiditate recusandae aperiam animi ullam accusamus blanditiis. Illo eveniet tempora quam.</p>

    <Artigo />

    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem ut expedita error quasi qui adipisci, tenetur debitis beatae voluptas architecto et optio aspernatur nemo. Explicabo beatae natus obcaecati provident unde modi ipsa, cum nobis ex quam officia placeat fugit!</li>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem ut expedita error quasi qui adipisci, tenetur debitis beatae voluptas architecto et optio aspernatur nemo. Explicabo beatae natus obcaecati provident unde modi ipsa, cum nobis ex quam officia placeat fugit!</li>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem ut expedita error quasi qui adipisci, tenetur debitis beatae voluptas architecto et optio aspernatur nemo. Explicabo beatae natus obcaecati provident unde modi ipsa, cum nobis ex quam officia placeat fugit!</li>
    </section>
    </>
  );
};
export default Servicos