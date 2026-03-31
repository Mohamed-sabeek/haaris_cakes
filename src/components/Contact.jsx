import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, User } from 'lucide-react';
import { InstagramIcon } from './Icons';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-secondary/10 rounded-full blur-[120px] sm:blur-[180px]" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 sm:p-12 md:p-20 rounded-3xl sm:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl glow-purple"
                >
                    <h2 className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">Get In Touch</h2>
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">Ready to <span className="text-gradient-main">Order?</span></h3>
                    
                    <div className="flex flex-col items-center gap-8 mb-12">
                        {/* Name with Icon */}
                        <div className="flex items-center gap-3 text-xl sm:text-2xl font-medium text-white/90 bg-white/5 px-6 py-2 rounded-full border border-white/5">
                            <User className="text-primary" size={20} />
                            <span>Riswana Assan</span>
                        </div>

                        {/* Buttons Grid/Stack */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                            <a 
                                href="tel:9944362457" 
                                className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all text-base sm:text-lg shadow-xl w-full sm:w-auto"
                            >
                                <Phone size={20} className="group-hover:animate-bounce" />
                                99443 62457
                            </a>
                            <a 
                                href="https://instagram.com/haaris_home_madecakes_atg" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 bg-gradient-main text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all text-base sm:text-lg glow-pink w-full sm:w-auto"
                            >
                                <InstagramIcon size={20} className="group-hover:rotate-12 transition-transform" />
                                Instagram
                            </a>
                        </div>
                    </div>

                    {/* WhatsApp Footer */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/5 space-y-4">
                        <p className="text-white/60 text-sm sm:text-base italic leading-relaxed">
                            "Every cake we bake is a labor of love. We can't wait to be part of your celebrations!"
                        </p>
                        <a 
                            href="https://wa.me/919944362457?text=Hello%20I%20want%20to%20order%20a%20cake%20from%20Haaris%20Cake's" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-lg sm:text-xl font-bold text-secondary hover:text-primary transition-colors group"
                        >
                            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                            <span className="group-hover:underline underline-offset-8 transition-all">Start WhatsApp Chat</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
