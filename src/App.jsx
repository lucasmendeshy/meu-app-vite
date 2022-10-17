import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cabecalho from "./Components/layout/Cabecalho/Cabecalho";
import Rodape from "./Components/layout/Rodape/Rodape";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
import "./App.css";

const App = () => {
  return (
    <>
     <BrowserRouter>
       <Cabecalho />

       <Switch>

        <Route exact path="/"> 
         <Home />
        </Route>

        <Route  path="/produtos">
         <Produtos />
        </Route>

        <Route path="/servicos">
         <Servicos />
        </Route>

       </Switch>

         <Rodape />
     </BrowserRouter>  
    </>
  );
};

export default App;
