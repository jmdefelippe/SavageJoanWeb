import React from 'react';
import Discography from '../../components/discography/Discography';

const ScreenDiscography = () => {
    const albums = [
        {
            id: 2,
            artist: 'Joan Manuel Defelippe',
            title: 'Instrumental I',
            year: 2020,
            urlImage: 'https://i.imgur.com/SJ7OKOW.jpg',
            urlYoutube: 'https://www.youtube.com/watch?v=LfZ9-t1KApg',
            urlSpotify: '',
            songs: [
                { number: 1, title: 'Fugata', author: 'Astor Piazzolla', urlYoutube: '#', urlSpotify: '#', lyrics: null },
                { number: 2, title: 'Angel Island Zone', author: 'Sonic The Hedgegog 3', urlYoutube: '#', urlSpotify: '#', lyrics: null },
                { number: 3, title: 'La Danza Del Fuego', author: 'Walter Giardino Temple', urlYoutube: '#', urlSpotify: '#', lyrics: null },
                { number: 4, title: 'The Great Pandemonium', author: 'Kamelot', urlYoutube: '#', urlSpotify: '#', lyrics: null },
                { number: 5, title: 'The Stage', author: 'Avenged Sevenfold', urlYoutube: '#', urlSpotify: '#', lyrics: null },
            ]
        },
        {
            id: 1,
            artist: 'Savage',
            title: 'Revelaciones',
            year: 2019,
            urlImage: 'https://imgur.com/toY11G6.jpg',
            urlYoutube: 'https://www.youtube.com/watch?v=l3foKcpvNmk',
            urlSpotify: '',
            songs: [
                { number: 1, title: 'Por Tu Alma', author: 'Savage', urlYoutube: 'https://www.youtube.com/watch?v=KDn0cyn7pBU', urlSpotify: '#', lyrics: null },
                { number: 2, title: 'Revelaciones', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Revelaciones' },
                { number: 3, title: 'Nena!', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Nena!' },
                { number: 4, title: 'Sacrificio', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Sacrificio' },
                { number: 5, title: 'Sin Tí', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Sin Tí' },
                { number: 6, title: 'No Creo (En Tí) ft. David Rodriguez Borgonovo', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de No Creo (En tí)' },
                { number: 7, title: 'Libre', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Libre' },
                { number: 8, title: 'Total Eclipse Of The Heart', author: 'Bonnie Tyler', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Total Eclipse Of The Heart' },
                { number: 9, title: 'Mi Pecado Es Mortal', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Mi Pecado Es Mortal' },
                { number: 10, title: 'Silenciosa Obscuridad ft. Miqueas Caleb', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Silenciosa Obscuridad' },
            ]
        }]

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