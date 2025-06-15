import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { MovieItem } from '../../components/MovieItem';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

export function CreateMovie(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <Link to="/home">
                            <FiArrowLeft size={20}/>
                            <p>Voltar</p>
                        </Link>
                        <h1>Novo filme</h1>
                    </header>
                    <div>
                        <Input placeholder="Título" type="text" />
                        <Input placeholder="Sua nota (de 0 a 5)" type="number" />
                    </div>
                    <Textarea placeholder="Observações" />
                    <Section title="Marcadores">
                        <div className="tags">
                            <MovieItem value="React" />
                            <MovieItem isNew placeholder="Novo marcador" />
                        </div>
                    </Section>
                    <div>
                        <Button title="Excluir filme" deleteButton />
                        <Button title="Salvar alterações" />
                    </div>
                </Form>
            </main>
        </Container>
    );
}