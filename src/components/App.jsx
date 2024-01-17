import React, { createContext, useReducer } from 'react'

import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Upload from '../pages/Upload'
import Layout from './Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const initialState = {
	loading: false,
	error: false,
	user: null,
	message: ""
};

const reducer = (state, action) => {
    switch (action.step) {
        case "login_start":
            return {
                ...state,
                loading: true,
                error: false,
                message: ""
            };
        case "login_success":
            return {
                ...state,
                loading: false,
                error: false,
                user: {
                    username: action.identity.username,
                },
                message: "Connexion réussie"
            };
        case "login_error":
            return {
                ...state,
                loading: false,
                error: true,
                user: null,
                message: "Connexion échouée"
            };
        default:
            return state;
    }
};

export const AuthContext = createContext();

const App = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    
    const login = (credentials) => {
        dispatch({step: 'login_start'});
        
        fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Not ok");
            }
            return res.json();
        })
        .then((data) => {
            dispatch({ step: "login_success", identity: { username: data.username } })
        })
        .catch((err) => {
            dispatch({step: "login_error"});
          });
        };
        
        return<BrowserRouter>
        <AuthContext.Provider value={[state, { login }]}>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={ <Gallery /> } />
                <Route path="/login" element={ <Login />} />
                <Route path="/logout" element={ <Logout />} />
                <Route path="/upload" element={ <Upload />} />
            </Routes>
        </Layout>
        </AuthContext.Provider>
    </BrowserRouter>
}

export default App