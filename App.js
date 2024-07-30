import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from "./Pages/SignupPage/SignupPage";
import HomePage from './Pages/HomePage/HomePage';


function App() {
    return (

        <BrowserRouter>
            <div>
                <Routes> {/* Use Routes instead of Router */}
                    <Route path='' element={<SignupPage />} />
                    <Route path='/home' element={<HomePage />} exact />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;