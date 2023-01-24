import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExpertSignupPage from '../../Pages/Expert/ExpertSignupPage'
import ExpertProfilePage from '../../Pages/Expert/ExpertProfilePage'
import ExpertLoginPage from '../../Pages/Expert/ExpertLoginPage'
import ExpertDashPage from '../../Pages/Expert/ExpertDashPage'

function ExpertRoutes() {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path='/expert-signup' element={<ExpertSignupPage />} />
                </Routes>
                <Routes>
                    <Route path='/expert-login' element={<ExpertLoginPage />} />
                </Routes>
                <Routes>
                    <Route path='/expert-dashboard' element={<ExpertDashPage />} />
                </Routes>
                <Routes>
                    <Route path='/expert-profile' element={<ExpertProfilePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ExpertRoutes