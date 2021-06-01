import React from 'react';
import Song from './Song';

const Songs = ({ album }) => {
    return (
        <div>
            {album.songs.map(song =>
                <Song song={song} album={album} />
            )}
        </div>
    );
}
 
export default Songs;