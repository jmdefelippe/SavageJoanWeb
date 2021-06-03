import React from 'react';
import Cards from '../../components/downloads/Cards';

const Downloads = () => {
    const cards = [
        {
            artist: 'Evanescence',
            song: 'Going Under',
            urlImage: 'https://img.youtube.com/vi/JF1rqx8s2sE/maxresdefault.jpg',
            urlVideo: 'https://www.youtube.com/watch?v=JF1rqx8s2sE',
            urlGuitarPro: 'https://ouo.io/DMCduu',
            urlPdf: 'https://ouo.io/DMCduu',
            tuning: 'Standard B'
        },
        {
            artist: 'Megaman X6 Opening',
            song: 'Moonlight',
            urlImage: 'https://img.youtube.com/vi/VbjuaaPG6A4/maxresdefault.jpg',
            urlVideo: '',
            urlGuitarPro: 'https://ouo.io/DMCduu',
            urlPdf: 'https://ouo.io/DMCduu',
            tuning: 'Drop B'
        },
        {
            artist: 'The Offspring',
            song: 'We Never Have Sex Anymore',
            urlImage: 'https://img.youtube.com/vi/ix70RlzkUJE/maxresdefault.jpg',
            urlVideo: '',
            urlGuitarPro: 'https://ouo.io/DMCduu',
            urlPdf: 'https://ouo.io/DMCduu',
            tuning: 'Standard E'
        },
        {
            artist: 'Black Veil Brides',
            song: 'Fields Of Bone',
            urlImage: 'https://img.youtube.com/vi/_4DBeQJFtjo/maxresdefault.jpg',
            urlVideo: '',
            urlGuitarPro: 'https://ouo.io/DMCduu',
            urlPdf: 'https://ouo.io/DMCduu',
            tuning: 'Drop B'
        },
        {
            artist: 'Bring Me The Horizon',
            song: 'Mantra',
            urlImage: 'https://img.youtube.com/vi/39muOZI2Ob0/maxresdefault.jpg',
            urlVideo: '',
            urlGuitarPro: 'https://ouo.io/DMCduu',
            urlPdf: 'https://ouo.io/DMCduu',
            tuning: 'Drop B'
        },
        {
            artist: 'Apocalyptica',
            song: 'Not Strong Enough',
            urlImage: 'https://img.youtube.com/vi/AFatHYw0MFA/maxresdefault.jpg',
            urlVideo: '',
            urlGuitarPro: 'https://ouo.io/DMCduu',
            urlPdf: 'https://ouo.io/DMCduu',
            tuning: 'Drop B'
        },
    ]

    return (
        <div>
            <Cards cards={cards} />
         
        </div>
    );
}
 
export default Downloads;

/*
            <h1>TABS: Descargas - Screen Tabs - Tutoriales - Backing Tracks</h1>
            <h1 className="font-bold text-sm px-2 mt-10">Tabs Model: artist, song, Image, video, guitarPro, pdf, tuning</h1>
            <h1 className="font-bold text-sm px-2">Filtrar:</h1>
            <h1 className="font-bold text-sm px-2">- Todos</h1>
            <h1 className="font-bold text-sm px-2">- Artista - Select con cada uno de los artistas</h1>
            <h1 className="font-bold text-sm px-2">- Afinación - Select con cada una de las afinaciones</h1>

*/