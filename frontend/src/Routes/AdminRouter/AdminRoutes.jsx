import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLoginPage from '../../Pages/Admin/AdminLoginPage'
import AdminDashboardPage from '../../Pages/Admin/AdminDashboardPage'
import AdminUsersPage from '../../Pages/Admin/AdminUsersPage'
import AdminExpertsPage from '../../Pages/Admin/AdminExpertsPage'
import ExpertProfilePage from '../../Pages/Admin/ExpertProfilePage'
function AdminRoutes() {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path='/admin-login' element={<AdminLoginPage />} />


                    <Route path='/admin-dashboard' element={<AdminDashboardPage />} />


                    <Route path='/admin-users' element={<AdminUsersPage />} />


                    <Route path='/admin-experts' element={<AdminExpertsPage />} />

                    <Route path='/admin-expert-profile' element={<ExpertProfilePage />} />

                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default AdminRoutes