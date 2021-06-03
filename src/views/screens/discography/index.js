import React from 'react';
import Discography from '../../components/discography/Discography';
import { getAlbums } from '../../../data/Albums';

const ScreenDiscography = () => {
    const albums = getAlbums();

    return (
        <div>
            <Discography albums={albums} />
        </div>
    );
} 
export default ScreenDiscography;

/*
            <h1>TABS: Descargas - Screen Tabs - Tutoriales - Backing Tracks</h1>
            <h1 className="font-bold text-sm px-2 mt-10">Tabs Model: artist, song, thumbnail, video, guitarPro, pdf, tuning</h1>
            <h1 className="font-bold text-sm px-2">Filtrar:</h1>
            <h1 className="font-bold text-sm px-2">- Todos</h1>
            <h1 className="font-bold text-sm px-2">- Artista - Select con cada uno de los artistas</h1>
            <h1 className="font-bold text-sm px-2">- Afinación - Select con cada una de las afinaciones</h1>

*/