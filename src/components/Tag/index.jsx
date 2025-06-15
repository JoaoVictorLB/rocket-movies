import { Container } from './styles';

export function Tag({ title, home = false, ...rest }){
    return(
        <Container $home={home} {...rest}>
            {title}
        </Container>
    );
}