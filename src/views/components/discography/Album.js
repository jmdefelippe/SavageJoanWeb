import React from 'react';
import { styles } from './Styles';
import Songs from './Songs';

const Album = ({ album }) => {
    const { customAlbumContainer, customH1, customImage } = styles;
    const { artist, title, year, urlImage, urlYoutube, urlSpotify } = album;

    return (
        <div className={customAlbumContainer}>
            <a href={urlYoutube} target="_blank">
                <img className={customImage} src={urlImage} title={title} />
            </a>
            <h1 className={customH1}>{artist} - {title} ({year})</h1>
            <Songs album={album} />
        </div>
    );
}
 
export default Album;