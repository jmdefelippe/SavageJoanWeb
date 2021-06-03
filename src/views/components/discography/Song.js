import React from 'react';
import { styles } from './Styles';

const Song = ({ song, album }) => {
    const { customP, customSpan } = styles;
    const { number, title, author, urlYoutube, urlSpotify, lyrics } = song;

    return (
        <div key={number} className={customP}>
            <div>{number}. {title}
            { album.artist != author ? (
                <span className={customSpan}> - {author}</span>
            ) : null}
            </div>                                    
        </div>    
    );
}
 
export default Song;