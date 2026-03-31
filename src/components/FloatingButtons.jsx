import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
    return (
        <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/919944362457?text=Hello%20I%20want%20to%20order%20a%20cake%20from%20Haaris%20Cake's"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5, type: 'spring' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.5)] border-2 border-white/10 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <MessageCircle size={32} />
                <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold">
                    Order Now
                </span>
            </motion.a>

            {/* Call Button */}
            <motion.a
                href="tel:9944362457"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.5, type: 'spring' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group flex items-center justify-center bg-white text-black p-4 rounded-full shadow-[0_10px_40px_rgba(255,255,255,0.3)] border-2 border-black/10 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Phone size={32} />
                <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold">
                    Call Riswana
                </span>
            </motion.a>
        </div>
    );
};

export default FloatingButtons;
