import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, ShoppingBag } from "lucide-react";
import ImageModal from "../components/ImageModal";

// Assets
import brownieImage from "../assets/brownies.webp";
import waffleImage from "../assets/waffles.webp";
import cakeBowlImage from "../assets/cake.webp";
import bunImage from "../assets/vanilla.png";
import hotChocoImage from "../assets/chocoTruffle.webp";
import pistaChocoImage from "../assets/pista.webp";

const dessertCategories = [
    {
        title: "Brownies",
        items: [
            { name: "Brownie Special", price: 60, image: brownieImage },
            { name: "Triple Chocolate", price: 80, image: brownieImage },
            { name: "Double Chocolate", price: 70, image: brownieImage },
            { name: "Hot Chocolate", price: 120, image: hotChocoImage },
        ]
    },
    {
        title: "Buns",
        items: [
            { name: "Korean Cream Cheese Bun", price: 50, image: bunImage },
        ]
    },
    {
        title: "Waffles",
        items: [
            { name: "Triple Chocolate", price: 150, image: waffleImage },
            { name: "Blueberry", price: 120, image: waffleImage },
        ]
    },
    {
        title: "Cake Bowls",
        items: [
            { name: "Brownie Chocolate Bowl", price: 250, image: brownieImage },
            { name: "Chocolate Cake Bowl", price: 200, image: cakeBowlImage },
        ]
    },
    {
        title: "Hot Chocolate",
        items: [
            { name: "Triple Chocolate", price: 100, image: hotChocoImage },
            { name: "Pista Choco", price: 140, image: pistaChocoImage },
        ]
    }
];

const DessertCard = ({ item, onImageClick }) => {
    const handleOrder = () => {
        const message = `Hi, I want to order ${item.name} from your Desserts menu.`;
        const whatsappUrl = `https://wa.me/919944362457?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg shadow-pink-100/50 p-2.5 sm:p-4 border border-white/50 hover:shadow-xl transition-all duration-300 flex flex-col group"
        >
            <div 
                className="overflow-hidden rounded-xl sm:rounded-2xl mb-3 cursor-pointer relative aspect-square sm:aspect-video"
                onClick={() => onImageClick(item.image)}
            >
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[8px] sm:text-[10px] font-bold text-gray-800 shadow-sm border border-pink-100">
                    Dessert ✨
                </div>
            </div>

            <div className="flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 group-hover:text-pink-400 transition-colors line-clamp-1">
                        {item.name}
                    </h3>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-base sm:text-xl font-black text-pink-500">₹{item.price}</span>
                        <span className="text-[8px] sm:text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                            Delivery above ₹300
                        </span>
                    </div>
                </div>

                <button
                    onClick={handleOrder}
                    className="flex items-center justify-center gap-2 w-full py-2 sm:py-3 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-xl sm:rounded-2xl font-bold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-xs sm:text-sm"
                >
                    <ShoppingBag size={16} className="hidden sm:block" />
                    Order Now
                </button>
            </div>
        </motion.div>
    );
};

const Desserts = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 pt-28 pb-20 overflow-x-hidden">
            <ImageModal 
                isOpen={!!selectedImage} 
                image={selectedImage} 
                onClose={() => setSelectedImage(null)} 
            />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-400 transition-colors font-medium mb-4 sm:mb-6"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-800 tracking-tighter">
                        Sweet <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Desserts</span>
                    </h1>
                </div>

                {/* Delivery Banner */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-10 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg shadow-pink-200/50"
                >
                    <span className="text-lg animate-bounce">🚚</span>
                    <span className="font-bold text-sm sm:text-base">Delivery available for orders above ₹300</span>
                </motion.div>

                {/* Categories */}
                <div className="space-y-16">
                    {dessertCategories.map((category, idx) => (
                        <section key={idx}>
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-xl sm:text-3xl font-bold text-gray-800">
                                    {category.title}
                                </h2>
                                <div className="h-1 flex-grow bg-gradient-to-r from-pink-200 to-transparent rounded-full opacity-50"></div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10">
                                {category.items.map((item, i) => (
                                    <DessertCard key={i} item={item} onImageClick={setSelectedImage} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Contact Footer */}
                <div className="mt-20 p-8 sm:p-12 rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white shadow-xl text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Want something else?</h3>
                    <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                        We take custom orders for celebrations! Contact us on WhatsApp for special requests and bulk orders.
                    </p>
                    <a 
                        href="https://wa.me/919944362457"
                        target="_blank"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-400 to-blue-400 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all text-sm sm:text-base"
                    >
                        <MessageCircle size={20} />
                        Chat with us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Desserts;
