import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const VenueSetup = () => {
    const [hovered, setHovered] = useState(null);

    const videos = [
        { id: 1, src: '/videos/setup1.mp4' },
        { id: 2, src: '/videos/setup2.mp4' },
    ];

    return (
        <div className="min-h-screen bg-pink-50 pt-32 pb-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-gray-800 mb-4 tracking-tight">
                        Venue <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Setup</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                        Beautiful decorations for birthdays, anniversaries & special occasions
                    </p>
                </motion.div>

                {/* Recent Setups Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                        <span className="w-12 h-1 bg-pink-400 rounded-full"></span>
                        Our Recent Setups
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {videos.map((video) => (
                            <motion.div 
                                key={video.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative group rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px]"
                                onMouseEnter={() => setHovered(video.id)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {/* Blurred Background Layer */}
                                <video
                                    src={video.src}
                                    className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-40 pointer-events-none"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="none"
                                />

                                {/* Main Video Layer */}
                                <video
                                    src={video.src}
                                    className="relative w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 z-10"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="none"
                                    controls={hovered === video.id}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-block p-1 bg-gradient-to-r from-pink-400 via-blue-400 to-pink-400 rounded-full animate-gradient-x mb-8">
                        <a 
                            href="https://wa.me/917418362457?text=Hi%20I%20want%20venue%20setup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-white hover:bg-transparent hover:text-white text-gray-800 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 group shadow-xl"
                        >
                            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
                            Book Venue Setup
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm italic">
                        Contact us to bring your dream celebration to life!
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default VenueSetup;
