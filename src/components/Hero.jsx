import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { Phone, MessageCircle, X, Heart } from 'lucide-react';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background elements */}
            <div className="absolute top-1/4 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[120px] shadow-[0_0_100px_rgba(236,72,153,0.1)]" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="mb-14 relative"
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
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-main shadow-2xl">
                            <img
                                src={logo}
                                alt="Haaris Cake's Logo"
                                className="w-full h-full rounded-full object-cover border-4 border-background brightness-110 saturate-[1.1]"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl sm:text-6xl md:text-[8rem] font-black tracking-tighter mb-4 leading-none"
                >
                    <span className="text-white">Haaris</span> 
                    <br className="md:hidden" />
                    <span className="text-gradient-main px-2">Cake's</span>
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-center gap-4 mb-8"
                >
                    <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-primary"></div>
                    <span className="text-lg md:text-2xl font-light uppercase tracking-[0.3em] text-white/40">Home Made</span>
                    <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-secondary"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed flex items-center justify-center flex-wrap gap-x-2"
                >
                    <span>Freshly baked with love</span>
                    <Heart className="inline text-secondary fill-secondary" size={20} />
                    <span>in Aranthangi.</span>
                    <br className="hidden md:block w-full" />
                    <span className="text-white/60 text-xs sm:text-sm md:text-lg w-full">Custom cakes, waffles & brownies made for your special moments.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4"
                >
                    <a
                        href="tel:9944362457"
                        className="group relative flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-2xl w-full sm:w-auto"
                    >
                        <Phone size={20} className="sm:w-6 sm:h-6" />
                        Call Now
                    </a>
                    
                    <a
                        href="https://wa.me/919944362457?text=Hello%20I%20want%20to%20order%20a%20cake%20from%20Haaris%20Cake's"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center gap-3 bg-gradient-main text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:scale-110 transition-all duration-300 shadow-[0_0_50px_-12px_rgba(236,72,153,0.5)] glow-pink w-full sm:w-auto"
                    >
                        <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                        WhatsApp Order
                    </a>
                </motion.div>
            </div>

            {/* Logo Lightbox Modal */}
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
