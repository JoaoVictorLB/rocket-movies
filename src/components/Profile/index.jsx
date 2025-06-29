import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar-placeholder.svg';

import { Link, useNavigate } from 'react-router-dom';
import { Container } from './styles';

export function Profile(){
    const redirectToProfile = "/profile";

    const { signOut, user } = useAuth();
    const navigate = useNavigate();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleSignOut(){
        navigate("/");
        signOut();
    }

    return(
        <Container>
            <div>
                <Link to={redirectToProfile}>
                    <h3>{user.name}</h3>
                </Link>
                <button onClick={handleSignOut}>sair</button>
            </div>
            <Link to={redirectToProfile}>
                <img src={avatarUrl} />
            </Link>
        </Container>
    );
}