import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, User } from 'lucide-react';
import { InstagramIcon } from './Icons';
import OrderNotice from './OrderNotice';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-pink-50/50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-pink-200/20 rounded-full blur-[120px] sm:blur-[180px]" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 sm:p-12 md:p-20 rounded-3xl sm:rounded-[3rem] bg-white border border-gray-100 backdrop-blur-xl shadow-soft-lg"
                >
                    <h2 className="text-pink-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">Get In Touch</h2>
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight text-gray-800">Ready to <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Order?</span></h3>
                    
                    <div className="flex flex-col items-center gap-8 mb-12">
                        {/* Name with Icon */}
                        <div className="flex items-center gap-3 text-xl sm:text-2xl font-medium text-gray-800 bg-pink-50 px-6 py-2.5 rounded-full border border-pink-100 shadow-sm">
                            <User className="text-pink-400" size={20} />
                            <span>Riswana Assan</span>
                        </div>

                        {/* Buttons Grid/Stack */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                            <a 
                                href="tel:7418362457" 
                                className="group flex items-center justify-center gap-3 bg-blue-50 text-blue-500 border border-blue-100 px-8 py-4 rounded-full font-bold hover:bg-blue-100 hover:scale-105 transition-all text-base sm:text-lg shadow-md w-full sm:w-auto"
                            >
                                <Phone size={20} className="group-hover:animate-bounce" />
                                74183 62457
                            </a>
                            <a 
                                href="https://instagram.com/haaris_home_madecakes_atg" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 bg-pink-50 text-pink-500 border border-pink-100 px-8 py-4 rounded-full font-bold hover:bg-pink-100 hover:scale-105 transition-all text-base sm:text-lg shadow-md w-full sm:w-auto"
                            >
                                <InstagramIcon size={20} className="group-hover:rotate-12 transition-transform" />
                                Instagram
                            </a>
                        </div>

                    </div>

                    <div className="mb-12">
                        <OrderNotice />
                    </div>

                    {/* WhatsApp Footer */}
                    <div className="p-6 sm:p-8 rounded-2xl bg-green-50 border border-green-100 shadow-sm space-y-4">
                        <p className="text-gray-600 text-sm sm:text-base italic leading-relaxed">
                            "Every cake we bake is a labor of love. We can't wait to be part of your celebrations!"
                        </p>
                        <a 
                            href="https://wa.me/917418362457?text=Hello%20I%20want%20to%20order%20a%20cake%20from%20Haaris%20Cake's" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-lg sm:text-xl font-bold text-green-600 hover:text-green-700 transition-colors group"
                        >
                            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                            <span className="group-hover:underline underline-offset-8 transition-all font-black">Start WhatsApp Chat</span>
                        </a>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
