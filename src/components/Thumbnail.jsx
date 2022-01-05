import React from 'react'

const Thumbnail = props => {

    const {
        url,
        description
    } = props

    return <img src={url}
        alt={description}
        className="w-full min-w-96 h-64 object-cover"
    />
}

export default Thumbnail