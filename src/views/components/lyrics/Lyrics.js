import React from 'react';

const Lyrics = ({ song }) => {
    return (
        <div>
            <h1 className="font-bold text-center">{song.name}</h1>
            <div className="text-center">{song.lyrics}</div>
        </div>
    );
}
 
export default Lyrics;