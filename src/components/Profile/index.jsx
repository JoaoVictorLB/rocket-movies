import { Link } from 'react-router-dom';
import { Container } from './styles';

export function Profile(){
    const redirectToProfile = "/profile";

    return(
        <Container>
            <div>
                <Link to={redirectToProfile}>
                    <h3>João Victor Lopes</h3>
                </Link>
                <Link to="#">sair</Link>
            </div>
            <Link to={redirectToProfile}>
                <img src="https://github.com/JoaoVictorLB.png" alt="Foto de perfil do usuário logado na plataforma." />
            </Link>
        </Container>
    );
}