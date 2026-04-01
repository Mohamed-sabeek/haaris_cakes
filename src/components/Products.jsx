import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ImageModal from './ImageModal';
import cakeImage from '../assets/cake.png';
import waffleImage from '../assets/waffles.png';
import brownieImage from '../assets/brownies.png';

const products = [
    {
        id: 1,
        name: 'Custom Cakes',
        description: 'Bespoke designs for birthdays, weddings, and anniversaries. Every bite is a celebration.',
        image: cakeImage,
        price: 'Starting from ₹450/kg'
    },
    {
        id: 2,
        name: 'Belgian Waffles',
        description: 'Crispy on the outside, fluffy inside. Served with premium toppings and love.',
        image: waffleImage,
        price: 'Starting from ₹99'
    },
    {
        id: 3,
        name: 'Fudgy Brownies',
        description: 'Rich, gooey, and loaded with chocolate. The ultimate comfort treat.',
        image: brownieImage,
        price: 'Box starting from ₹150'
    }
];

const Products = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="products" className="py-24 md:py-32 bg-background">
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
                        className="text-sm uppercase tracking-widest text-secondary font-bold mb-4"
                    >
                        Our Menu
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        Delicious <span className="text-gradient-main">Creations</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-secondary/30 transition-all duration-500"
                        >
                            <div 
                                className="relative aspect-[4/5] overflow-hidden cursor-pointer group/image"
                                onClick={() => setSelectedImage(product.image)}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/image:opacity-80 transition-opacity" />
                                
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-sm font-medium text-white/90">
                                        {product.price}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <h4 className="text-2xl font-bold mb-3 group-hover:text-secondary mb-1 transition-colors">{product.name}</h4>
                                <p className="text-white/60 text-sm mb-8 leading-relaxed">
                                    {product.description}
                                </p>
                                
                                <a
                                    href={`https://wa.me/919944362457?text=Hello%20I%20want%20to%20order%20${product.name.replace(' ', '%20')}%20from%20Haaris%20Cake's`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-white/10 hover:bg-gradient-main rounded-2xl font-bold transition-all group-hover:glow-pink"
                                >
                                    <MessageCircle size={20} />
                                    Order on WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
