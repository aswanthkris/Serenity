import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from '../../redux/loginSlice'



function Nav() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    // console.log("local", localStorage.token);


    const handleLogout = () => {
        console.log("in logout")
        dispatch(clearUser())
        localStorage.removeItem('token')
        navigate('/')

    }

    const handleLogin = () => {
        // console.log("in loginnnn");
        navigate('/user-login')
        //     console.log("out loginn");

    }
    // 
    return (
        <div className="w-full">
            <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-11 w-10 "
                                    src="https://img.icons8.com/color/512/spinach.png"
                                    alt="Workflow"
                                />

                            </div>
                            <div>
                                <Link to="/" className="text-gray-900 text-xl font-bold text-emerald-600 " >Serenity</Link>

                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        href="#"
                                        className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        How ?
                                    </Link>

                                    <Link
                                        to="/user-experts"
                                        className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Experts to help you
                                    </Link>

                                    <Link
                                        to="/user-plans"
                                        className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Plans
                                    </Link>
                                    <Link
                                        to="#"
                                        className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Serenity Hub
                                    </Link>

                                    <div className="absolute top-5 right-8">
                                        {localStorage.token ? <a

                                            onClick={handleLogout}
                                            className="text-gray-900  hover:bg-gray-700 cursor-pointer hover:text-white mx-auto px-3 py-2 rounded-md text-sm font-medium "
                                        >
                                            Log out
                                        </a> : <a
                                            // to='/user-login'
                                            // href="/user-login"
                                            onClick={handleLogin}
                                            className="text-gray-900  hover:bg-gray-700 cursor-pointer hover:text-white mx-auto px-3 py-2 rounded-md text-sm font-medium "
                                        >
                                            Log in Serenity
                                        </a>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-400 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    to="#"
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Serenity
                                </Link>

                                <Link
                                    to="#"
                                    className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    How ?
                                </Link>

                                <Link
                                    to="/user-experts"
                                    className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Experts to help you
                                </Link>

                                <Link
                                    to="/user-plans"
                                    className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Plans
                                </Link>

                                <Link
                                    to="#"
                                    className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Serenity Hub
                                </Link>
                                {localStorage.token ? <a

                                    onClick={handleLogout}
                                    className="text-gray-900  hover:bg-gray-700 hover:text-white mx-auto px-3 py-2 rounded-md text-sm font-medium "
                                >
                                    Log out
                                </a> : <a
                                    // to = '/user-login'
                                    onClick={handleLogin}
                                    className="text-gray-900  hover:bg-gray-700 hover:text-white mx-auto px-3 py-2 rounded-md text-sm font-medium "
                                >
                                    Log in into services
                                </a>}
                            </div>
                        </div>
                    )}
                </Transition>
            </nav >

            {/* <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header> */}
            {/* <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                    </div>

                </div>
            </main> */}
        </div >
    );
}

export default Nav;