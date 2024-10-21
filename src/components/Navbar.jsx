import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <nav className="flex justify-between items-center px-6 py-3 bg-white bg-opacity-50 backdrop-blur-md sticky top-0 z-50 shadow-md">
            <div>
                <h2 className="text-black font-semibold text-xl">ComForm</h2>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-3 font-medium">
                <li>
                    <a href="#" className="px-4 py-2">Home</a>
                </li>
                <li>
                    <a href="#" className="px-4 py-2">Discover</a>
                </li>
                <li>
                    <a href="#" className="px-4 py-2">About Us</a>
                </li>
                <li>
                    <a href="#" className="px-4 py-2">Contact</a>
                </li>
            </ul>

            {/* Auth buttons for desktop */}
            <div className="hidden md:block">
                {!isAuthenticated ? (
                    <button
                        className="text-sm px-3 py-2 font-semibold rounded-full bg-blue-500 text-white hover:bg-blue-600"
                        onClick={() => loginWithRedirect()}
                    >
                        Log In
                    </button>
                ) : (
                    <div className="relative flex items-center">
                        <img src={user.picture} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-gray-700 font-medium">{user.name}</span>
                        <button
                            className="ml-3 text-sm px-3 py-2 font-semibold rounded-full bg-red-500 text-white hover:bg-red-600"
                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                        >
                            Log Out
                        </button>
                    </div>
                )}
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {open ? (
                        <XMarkIcon className="h-6 w-6" />
                    ) : (
                        <Bars3Icon className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-3 p-4 md:hidden">
                    <li>
                        <a href="#" className="px-3 py-2">Home</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2">Discover</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2">About Us</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2">Contact</a>
                    </li>
                    {!isAuthenticated ? (
                        <li>
                            <button
                                className="text-sm px-3 py-2 font-semibold rounded-full bg-blue-500 text-white hover:bg-blue-600"
                                onClick={() => {
                                    loginWithRedirect();
                                    setOpen(false); // Close the menu after login
                                }}
                            >
                                Log In
                            </button>
                        </li>
                    ) : (
                        <li>
                            <button
                                className="text-sm px-3 py-2 font-semibold rounded-full bg-red-500 text-white hover:bg-red-600"
                                onClick={() => {
                                    logout({ logoutParams: { returnTo: window.location.origin } });
                                    setOpen(false); // Close the menu after logout
                                }}
                            >
                                Log Out
                            </button>
                        </li>
                    )}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
