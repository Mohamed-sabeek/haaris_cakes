import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const Location = () => {
    const latitude = "10.172833";
    const longitude = "78.992417";
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=19&output=embed`;
    const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=Haaris+Home+Made+Cake's+Aranthangi`;

    return (
        <section id="location" className="py-24 md:py-32 bg-[#0F0F0F]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Location Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full text-center lg:text-left"
                    >
                        <h2 className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">Visit Our Shop</h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Aranthangi's Favorite <br />
                            <span className="text-gradient-main font-black">Home Bakery</span>
                        </h3>
                        
                        <div className="space-y-6 flex flex-col items-center lg:items-start">
                            {/* Address Card */}
                            <div className="w-full max-w-md lg:max-w-none flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all text-left">
                                <div className="p-3 rounded-xl bg-primary/20 text-primary shrink-0">
                                    <MapPin size={22} className="sm:w-6 sm:h-6" />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-bold text-lg sm:text-xl flex items-center gap-2">
                                        Shop Address <MapPin size={18} className="text-secondary" />
                                    </h4>
                                    <p className="text-white/70 leading-relaxed text-base sm:text-lg font-medium">
                                        44, Veeramakali Amman Kovil St,<br />
                                        Aranthangi, Tamil Nadu 614616
                                    </p>
                                    <div className="flex items-center gap-2 text-green-400 text-sm sm:text-base font-semibold pt-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0"></span>
                                        Available for Pick-up & Delivery
                                    </div>
                                </div>
                            </div>

                            <a
                                href={externalMapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all text-lg pt-4"
                            >
                                Get Directions <Navigation size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Map Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full space-y-6"
                    >
                        {/* Map Wrapper with 400px height and rounded corners */}
                        <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                            <iframe
                                title="Haaris Home Made Cake's Location"
                                src={`https://www.google.com/maps?q=10.172833,78.992417&z=19&output=embed`}
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                loading="lazy"
                                className="rounded-2xl"
                            ></iframe>
                        </div>

                        {/* External Link Button Below Map */}
                        <a 
                            href={externalMapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95 group"
                        >
                            Open in Google Maps 
                            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>

                        {/* Subtle glow behind map */}
                        <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
