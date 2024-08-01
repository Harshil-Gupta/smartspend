import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from "./Pages/SignupPage/SignupPage";
import HomePage from './Pages/HomePage/HomePage';
import GoldPage from './Pages/GoldPage/GoldPage';
import StockPage from './Pages/StockPage/StockPage';
import CryptoPage from './Pages/CryptoPage/CryptoPage'

function App() {
    return (

        <BrowserRouter>
            <div>
                <Routes> {/* Use Routes instead of Router */}
                    <Route path='' element={<SignupPage />} />
                    <Route path='/home' element={<HomePage />} exact />
                    <Route path='/gold' element={<GoldPage />} exact />
                    <Route path='/stock' element={<StockPage />} exact />
                    <Route path='/crypto' element={<CryptoPage />} exact />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;