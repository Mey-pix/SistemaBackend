import { Alert } from "react-bootstrap";
import FormCadastroCategoria from "./Formularios/FormCadCategoria"
import TabelaCategorias from "./Tabelas/TabelaCategorias"
import { categorias } from "../../dados/mockCategoria";
import Pagina from "../layouts/Pagina";
import { useState } from "react";

export default function TelaCadastroCategoria(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeCategorias, setListaDeCategorias] = useState(categorias);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState({
        id: "",
        nome: "",
        tipo: ""
    });

    return (
        <div>
            <Pagina>
                <Alert className='text-center' variant='secondary' style={{ fontSize: "42px" }}>
                    <h2>Cadastro de Categorias</h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaCategorias listaDeCategorias={listaDeCategorias}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            categoriaSelecionada={categoriaSelecionada}
                            setCategoriaSelecionada={setCategoriaSelecionada}
                            setListaDeCategorias={setListaDeCategorias}
                            setExibirTabela={setExibirTabela} /> :

                        <FormCadastroCategoria listaDeCategorias={listaDeCategorias}
                            categoriaSelecionada={categoriaSelecionada}
                            setCategoriaSelecionada={setCategoriaSelecionada}
                            modoEdicao={modoEdicao}
                            setModoEdicao={setModoEdicao}
                            setListaDeCategorias={setListaDeCategorias}
                            setExibirTabela={setExibirTabela} />
                }
            </Pagina>
        </div>
    );
}