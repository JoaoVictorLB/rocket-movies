import { Routes, Route } from 'react-router-dom';

import { MoviePreview } from '../pages/MoviePreview';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { CreateMovie } from '../pages/CreateMovie';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/movie-preview/:id" element={<MoviePreview/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/create-movie" element={<CreateMovie/>} />
        </Routes>
    );
}