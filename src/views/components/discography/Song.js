import React from 'react';
import { styles } from './Styles';

const Song = ({ song, album }) => {
    const { customP, customSpan } = styles;

    return (
        <div key={song.number} className={customP}>
            <div>{song.number}. {song.title}
            { album.artist != song.author ? (
                <span className={customSpan}> - {song.author}</span>
            ) : null}
            </div>                                    
        </div>    
    );
}
 
export default Song;