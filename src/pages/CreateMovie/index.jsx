import { useState } from 'react';
import { api } from '../../services/api';

import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { MovieItem } from '../../components/MovieItem';

import { Link, useNavigate } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

export function CreateMovie(){
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewMovieNote(){
        if(!title){
            alert("Digite o título do filme");
        }

        if(!rating){
            alert("Digite a avaliação do filme");
        }

        if(newTag){
            alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.");
        }

        await api.post("/movie-notes", { title, description, rating, movie_tags: tags });

        alert("Nota do filme criada com sucesso");
        navigate(-1);
    }

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
                        <Input placeholder="Título" type="text" onChange={e => setTitle(e.target.value)} />
                        <Input placeholder="Sua nota (de 0 a 5)" type="number" onChange={e => setRating(e.target.value)} />
                    </div>
                    <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)} />
                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags && tags.map((tag, index) => (
                                    <MovieItem 
                                        key={String(index)} 
                                        value={tag} 
                                        onClick={() => handleRemoveTag(tag)} 
                                    />
                                ))
                            }
                            <MovieItem 
                                isNew 
                                placeholder="Novo marcador" 
                                onClick={handleAddTag} 
                                onChange={e => setNewTag(e.target.value)} 
                                value={newTag} 
                            />
                        </div>
                    </Section>
                    <div>
                        <Button title="Excluir filme" deleteButton />
                        <Button title="Salvar alterações" onClick={handleNewMovieNote} />
                    </div>
                </Form>
            </main>
        </Container>
    );
}