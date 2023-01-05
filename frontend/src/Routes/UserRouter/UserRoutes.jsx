import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//User pages and components
import SignupPage from '../../Pages/User/SignupPage'
import LoginPage from '../../Pages/User/LoginPage'
import HomePage from '../../Pages/User/HomePage'
import ExpertsPage from '../../Pages/User/ExpertsPage'
import ExpertProfilePage from '../../Pages/User/ExpertProfilePage'
import PlansPage from '../../Pages/User/PlansPage'
import PaymentPage from '../../Pages/User/PaymentPage'

function UserRoutes() {
    return (
        <>
            <BrowserRouter >


                <div className='user-signup'>
                    <Routes>
                        <Route path='/user-signup'
                            element={<SignupPage />} />
                    </Routes>
                </div>
                <div className='user-login'>
                    <Routes>
                        <Route path='/user-login'
                            element={<LoginPage />} />
                    </Routes>
                </div>
                <div className='user-home'>
                    <Routes>
                        <Route path='/'
                            element={< HomePage />} />
                    </Routes>
                </div>
                <div className='user-experts'>
                    <Routes>
                        <Route path='/user-experts'
                            element={<ExpertsPage />} />
                    </Routes>
                </div>
                <div className='user-expert-profile'>
                    <Routes>
                        <Route path='/user-experts-profile'
                            element={<ExpertProfilePage />} />
                    </Routes>
                </div>
                <div className='user-expert-profile'>
                    <Routes>
                        <Route path='/user-plans'
                            element={<PlansPage />} />
                    </Routes>
                </div>
                <div className='user-payment'>
                    <Routes>
                        <Route path='/user-payment'
                            element={<PaymentPage />} />
                    </Routes>
                </div>

            </BrowserRouter>

        </>
    )
}

export default UserRoutes