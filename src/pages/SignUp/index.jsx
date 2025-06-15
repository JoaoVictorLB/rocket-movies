import { Container, Form, Background } from './styles';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input icon={FiUser} type="text" placeholder="Nome" />
                <Input icon={FiMail} type="text" placeholder="E-mail" />
                <Input icon={FiLock} type="password" placeholder="Senha" />
                
                <Button title="Cadastrar"/>

                <Link to="/">
                    <FiArrowLeft size={20}/> 
                    <p>Voltar para o login</p>
                </Link>

            </Form>
            <Background />
        </Container>
    );
}