import { motion } from 'framer-motion';

import cakeIcon from '../assets/cakeIcon.webp';
import waffleIcon from '../assets/waffleIcon.webp';
import brownieIcon from '../assets/brownieIcon.webp';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-pink-50/30 relative overflow-hidden transition-all duration-300">
            {/* Subtle floating circles */}
            <div className="absolute top-1/4 -right-10 w-48 h-48 bg-pink-200/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -left-10 w-48 h-48 bg-blue-200/20 rounded-full blur-[100px]" />

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm uppercase tracking-widest text-pink-400 font-bold mb-4">Our Story</h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-800">
                        Crafting Sweet Moments <br />
                        <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Straight from Our Home</span>
                    </h3>
                    
                    <div className="w-24 h-[3px] bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mb-10 rounded-full"></div>
                    
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
                        Haaris Cake's is a home-based bakery run by <span className="text-gray-800 font-semibold">Riswana Assan</span> in Aranthangi. 
                        With <span className="text-pink-500 font-black italic">5+ years of experience</span>, we specialize in customized cakes, brownies, and waffles made with love and premium ingredients.
                    </p>


                    {/* Trust markers */}
                    <div className="flex flex-col items-center gap-3 mb-12 text-gray-500">
                        <div className="flex flex-wrap justify-center gap-3 mb-2">
                            <span className="text-sm font-bold tracking-wide flex items-center gap-2 text-pink-500 bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100 shadow-sm">
                                ✨ 5+ Years of Baking Excellence
                            </span>
                            <span className="text-sm font-bold tracking-wide flex items-center gap-2 text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 shadow-sm">
                                🎈 Venue Setup Available
                            </span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-2">
                            <span className="text-sm font-medium tracking-wide flex items-center gap-2 opacity-80">
                                <span className="text-pink-400 text-base">✔</span> Freshly made to order
                            </span>
                            <span className="text-sm font-medium tracking-wide flex items-center gap-2 opacity-80">
                                <span className="text-pink-400 text-base">✔</span> Custom designs available
                            </span>
                            <span className="text-sm font-medium tracking-wide flex items-center gap-2 opacity-80">
                                <span className="text-pink-400 text-base">✔</span> Quality ingredients only
                            </span>
                        </div>
                    </div>


                    
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Background subtle depth glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-pink-200 to-blue-200 opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

                        <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-pink-200 transition-all duration-300 group flex flex-col items-center text-center shadow-lg shadow-gray-200/50 hover:scale-105 cursor-default relative overflow-hidden">
                            <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                                <img 
                                    src={cakeIcon} 
                                    alt="Customized birthday cakes from Haaris Cakes in Aranthangi" 
                                    className="w-full h-full object-contain filter drop-shadow-md"
                                />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-gray-800">Custom Cakes</span>
                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">Designed for your special occasions</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-pink-200 transition-all duration-300 group flex flex-col items-center text-center shadow-lg shadow-gray-200/50 hover:scale-105 cursor-default relative overflow-hidden">
                            <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                                <img 
                                    src={waffleIcon} 
                                    alt="Fresh and crispy Belgian waffles in Aranthangi" 
                                    className="w-full h-full object-contain filter drop-shadow-md"
                                />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-gray-800">Waffles</span>
                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">Fresh & crispy delights</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-pink-200 transition-all duration-300 group flex flex-col items-center text-center shadow-lg shadow-gray-200/50 hover:scale-105 cursor-default relative overflow-hidden">
                            <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                                <img 
                                    src={brownieIcon} 
                                    alt="Rich chocolatey fudgy brownies - Haaris Cakes specialty" 
                                    className="w-full h-full object-contain filter drop-shadow-md"
                                />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-gray-800">Brownies</span>
                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">Rich and chocolatey treats</p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
