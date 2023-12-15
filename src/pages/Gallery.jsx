import React from 'react'
import Fab from '../components/Fab'
import Thumbnail from '../components/Thumbnail'

const Gallery = () => {

    return <div className="mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1 mx-auto">
            <li>
                <Thumbnail    url="https://picsum.photos/id/1000/5626/3635"    description="Sample from Unsplash"/>
            </li>
        </ul>
        <Fab icon="+" />
    </div>
}

export default Gallery