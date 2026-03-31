import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './Icons';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
                    <div>
                        <h4 className="text-2xl font-bold text-gradient-main mb-2">Haaris Cake's</h4>
                        <p className="text-white/40 max-w-xs">Aranthangi's premium home bakery for cakes, waffles, and brownies.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://instagram.com/haaris_home_madecakes_atg" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-secondary/20 hover:text-secondary border border-white/10 transition-all">
                            <InstagramIcon size={20} />
                        </a>
                        <a href="tel:9944362457" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary border border-white/10 transition-all">
                            <Phone size={20} />
                        </a>
                        <a href="https://wa.me/919944362457" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-green-500/20 hover:text-green-500 border border-white/10 transition-all">
                            <MessageCircle size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
                    <p>&copy; {new Date().getFullYear()} Haaris Cake's. All rights reserved.</p>
                    <p className="flex items-center gap-2">Made with <span className="text-secondary animate-pulse">💜</span> in Aranthangi</p>
                    <p>Powered by Riswana Assan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
