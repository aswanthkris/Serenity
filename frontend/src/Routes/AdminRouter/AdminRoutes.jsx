import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLoginPage from '../../Pages/Admin/AdminLoginPage'
import AdminDashboardPage from '../../Pages/Admin/AdminDashboardPage'
import AdminUsersPage from '../../Pages/Admin/AdminUsersPage'
function AdminRoutes() {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path='/admin-login' element={<AdminLoginPage />} />
                </Routes>
                <Routes>
                    <Route path='/admin-dashboard' element={<AdminDashboardPage />} />
                </Routes>
                <Routes>
                    <Route path='/admin-users' element={<AdminUsersPage />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default AdminRoutes