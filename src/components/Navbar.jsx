import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'Cakes & Desserts', href: '/menu', isNewPage: true },
        { name: 'Location', href: '/#location' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/#home" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-main rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
                        <img src={logo} alt="Haaris Cakes Logo - Fresh Homemade Cakes in Aranthangi" className="relative w-12 h-12 rounded-full object-cover border border-pink-100 shadow-md" />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform">Haaris Cake's</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        link.isNewPage ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-gray-600 hover:text-pink-400 transition-colors font-medium"
                            >
                                {link.name === 'Cakes & Desserts' ? (
                                    <>
                                        <span className="hidden md:inline">Cakes & Desserts</span>
                                        <span className="md:hidden">Menu</span>
                                    </>
                                ) : link.name}
                            </Link>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-gray-600 hover:text-pink-400 transition-colors font-medium"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <Link
                        to="/#contact"
                        className="bg-gradient-to-r from-pink-400 to-blue-400 text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                        Order Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 py-8 shadow-xl animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col items-center gap-6">
                        {navLinks.map((link) => (
                            link.isNewPage ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-xl font-semibold text-gray-800 hover:text-pink-400 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name === 'Cakes & Desserts' ? (
                                        <>
                                            <span className="hidden md:inline">Cakes & Desserts</span>
                                            <span className="md:hidden">Menu</span>
                                        </>
                                    ) : link.name}
                                </Link>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-xl font-semibold text-gray-800 hover:text-pink-400 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-pink-400 to-blue-400 text-white px-10 py-3.5 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Order Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
