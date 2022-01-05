import React from 'react'

const Result = props => {
    const {
        status,
        buttonText,
        onClick
    } = props

    return <div className="bg-white rounded text-center shadow flex flex-col items-center pb-10 pt-10">
        <div className="w-12">
            <svg xmlns="http://www.w3.org/2000/svg"
                className={'h-2 w-2 '+
                    status === 'success' ? 'text-red-500' : 'text-green-500'
                } fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <p className="text-gray-700 text-xl">
            {status === 'success' ? 'Success' : 'Error'}
        </p>
        <button onClick={onClick} className="bg-pink-500 text-white active:bg-pink-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mt-4">
            {buttonText}
        </button>
    </div>
}

export default Result