import { useState, createContext } from "react";
import TelaCadastroProduto from "./componentes/Telas/TelaCadastroProduto";
import TelaCadastroCategoria from "./componentes/Telas/TelaCadastroCategoria";
import TelaMenu from "./componentes/Telas/TelaMenu";
import Tela404 from "./componentes/Telas/Tela404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelalLogin from "./componentes/Telas/TelaLogin";

export const ContextoUsuario = createContext();
function App() {
  const [usuario, setUsuario] = useState({
    "usuario":"",
    "logado":false
  });

  if(!usuario.logado){
    return(
      <ContextoUsuario.Provider value={{usuario,setUsuario}}>
        <TelalLogin/>
      </ContextoUsuario.Provider>
    );
  }
  else
  {
    return (
      <div className="App">
        <ContextoUsuario.Provider value={{usuario, setUsuario}}>
        <BrowserRouter>
          { //A ordem das rotas é importante 
          }
          <Routes>
            <Route path="/produto" element={<TelaCadastroProduto />} />
            <Route path="/categoria" element={<TelaCadastroCategoria />} />
            <Route path="/login" element={<TelalLogin/>} />
            <Route path="/" element={<TelaMenu />} />
            <Route path="*" element={<Tela404 />} />
          </Routes>
        </BrowserRouter>
        </ContextoUsuario.Provider>
      </div>
    );
  }
  } 

export default App;
