import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useRef } from "react";
import {ContextoUsuario} from "../../App";

export default function TelalLogin(){
    const nomeUsuario= useRef();
    const senha = useRef();
    const{usuario,setUsuario} = useContext(ContextoUsuario);
    function manipularSubmissao()
    {
        const usuarioDigitado=nomeUsuario.current.value;
        const senhaDigitada= senha.current.value;
        if(usuarioDigitado==='admin' && senhaDigitada==='admin')
        {
            setUsuario({
                "usuario":usuarioDigitado,
                "logado": true
            })
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    return(
    function BasicExample() {
    return (
        <Form>
        <Form.Group className="wb-25 border p-2" controlId="email" onSubmit={manipularSubmissao}>
            <Form.Label>usuario</Form.Label>
            <Form.Control type="text" id="usuario" name="usuario" placeholder="Informe seu usuário" ref={nomeUsuario} />
            <Form.Text className="text-muted">
             Não compartilhe suas credenciais de acesso!
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" id="senha" name="senha" placeholder="senha" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            
        </Form.Group>
        <Button variant="primary" type="submit">
            Login
        </Button>
        </Form>
    );
    }
    )
}