import React, { useEffect, useState } from 'react'
import Fab from '../components/Fab'
import Thumbnail from '../components/Thumbnail'
// import db from '../../db.json'

const Gallery = () => {

    const [ressources, setRessources] = useState([]);
    const getData = () => {
        fetch('/api/images')
            .then(res => res.json())
            .then(data => setRessources(data))
    }

    useEffect(() => {
        getData()   
    }, [])

    return <div className="mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1 mx-auto">
            { ressources.map((image) =>
                <li>
                    <Thumbnail    
                        url={image.url}    
                        description="Sample from Unsplash"
                    />
                </li>
            ) }
        </ul>
        <Fab icon="+" />
    </div>
}

export default Gallery