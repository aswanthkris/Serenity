import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExpertSignupPage from '../../Pages/Expert/ExpertSignupPage'


function ExpertRoutes() {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path='/expert-signup' element={<ExpertSignupPage />} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default ExpertRoutes