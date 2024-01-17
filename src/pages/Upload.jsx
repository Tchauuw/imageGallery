import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../components/App';
import { Navigate } from 'react-router-dom';

const UploadForm = () => {

    const [state] = useContext(AuthContext);

    return <div className="container mx-auto px-4 h-full">

    {state.user === null && (
        <Navigate to={{pathname: "/login" }} state={{ from:"/upload" }} />
    )}
        <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-4">
                        {/* Mettez Result ici ! */}
                        <form>
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="image"
                                >
                                    Image
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    accept="image/*"
                                    className="hidden"
                                />
                                <button
                                    type="button"
                                    className="w-full px-3 py-3 bg-white rounded shadow text-4xl text-gray-400 flex flex-col items-center justify-center"
                                >
                                        {/* <img src="https://picsum.photos/id/1000/5626/3635" alt="Sample from Unsplash" className="object-cover w-full" /> */}
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <p className="text-xl text-gray-700">
                                                Choisir un fichier
                                            </p>
                                        </>
                                </button>
                            </div>
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    name="description" cols="30" rows="5"
                                >
                                </textarea>
                            </div>

                            <div className="text-center mt-6">
                                <input type="submit"
                                    className="bg-gray-900 text-white disabled:bg-gray-400 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                    style={{ transition: "all .15s ease" }}
                                    value="Envoyer"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

UploadForm.propTypes = {
    onSubmit: PropTypes.func,
    disabled: PropTypes.bool
}

export default UploadForm
