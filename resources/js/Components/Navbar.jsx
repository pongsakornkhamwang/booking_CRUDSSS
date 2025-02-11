import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                     Booking
                </div>
                <div className="flex space-x-6">
                    <a
                        href="/booking"
                        className="text-white hover:text-gray-400 transition-colors duration-200"
                    >
                        Booking
                    </a>
                    <a
                        href="/booking/create"
                        className="text-white hover:text-gray-400 transition-colors duration-200"
                    >
                        Create
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
