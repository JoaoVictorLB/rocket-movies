import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, MainContent, Presentation, PresentationInfos, TagsSection } from './styles';

import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { RatingStars } from '../../components/RatingStars';
import { Tag } from '../../components/Tag';

import { CiClock2 } from 'react-icons/ci';
import avatarPlaceholder from '../../assets/avatar-placeholder.svg';

export function MoviePreview(){
    const [data, setData] = useState(null);

    const params = useParams();
    const { user } = useAuth();

    const userUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleCreatedAt(creationDate){
        return creationDate.replace(" ", " às ").slice(0, -3);
    }

    useEffect(() => {
        async function fetchMovieNote(){
            const response = await api.get(`/movie-notes/${params.id}`);
            setData(response.data);
        }

        fetchMovieNote();
    }, []);

    return(
        <Container>
            <Header />
            <main>
                <BackButton/>
                {
                    data && 
                    <MainContent>
                        <Presentation>
                            <h1>{data.title}</h1>
                            <RatingStars rating={data.rating}/>
                        </Presentation>
                        <PresentationInfos>
                            <img src={userUrl} alt="Foto do usuário." />
                            <p>Por {user.name}</p>
                            <CiClock2 size={20} />
                            <p>{handleCreatedAt(data.created_at)}</p>
                        </PresentationInfos>
                        <TagsSection>
                            {
                                data.tags &&
                                data.tags.map(tag => (
                                    <Tag key={String(tag.id)} title={tag.name}/>
                                ))
                            }
                        </TagsSection>
                        <p>
                            {data.description}
                        </p>
                    </MainContent>
                }
            </main>
        </Container>
    );
}