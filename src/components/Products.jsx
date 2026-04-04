import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight, ShoppingBag } from 'lucide-react';

import { Link } from 'react-router-dom';
import ImageModal from './ImageModal';
import cakeImage from '../assets/cake.webp';
import waffleImage from '../assets/waffles.webp';
import brownieImage from '../assets/brownies.webp';

const products = [
    {
        id: 1,
        name: 'Chocolate Cake',
        description: 'Rich, moist chocolate sponge with premium ganache.',
        image: cakeImage,
        price: 'Best Seller ✨',
        link: '/cakes'
    },
    {
        id: 2,
        name: 'Belgian Waffles',
        description: 'Crispy on the outside, fluffy inside. Served with premium toppings and love.',
        image: waffleImage,
        price: 'Classic Favorite 🧇',
        link: '/desserts'
    },
    {
        id: 3,
        name: 'Fudgy Brownies',
        description: 'Rich, gooey, and loaded with chocolate. The ultimate comfort treat.',
        image: brownieImage,
        price: 'Premium Choice 🍫',
        link: '/desserts'
    }
];

const Products = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="products" className="py-24 md:py-32 bg-blue-50/50">
            <ImageModal 
                isOpen={!!selectedImage} 
                image={selectedImage} 
                onClose={() => setSelectedImage(null)} 
            />
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm uppercase tracking-widest text-blue-400 font-bold mb-4"
                    >
                        Our Menu
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold text-gray-800"
                    >
                        Delicious <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Creations</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            id={product.name.toLowerCase().replace(/\s+/g, '-')}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 scroll-mt-24"
                        >
                            <Link 
                                to={product.link}
                                className="relative aspect-[4/5] overflow-hidden cursor-pointer group/image block"
                            >
                                <img
                                    src={product.image}
                                    alt={`${product.name} from Haaris Cakes in Aranthangi`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-40 group-hover/image:opacity-60 transition-opacity" />
                                
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/50 text-xs font-bold text-gray-800 shadow-sm">
                                        {product.price}
                                    </span>
                                </div>
                            </Link>


                            <div className="p-8">
                                <Link to={product.link}>
                                    <h4 className="text-2xl font-bold mb-3 text-gray-800 hover:text-pink-400 transition-colors cursor-pointer">
                                        {product.name}
                                    </h4>
                                </Link>
                                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                                    {product.description}
                                </p>
                                
                                <Link
                                    to={product.link}
                                    className="flex items-center justify-center gap-2 w-full py-4.5 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-2xl font-bold transition-all shadow-md hover:shadow-lg hover:scale-105"
                                >
                                    <ShoppingBag size={20} />
                                    Order Now
                                </Link>
                            </div>

                        </motion.div>
                    ))}
                </div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-6"
                >
                    <Link
                        to="/cakes"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-10 py-4.5 rounded-full font-extrabold shadow-lg shadow-pink-200/50 hover:shadow-pink-300/60 hover:scale-105 hover:from-pink-500 hover:to-pink-600 active:scale-95 transition-all duration-300 group"
                    >
                        🎂 View Cakes
                        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/desserts"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white px-10 py-4.5 rounded-full font-extrabold shadow-lg shadow-blue-200/50 hover:shadow-blue-300/60 hover:scale-105 hover:from-blue-500 hover:to-blue-600 active:scale-95 transition-all duration-300 group"
                    >
                        🍨 View Desserts
                        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>


            </div>
        </section>
    );
};

export default Products;
