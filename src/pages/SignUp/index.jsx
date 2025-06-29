import { api } from '../../services/api';
import { useState } from 'react';

import { Container, Form, Background } from './styles';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastro com sucesso!");
                navigate("/");
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message);
                }
                else{
                    alert("Não foi possível realizar o cadastro");
                }
            });
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input icon={FiUser} type="text" placeholder="Nome" onChange={e => setName(e.target.value)} />
                <Input icon={FiMail} type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                <Input icon={FiLock} type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
                
                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to="/">
                    <FiArrowLeft size={20}/> 
                    <p>Voltar para o login</p>
                </Link>

            </Form>
            <Background />
        </Container>
    );
}