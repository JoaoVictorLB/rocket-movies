import { Container } from './styles';

import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function BackButton(){
    return (
        <Container>
            <Link to="/home">
                <FiArrowLeft size={20}/>
                <p>Voltar</p>
            </Link>
        </Container>
    );
}