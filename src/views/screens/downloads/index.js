import React from 'react';
import Cards from '../../components/downloads/Cards';
import { getCards } from '../../../data/Cards';

const Downloads = () => {
    
    const cards = getCards();

    return (
        <div>
            <Cards cards={cards} />
        </div>
    );
}
 
export default Downloads;

/*
            <h1>TABS: Descargas - Screen Tabs - Tutoriales - Backing Tracks</h1>
            <h1 className="font-bold text-sm px-2">Filtrar:</h1>
            <h1 className="font-bold text-sm px-2">- Todos</h1>
            <h1 className="font-bold text-sm px-2">- Artista - Select con cada uno de los artistas</h1>
            <h1 className="font-bold text-sm px-2">- Afinación - Select con cada una de las afinaciones</h1>

*/