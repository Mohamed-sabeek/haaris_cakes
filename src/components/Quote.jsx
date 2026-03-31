import React from 'react';
import { motion } from 'framer-motion';

const Quote = () => {
    return (
        <section className="py-20 bg-background relative overflow-hidden border-y border-white/5">
            <div className="absolute inset-0 bg-gradient-main opacity-5 blur-[100px]" />
            
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-4xl sm:text-5xl md:text-6xl mb-6 block drop-shadow-lg">✨</span>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif italic text-white/90 leading-tight">
                        "The secret ingredient is always <span className="text-gradient-main font-bold">love</span>"
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default Quote;
