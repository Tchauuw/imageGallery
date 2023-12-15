import React from 'react'
import { Link } from 'react-router-dom'

const Fab = props => {
    const {
        icon
    } = props

    return <button
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 bg-pink-600 text-white text-3xl align-middle"
    >   
        <Link to='/upload'>
            {icon}
        </Link>
    </button>
}

export default Fab