import { NavLink } from "react-router-dom";
import estilos from "../Menu.module.css";
const Menu = () => {
  return (
    <nav className={estilos.menu}>
      <ul className={estilos.ul}>
        <li className={estilos.li}>
          <NavLink to="/" className={`${estilos.li} ${estilos["li a:hover"]}`}>Home</NavLink>
        </li>
        
        <li className={estilos.li}><NavLink to="/produtos" className={`${estilos.li}  ${estilos["li a:hover"]}`}>Produtos</NavLink></li>

        <li className={estilos.li}>
          <NavLink to="/servicos" className={`${estilos.li} ${estilos["li a:hover"]}`}>Serviços</NavLink></li>
      </ul> 
    </nav>
  );
};
export default Menu;