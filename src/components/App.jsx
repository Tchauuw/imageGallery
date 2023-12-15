import React from 'react'

import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Upload from '../pages/Upload'
import Layout from './Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {

    return<BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={ <Gallery /> } />
                <Route path="/login" element={ <Login />} />
                <Route path="/logout" element={ <Logout />} />
                <Route path="/upload" element={ <Upload />} />
            </Routes>
        </Layout>
    </BrowserRouter>
}

export default App