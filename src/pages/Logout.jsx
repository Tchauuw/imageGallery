import React, { useContext } from 'react'
import { AuthContext } from '../components/App'
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const [state] = useContext(AuthContext);

    return <div className="container mx-auto px-4 h-full">
        {state.user === null && (
            <Navigate to={{pathname: "/login" }} state={{ from:"/logout" }} />
        )}
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
