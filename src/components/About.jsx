import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-secondary/5 relative overflow-hidden">
            {/* Subtle floating circles */}
            <div className="absolute top-1/4 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-[100px]" />

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm uppercase tracking-widest text-secondary font-bold mb-4">Our Story</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        Crafting Sweet Moments <br />
                        <span className="text-gradient-main">Straight from Our Home</span>
                    </h3>
                    
                    <div className="w-24 h-[3px] bg-gradient-main mx-auto mb-10 rounded-full"></div>
                    
                    <p className="text-lg md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                        Haaris Cake's is a home-based bakery run by <span className="text-white font-semibold">Riswana Assan</span> in Aranthangi. 
                        We specialize in customized cakes, brownies, and waffles made with love and premium ingredients.
                    </p>
                    
                    <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-all group">
                            <span className="block text-4xl mb-4 group-hover:scale-110 transition-transform">🍰</span>
                            <span className="font-bold text-lg">Custom Cakes</span>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-all group">
                            <span className="block text-4xl mb-4 group-hover:scale-110 transition-transform">🧇</span>
                            <span className="font-bold text-lg">Waffles</span>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-all group lg:col-span-1 col-span-2">
                            <span className="block text-4xl mb-4 group-hover:scale-110 transition-transform">🍪</span>
                            <span className="font-bold text-lg">Brownies</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
