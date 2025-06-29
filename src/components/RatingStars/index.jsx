import { Container, StarButton } from './styles';
import { IoStarOutline, IoStar } from 'react-icons/io5';

export function RatingStars({ home = false, rating = 0 }) {
    const ratingRest = 5 - rating;
    
    return(
        <Container $home={home}>
            <StarButton $home={home}>
                {rating >= 1 ? <IoStar size={home ? 15 : 20} /> : <IoStarOutline size={home ? 15 : 20} /> }
            </StarButton>
            <StarButton $home={home}>
                {rating >= 2 ? <IoStar size={home ? 15 : 20} /> : <IoStarOutline size={home ? 15 : 20} /> }
            </StarButton>
            <StarButton $home={home}>
                {rating >= 3 ? <IoStar size={home ? 15 : 20} /> : <IoStarOutline size={home ? 15 : 20} /> }
            </StarButton>
            <StarButton $home={home}>
                {rating >= 4 ? <IoStar size={home ? 15 : 20} /> : <IoStarOutline size={home ? 15 : 20} /> }
            </StarButton>
            <StarButton $home={home}>
                {rating == 5 ? <IoStar size={home ? 15 : 20} /> : <IoStarOutline size={home ? 15 : 20} /> }
            </StarButton>
        </Container>
    );
}