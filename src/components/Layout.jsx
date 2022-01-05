import React from 'react'
import Navbar from './Navbar'

const Layout = props => {

    return <div className="h-full">
        <Navbar />
        <main>
            <section className="absolute w-full h-full pt-16">
                {props.children}
            </section>
        </main>
    </div>
}

export default Layout