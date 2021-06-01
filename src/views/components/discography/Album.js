import React from 'react';
import { styles } from './Styles';

import Songs from './Songs';

const Album = ({ album }) => {
    const { customAlbumContainer, customH1, customImage } = styles;

    return (
        <div key={album.id} className={customAlbumContainer}>
            <a href={album.urlYoutube} target="_blank">
                <img className={customImage} src={album.urlImage} title={album.title} />
            </a>
            <h1 className={customH1}>{album.artist} - {album.title} ({album.year})</h1>
            <Songs album={album} />
        </div>
    );
}
 
export default Album;