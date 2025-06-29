import { Container } from './styles';
import { Input } from '../Input';
import { Profile } from '../Profile';

export function Header({ onChange }){
    return(
        <Container>
            <h2>RocketMovies</h2>
            <Input type="text" placeholder="Pesquisar pelo título" onChange={onChange} />
            <Profile />
        </Container>
    );
}