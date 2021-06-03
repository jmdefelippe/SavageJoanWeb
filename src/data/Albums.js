const albums = [
    {
        id: 2,
        artist: 'Joan Manuel Defelippe',
        title: 'Instrumental I',
        year: 2020,
        urlImage: 'https://i.imgur.com/SJ7OKOW.jpg',
        urlYoutube: 'https://www.youtube.com/watch?v=LfZ9-t1KApg',
        urlSpotify: '',
        songs: [
            { number: 1, title: 'Fugata', author: 'Astor Piazzolla', urlYoutube: '#', urlSpotify: '#', lyrics: null },
            { number: 2, title: 'Angel Island Zone', author: 'Sonic The Hedgegog 3', urlYoutube: '#', urlSpotify: '#', lyrics: null },
            { number: 3, title: 'La Danza Del Fuego', author: 'Walter Giardino Temple', urlYoutube: '#', urlSpotify: '#', lyrics: null },
            { number: 4, title: 'The Great Pandemonium', author: 'Kamelot', urlYoutube: '#', urlSpotify: '#', lyrics: null },
            { number: 5, title: 'The Stage', author: 'Avenged Sevenfold', urlYoutube: '#', urlSpotify: '#', lyrics: null },
        ]
    },
    {
        id: 1,
        artist: 'Savage',
        title: 'Revelaciones',
        year: 2019,
        urlImage: 'https://imgur.com/toY11G6.jpg',
        urlYoutube: 'https://www.youtube.com/watch?v=l3foKcpvNmk',
        urlSpotify: '',
        songs: [
            { number: 1, title: 'Por Tu Alma', author: 'Savage', urlYoutube: 'https://www.youtube.com/watch?v=KDn0cyn7pBU', urlSpotify: '#', lyrics: null },
            { number: 2, title: 'Revelaciones', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Revelaciones' },
            { number: 3, title: 'Nena!', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Nena!' },
            { number: 4, title: 'Sacrificio', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Sacrificio' },
            { number: 5, title: 'Sin Tí', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Sin Tí' },
            { number: 6, title: 'No Creo (En Tí) ft. David Rodriguez Borgonovo', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de No Creo (En tí)' },
            { number: 7, title: 'Libre', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Libre' },
            { number: 8, title: 'Total Eclipse Of The Heart', author: 'Bonnie Tyler', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Total Eclipse Of The Heart' },
            { number: 9, title: 'Mi Pecado Es Mortal', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Mi Pecado Es Mortal' },
            { number: 10, title: 'Silenciosa Obscuridad ft. Miqueas Caleb', author: 'Savage', urlYoutube: '#', urlSpotify: '#', lyrics: 'Letra de Silenciosa Obscuridad' },
        ]
    }]

export const getAlbums = () => {
    return albums;
}