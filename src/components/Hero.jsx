import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.webp';
import { MessageCircle, X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PhoneEmojiIcon } from './Icons';
import OrderNotice from './OrderNotice';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background elements */}
            <div className="absolute top-1/4 -left-10 w-64 h-64 bg-pink-200/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-[120px] shadow-[0_0_100px_rgba(167,216,242,0.1)]" />

            <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
                        y: [0, -10, 0] // Floating animation
                    }}
                    transition={{ 
                        opacity: { duration: 1 },
                        scale: { duration: 1, type: "spring" },
                        y: { 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }
                    }}
                    className="mb-8 relative"
                >
                    <div 
                        className="relative inline-block group cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        {/* Animated Rotating Border - Softened */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-pink-300 to-blue-300 rounded-full blur-sm opacity-40 animate-[spin_10s_linear_infinite]"></div>
                        
                        {/* Static High-Impact Glow - Lightened */}
                        <div className="absolute -inset-10 bg-pink-100/40 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-blue-200 rounded-full blur-2xl opacity-20"></div>
                        
                        {/* The Logo itself */}
                        <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full p-1 bg-white shadow-soft-lg transition-transform duration-500 group-hover:scale-105">
                            <img
                                src={logo}
                                alt="Haaris Cakes Logo - Best Homemade Cakes in Aranthangi"
                                className="w-full h-full rounded-full object-cover border-4 border-white brightness-105"
                            />
                        </div>
                    </div>
                </motion.div>

                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none">
                            <span className="text-gray-800">Haaris </span> 
                            <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent px-2"> Cake's</span>
                        </h1>

                        <div className="flex items-center justify-center gap-4">
                            <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-pink-300 opacity-60"></div>
                            <span className="text-xs md:text-sm font-light uppercase tracking-[0.4em] text-gray-400">Home Made with Love</span>
                            <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-blue-300 opacity-60"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-3"
                    >
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-semibold leading-tight tracking-tight">
                            Best Homemade Cakes in Aranthangi 🎂
                        </p>
                        <p className="text-base md:text-lg text-gray-600">
                            Fresh and Custom birthday cakes and desserts
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <div className="inline-block py-1.5 px-6 bg-gradient-to-r from-pink-100 to-blue-100 border border-white/50 rounded-full shadow-sm">
                                <span className="text-sm md:text-base font-bold text-gray-700">Same-day orders available 💜</span>
                            </div>
                            <div className="inline-block py-1.5 px-6 bg-gradient-to-r from-blue-100 to-pink-100 border border-white/50 rounded-full shadow-sm animate-pulse">
                                <span className="text-sm md:text-base font-bold text-gray-700">🚀 Free Delivery within 10km</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500"
                    >
                        <span className="flex items-center gap-2">
                            <span className="text-pink-400">📍</span> Available only in Aranthangi
                        </span>
                        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                        <span className="flex items-center gap-2">
                            <span className="text-blue-400">🚚</span> Pickup & Local Delivery Available
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
                    >
                        <a
                            href="tel:9944362457"
                            className="group relative flex items-center justify-center gap-3 bg-white text-gray-800 border border-gray-100 px-8 py-4 sm:py-5 rounded-full font-bold text-base hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-md min-w-[220px]"
                        >
                            <PhoneEmojiIcon size={24} className="sm:w-8 sm:h-8 transform -rotate-12" />
                            Call for Orders
                        </a>

                        <a
                            href="https://wa.me/919944362457?text=Hello%20I%20want%20to%20order%20a%20cake%20from%20Haaris%20Cake's"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-pink-400 to-blue-400 text-white px-8 py-4 sm:py-5 rounded-full font-bold text-base hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md min-w-[220px]"
                        >
                            <MessageCircle size={22} className="sm:w-7 sm:h-7" />
                            Chat & Order Now
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <p className="text-xs text-gray-500 mt-2">
                            Browse our menu for cakes & desserts
                        </p>
                        <div className="mt-4 flex flex-wrap justify-center gap-4">
                            <Link to="/cakes">
                                <button className="px-8 py-3.5 rounded-full text-sm sm:text-base bg-gradient-to-r from-pink-400 to-pink-500 text-white hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-200/50 hover:shadow-pink-300/60 hover:scale-105 active:scale-95 flex items-center gap-2 font-extrabold tracking-tight">
                                    🎂 View Cakes
                                </button>
                            </Link>
                            <Link to="/desserts">
                                <button className="px-8 py-3.5 rounded-full text-sm sm:text-base bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-200/50 hover:shadow-blue-300/60 hover:scale-105 active:scale-95 flex items-center gap-2 font-extrabold tracking-tight">
                                    🍨 View Desserts
                                </button>
                            </Link>
                        </div>
                    </motion.div>



                    <OrderNotice />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="pt-6 text-gray-400 text-xs font-medium tracking-widest uppercase italic"
                    >
                        ⭐ 1500+ Happy Customers in Aranthangi
                    </motion.p>
                </div>
            </div>


            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-xl p-4 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute top-6 right-6 p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 transition-colors shadow-md"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsModalOpen(false);
                            }}
                        >
                            <X size={28} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-2xl w-full aspect-square"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={logo}
                                alt="Haaris Cakes - Premium Homemade Bakery in Aranthangi"
                                className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
