import { Container, StarButton } from './styles';
import { IoStarOutline, IoStar } from 'react-icons/io5';

export function RatingStars({ home = false }) {
    return(
        <Container $home={home}>
            <StarButton $home={home}>
                <IoStar size={home ? 15 : 20} />
            </StarButton>
            <StarButton $home={home}>
                <IoStar size={home ? 15 : 20} />
            </StarButton>
            <StarButton $home={home}>
                <IoStar size={home ? 15 : 20} />
            </StarButton>
            <StarButton $home={home}>
                <IoStar size={home ? 15 : 20} />
            </StarButton>
            <StarButton $home={home}>
                <IoStarOutline size={home ? 15 : 20} />
            </StarButton>
        </Container>
    );
}