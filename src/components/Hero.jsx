import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { MessageCircle, X, Heart } from 'lucide-react';
import { PhoneEmojiIcon } from './Icons';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background elements */}
            <div className="absolute top-1/4 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[120px] shadow-[0_0_100px_rgba(236,72,153,0.1)]" />

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
                        {/* Animated Rotating Border */}
                        <div className="absolute -inset-2 bg-gradient-main rounded-full blur-sm opacity-60 animate-[spin_8s_linear_infinite]"></div>
                        
                        {/* Static High-Impact Glow */}
                        <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                        <div className="absolute -inset-4 bg-gradient-main rounded-full blur-2xl opacity-30 animate-pulse"></div>
                        
                        {/* The Logo itself */}
                        <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-main shadow-2xl transition-transform duration-500 group-hover:scale-105">
                            <img
                                src={logo}
                                alt="Haaris Cake's Logo"
                                className="w-full h-full rounded-full object-cover border-4 border-background brightness-110 saturate-[1.1]"
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
                            <span className="text-white">Haaris</span> 
                            <span className="text-gradient-main px-2">Cake's</span>
                        </h1>

                        <div className="flex items-center justify-center gap-4">
                            <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-primary opacity-40"></div>
                            <span className="text-xs md:text-sm font-light uppercase tracking-[0.4em] text-white/40">Home Made with Love</span>
                            <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-secondary opacity-40"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-3"
                    >
                        <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold leading-tight tracking-tight">
                            Fresh Homemade Cakes in Aranthangi 🎂
                        </p>
                        <p className="text-base md:text-lg text-white/80">
                            Order Now for Birthdays & Special Occasions
                        </p>
                        <div className="inline-block py-1 px-4 bg-gradient-main rounded-full shadow-lg shadow-pink-500/20">
                            <span className="text-sm md:text-base font-bold text-white">Same-day orders available 💜</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70"
                    >
                        <span className="flex items-center gap-2">
                            <span className="text-primary">📍</span> Available only in Aranthangi
                        </span>
                        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20"></div>
                        <span className="flex items-center gap-2">
                            <span className="text-secondary">🚚</span> Pickup & Local Delivery Available
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
                            className="group relative flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 sm:py-5 rounded-full font-bold text-base hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-xl min-w-[220px]"
                        >
                            <PhoneEmojiIcon size={24} className="sm:w-8 sm:h-8 transform -rotate-12" />
                            Call for Orders
                        </a>
                        
                        <a
                            href="https://wa.me/919944362457?text=Hello%20I%20want%20to%20order%20a%20cake%20from%20Haaris%20Cake's"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-center gap-3 bg-gradient-main text-white px-8 py-4 sm:py-5 rounded-full font-bold text-base hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/30 glow-pink min-w-[220px]"
                        >
                            <MessageCircle size={22} className="sm:w-7 sm:h-7" />
                            Chat & Order Now
                        </a>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="pt-6 text-white/50 text-xs font-medium tracking-widest uppercase italic"
                    >
                        ⭐ 100+ Happy Customers in Aranthangi
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
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
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
                                alt="Logo Full View"
                                className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
