import React from 'react'

const Navbar = () => {

  const navbarOpen = false

  return (
    <>
      <nav
        className={
          ("top-0 absolute z-50 w-full bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 "
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="/" className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
              LPMIAW Gallery
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none " +
              (navbarOpen ? "block" : "hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                Accueil
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                Galerie
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                Ajouter
              </a>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <a href="#" className="bg-pink-500 text-white active:bg-pink-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3">
                Connexion
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
