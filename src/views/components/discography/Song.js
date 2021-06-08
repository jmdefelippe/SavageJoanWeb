import React from 'react';
import { Link } from "react-router-dom";
import { styles } from './Styles';

const Song = ({ song, album }) => {
    const { customP, customSpan } = styles;
    const { number, title, author, urlYoutube, urlSpotify, lyrics } = song;

    const onClickLyrics = () => {
        console.log("lyrics de canción seleccionada...");
    }

    return (
        <div className="flex items-center">
            <div key={number} className={customP}>
                <div>{number}. {title}
                { album.artist != author ? (
                    <span className={customSpan}> - {author}</span>
                ) : null}
                </div>   
            </div>

            { song.lyrics != null ? (
                <div className="ml-2 cursor-pointer">
                    <Link to={'/lyrics'}>
                        <img src="img/lyrics.png" style={{ height: 20, width: 20 }} alt="iconLyrics" onClick={ onClickLyrics } />
                    </Link>
                </div>
            ) : null }

        </div>     
    );
}
 
export default Song;

// <img src="img/lyrics.png" style={{ height: 20, width: 20 }}/>  