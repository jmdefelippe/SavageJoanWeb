import React from 'react';
import { styles } from './Styles';
import Album from './Album';

const Discography = ({ albums }) => {
    const { customContainer } = styles;

    return (
        <div className={customContainer}>
            {albums.map(album => 
                <Album album={album} />
            )}
        </div>
    );
}
 
export default Discography;