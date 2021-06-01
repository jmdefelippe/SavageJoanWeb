import React from 'react';

const screenTabs = [
    {
        artist: 'Evanescence',
        song: 'Going Under',
        thumbnail: 'https://img.youtube.com/vi/JF1rqx8s2sE/maxresdefault.jpg',
        video: 'https://www.youtube.com/watch?v=JF1rqx8s2sE',
        guitarPro: 'https://ouo.io/DMCduu',
        pdf: 'https://ouo.io/DMCduu',
        tuning: 'Standard B'
    },
]

const ScreenTabs = () => {
    return (
        <div>
        {/*    
            <input className="mb-2 px-2 py-2 border-2 border-red-500 bg-black" placeholder="Nombre de artista o canción"></input>
            <button className="mb-2 px-2 py-2 border-2 border-red-500 bg-black">Buscar</button>
        */}    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="pb-3 bg-red-600 rounded-xl">
                    <a href={screenTabs[0].video} target="_blank">    
                        <img className="mb-2" src="https://img.youtube.com/vi/JF1rqx8s2sE/maxresdefault.jpg"></img>
                    </a>
                    <h1 className="font-bold text-md px-2 mt-1">{screenTabs[0].artist} | {screenTabs[0].song}</h1>
                    <a href={screenTabs[0].guitarPro} target="_blank" className="text-sm px-2 mt-1 cursor-pointer mr-2">Guitar Pro</a>
                    <a href={screenTabs[0].pdf} target="_blank" className="text-sm px-2 mt-1 cursor-pointer">PDF</a>
                </div>

                <div className="pb-3 bg-red-600 rounded-xl">
                    <img className="mb-2" src="https://img.youtube.com/vi/VbjuaaPG6A4/maxresdefault.jpg"></img>
                    
                    <h1 className="font-bold text-md px-2 mt-1">Megaman X6 Opening | Showtaro Morikubo | Moonlight</h1>
                    <a className="text-sm px-2 mt-1 cursor-pointer mr-2">Guitar Pro</a>
                    <a className="text-sm px-2 mt-1 cursor-pointer">PDF</a>
                </div>

                <div className="pb-3 bg-red-600 rounded-xl">
                    <img className="mb-2" src="https://img.youtube.com/vi/ix70RlzkUJE/maxresdefault.jpg"></img>
                    
                    <h1 className="font-bold text-md px-2 mt-1">The Offspring | We Never Have Sex Anymore</h1>
                    <a className="text-sm px-2 mt-1 cursor-pointer mr-2">Guitar Pro</a>
                    <a className="text-sm px-2 mt-1 cursor-pointer">PDF</a>
                </div>

                <div className="pb-3 bg-red-600 rounded-xl">
                    <img className="mb-2" src="https://img.youtube.com/vi/_4DBeQJFtjo/maxresdefault.jpg"></img>
                    
                    <h1 className="font-bold text-md px-2 mt-1">Black Veil Brides | Fields Of Bone</h1>
                    <a className="text-sm px-2 mt-1 cursor-pointer mr-2">Guitar Pro</a>
                    <a className="text-sm px-2 mt-1 cursor-pointer mr-2">PDF</a>
                    <a className="text-sm px-2 mt-1 cursor-pointer">Solo Tutorial</a>
                </div>

                <div className="pb-3 bg-red-600 rounded-xl">
                    <img className="mb-2" src="https://img.youtube.com/vi/39muOZI2Ob0/maxresdefault.jpg"></img>
                    
                    <h1 className="font-bold text-md px-2 mt-1">Bring Me The Horizon | Mantra</h1>
                    <a className="text-sm px-2 mt-1 cursor-pointer mr-2">Guitar Pro</a>
                    <a className="text-sm px-2 mt-1 cursor-pointer">PDF</a>
                </div>

                <div className="pb-3 bg-red-600 rounded-xl">
                    <img className="mb-2" src="https://img.youtube.com/vi/AFatHYw0MFA/maxresdefault.jpg"></img>
                    
                    <h1 className="font-bold text-md px-2 mt-1">Apocalyptica | Not Strong Enough</h1>
                    <a className="text-sm px-2 mt-1 cursor-pointer mr-2">Guitar Pro</a>
                    <a className="text-sm px-2 mt-1 cursor-pointer">PDF</a>
                </div>
            </div>

            <h1 className="font-bold text-sm px-2 mt-10">Tabs Model: artist, song, thumbnail, video, guitarPro, pdf, tuning</h1>
            <h1 className="font-bold text-sm px-2">Filtrar:</h1>
            <h1 className="font-bold text-sm px-2">- Todos</h1>
            <h1 className="font-bold text-sm px-2">- Artista - Select con cada uno de los artistas</h1>
            <h1 className="font-bold text-sm px-2">- Afinación - Select con cada una de las afinaciones</h1>

            <h1>TABS: Descargas - Screen Tabs - Tutoriales - Backing Tracks</h1>

        </div>
    );
}
 
export default ScreenTabs;