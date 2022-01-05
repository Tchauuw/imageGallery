import React from 'react'

const Logout = () => {

    return <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4 shadow py-24 text-center">
                <p>Revenez vite !</p>
                <button className="mt-6 bg-pink-500 text-white active:bg-pink-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none">
                    Déconnexion
                </button>
            </div>
        </div>
    </div>
}

export default Logout
