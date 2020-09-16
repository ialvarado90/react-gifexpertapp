import React/*, { useState, useEffect }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const Gifgrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    /*const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs(category).then(imgs => setImages(imgs));
    }, [category]);*/

    return (
        <>
            <h3 className="animate__animated  animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated  animate__flash">Loading</p>}
            <div className="card-grid">
                {images.map((img) => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))}

            </div>
        </>
    )
}
