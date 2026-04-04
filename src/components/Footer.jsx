import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-gray-100 bg-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-pink-100/30 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-100/30 rounded-full blur-[80px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left transition-all duration-300">
                    <div className="transition-all duration-300">
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">Haaris Cake's</h4>
                        <p className="text-gray-500 max-w-xs">Aranthangi's premium home bakery for cakes, waffles, and brownies.</p>
                    </div>

                    <div className="flex gap-6">
                        <a 
                            href="https://instagram.com/haaris_home_madecakes_atg" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 bg-pink-50 rounded-full text-pink-400 border border-pink-100 hover:bg-pink-100 hover:scale-110 transition-all shadow-sm"
                        >
                            <InstagramIcon size={20} />
                        </a>
                        <a 
                            href="tel:7418362457" 
                            className="p-3 bg-blue-50 rounded-full text-blue-400 border border-blue-100 hover:bg-blue-100 hover:scale-110 transition-all shadow-sm"
                        >
                            <Phone size={20} />
                        </a>
                        <a 
                            href="https://wa.me/917418362457" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 bg-green-50 rounded-full text-green-500 border border-green-100 hover:bg-green-100 hover:scale-110 transition-all shadow-sm"
                        >
                            <MessageCircle size={20} />
                        </a>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Haaris Cake's. All rights reserved.</p>
                    <p className="flex items-center gap-2">Made with <span className="text-pink-400 animate-pulse">💜</span> in Aranthangi</p>
                    <p>Powered by Riswana Assan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
