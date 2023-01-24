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
import CheckoutSuccessPage from '../../Pages/User/CheckoutSuccessPage'
import UserDashboardPage from '../../Pages/User/UserDashboardPage'
import ProtectRoute from '../../Routes/UserRouter/ProtectRoute'

function UserRoutes() {
    return (
        <>
            <BrowserRouter >
                <Routes>
                    <Route path='/user-signup'
                        element={<SignupPage />} />

                    <Route path='/user-login'
                        element={<LoginPage />} />

                    <Route path='/'
                        element={< HomePage />} />

                    <Route path='/user-experts'
                        element={<ExpertsPage />} />

                    <Route path='/user-experts-profile'
                        element={<ExpertProfilePage />} />

                    <Route path='/user-plans'
                        element={<PlansPage />} />
                    <Route element={<ProtectRoute />}>
                        <Route path='/user-payment'
                            element={<PaymentPage />} />

                        <Route path='/checkout-success'
                            element={<CheckoutSuccessPage />} />

                        <Route path='/user-dashboard'
                            element={<UserDashboardPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default UserRoutes