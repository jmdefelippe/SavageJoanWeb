import React from 'react';
import Lyrics from '../../components/lyrics/Lyrics';

const ScreenLyrics = () => {
    const song = { name: 'Canción seleccionada', lyrics: 'Letra de canción seleccionada'}

    return (
        <Lyrics song={song} />
    );
}
 
export default ScreenLyrics;