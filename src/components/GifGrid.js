import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( { category } ) => {

    /* const [ images, setImages ] = useState( [] );

    useEffect( () => {
        getGifs( category )
            .then( setImages );
    }, [ category ])

    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=a3z2wabmEvP8aac1V3Ys88TGexqpqvvz`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        // console.log(data);
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages(gifs);
    }
    // getGifs(); */

    const { data:images, loading } = useFetchGifs( category );
    console.log(loading);
    console.log(images);

    return (
        <>
            <h3>{ category }</h3>
            {/* { loading ? 'Cargando...' : 'Data Cargada!' } */}
            <div className="animate__animated animate__flash">
                {loading && 'Cargando...'}
            </div>
            <div className="card-grid">
                {/* {images.map( ( img ) => ( */}
                {images.map( img  => (
                    // <li key={ id }>{ title }</li>
                    <GifGridItem 
                        key={ img.id }
                        { ...img }// img={ img }
                    />
                ))}
            </div>
        </>
    )
}