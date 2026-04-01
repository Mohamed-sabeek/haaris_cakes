import React from 'react';
import { motion } from 'framer-motion';

const Quote = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden border-y border-pink-100/50">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-blue-50 opacity-50 blur-[100px]" />
            
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-4xl sm:text-5xl md:text-6xl mb-8 block drop-shadow-sm">✨</span>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif italic text-gray-800 leading-tight">
                        "The secret ingredient is always <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent font-black">love</span>"
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default Quote;
