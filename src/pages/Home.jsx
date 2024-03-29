import React from 'react'

import heroImg from '../assets/pine-watt-2Hzmz15wGik-unsplash.jpg'
import gsdPhoto from '../assets/photo-1555212697-194d092e3b8f.jpg'

const Home = () => {
    return <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
                minHeight: "75vh"
            }}>
            <div className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage: `url('${heroImg}')`
                }}>
                <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div className="pr-12">
                            <h1 className="text-white font-semibold text-5xl">
                                Votre galerie photo
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                Un exemple d'application à réaliser avec React lors du module Javascript Avancé de la Licence Professionelle MIAW de La Rochelle Université.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style={{ height: "70px" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-gray-300 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                    <i className="fas fa-award"></i>
                                </div>
                                <h6 className="text-xl font-semibold">Gratuit</h6>
                                <p className="mt-2 mb-4 text-gray-600">
                                    Ne payez jamais pour héberger vos photos
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                    <i className="fas fa-retweet"></i>
                                </div>
                                <h6 className="text-xl font-semibold">
                                    Public
                                </h6>
                                <p className="mt-2 mb-4 text-gray-600">
                                    Tout le monde peut voir vos précieuses photos
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                    <i className="fas fa-fingerprint"></i>
                                </div>
                                <h6 className="text-xl font-semibold">
                                    Un super exercice
                                </h6>
                                <p className="mt-2 mb-4 text-gray-600">
                                    Un exercice semblable à un projet que vous pourriez faire dans la vraie vie.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative py-20">
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-white fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>

            <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img
                            alt="..."
                            className="max-w-full rounded-lg shadow-lg"
                            src={gsdPhoto}
                        />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <h3 className="mt-6 text-3xl font-semibold">
                                Au boulot
                            </h3>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                Allez, on arrête de lire la page marketing et on se met au travail, ce TP ne va pas se faire tout seul.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="pb-20 relative block bg-gray-900">
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-gray-900 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>

        </section>
        <section className="relative block py-24 lg:pt-12 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center -mt-48">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                            <div className="flex-auto p-5 lg:p-10">
                                <h4 className="text-2xl font-semibold">
                                    Vous voulez essayer ?
                                </h4>
                                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                    Connectez vous pour ajouter une image à la galerie.
                                </p>
                                
                                <div className="text-center mt-6">
                                    <a href="/login">
                                        <button
                                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            style={{ transition: "all .15s ease" }}
                                        >
                                            Connexion
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
}

export default Home