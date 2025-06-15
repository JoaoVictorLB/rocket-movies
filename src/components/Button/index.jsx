import { Container } from './styles';

export function Button({ title, loading = false, deleteButton = false, ...rest }){
    return(
        <Container
            type="button"
            disabled={loading}
            {...rest}
            $deleteButton={deleteButton}
        >
            { loading ? 'Carregando...' : title }
        </Container>
    );
}