import React from 'react'
import PropTypes from 'prop-types'

const Alert = props => {
    const {
        status,
        description
    } = props

    return <div className={(status !== 'success' ? 'bg-red-500' : 'bg-green-500') +
        ' text-white px-6 py-4 border-0 rounded relative mb-4'
    }>
        <span className="text-xl inline-block mr-5 align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </span>
        <span className="inline-block align-middle mr-8">
            {description}
        </span>
    </div>
}

Alert.propTypes = {
    description: PropTypes.string,
    status: PropTypes.oneOf(['success', 'error'])
}

export default Alert
