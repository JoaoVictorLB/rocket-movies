import { api } from '../../services/api';
import { useState, useEffect } from 'react';

import { Container, AddMovie } from './styles';

import { Header } from '../../components/Header';
import { RatingStars } from '../../components/RatingStars';
import { Tag } from '../../components/Tag';

import { GoPlus } from 'react-icons/go';

import { Link, useNavigate } from 'react-router-dom';

export function Home(){
    const [searchTitle, setSearchTitle] = useState("");
    const [movieNotes, setMovieNotes] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMovieNotes(){
            const response = await api.get(`/movie-notes/?title=${searchTitle}`);
            setMovieNotes(response.data);
        }

        fetchMovieNotes();
    }, [searchTitle]);

    return(
        <Container>
            <Header onChange={e => setSearchTitle(e.target.value)} />
            <main>
                <div>
                    <h1>Meus filmes</h1>
                    <Link to="/create-movie">
                        <AddMovie>
                            <GoPlus size={25}/>
                            <p>Adicionar filme</p>
                        </AddMovie>
                    </Link>
                </div>
                <article>
                    {
                        movieNotes &&
                        movieNotes.map(movieNote => (

                            <Link key={String(movieNote.id)} to={`/movie-preview/${movieNote.id}`}>
                                <section>
                                    <h2>{movieNote.title}</h2>
                                    <RatingStars home rating={Number(movieNote.rating)} />
                                    <p>
                                        {movieNote.description}
                                    </p>
                                    {
                                        movieNote.tags &&
                                        movieNote.tags.map(tag => (
                                            <Tag key={String(tag.id)} title={tag.name} home />
                                        ))
                                    }
                                </section>
                            </Link>
                        ))
                    }
                </article>
            </main>
        </Container>
    );
}