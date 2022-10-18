import estilos from "./Produtos.module.css";
import Artigo from "../../Components/Artigo";
const Produtos = () => {
  return (
    <>
    <section className={estilos.produtos}>
    <h2 className={estilos.titulo}>Produtos</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi quis laboriosam necessitatibus quidem consequuntur maiores nobis dolorem numquam ut neque doloremque, veritatis corporis expedita quo reprehenderit? Porro dolores sunt facilis vel optio totam vero a eaque. Necessitatibus, doloremque placeat, labore autem quaerat exercitationem quasi aspernatur reiciendis aut eligendi inventore, soluta voluptatibus ullam quo veniam maiores eos expedita iure porro praesentium ea. Itaque ipsam labore vel laboriosam dolor ut quia optio ducimus vitae iste ab quidem, dicta tenetur. Quam, placeat minus facilis nulla odit sequi assumenda alias veritatis doloremque fugit animi quod, recusandae dicta ex quae vero voluptatem quia. Labore.</p>

       <Artigo />

    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem ut expedita error quasi qui adipisci, tenetur debitis beatae voluptas architecto et optio aspernatur nemo. Explicabo beatae natus obcaecati provident unde modi ipsa, cum nobis ex quam officia placeat fugit!</li>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem ut expedita error quasi qui adipisci, tenetur debitis beatae voluptas architecto et optio aspernatur nemo. Explicabo beatae natus obcaecati provident unde modi ipsa, cum nobis ex quam officia placeat fugit!</li>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem ut expedita error quasi qui adipisci, tenetur debitis beatae voluptas architecto et optio aspernatur nemo. Explicabo beatae natus obcaecati provident unde modi ipsa, cum nobis ex quam officia placeat fugit!</li>
    </section>


    </>
  )
}
export default Produtos