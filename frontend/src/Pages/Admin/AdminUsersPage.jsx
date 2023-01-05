import React from 'react'
import AdminUsers from '../../Components/Admin/AdminUsers'
import AdminNavbar from '../../Components/Admin/AdminNavbar'
function AdminUsersPage() {
    return (
        <div className='container'>
            <AdminNavbar />
            <AdminUsers />
        </div>
    )
}

export default AdminUsersPage