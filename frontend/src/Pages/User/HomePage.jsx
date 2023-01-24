import React from 'react'

//components
import UserHome from '../../Components/User/UserHome'
import UserNavbar from '../../Components/User/UserNavbar'
import Footer from '../../Components/User/Footer'


function HomePage() {
    return (
        <div >
            < UserNavbar />
            <UserHome />
            <Footer />
        </div >
    )
}

export default HomePage