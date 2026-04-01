import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import ImageModal from "../components/ImageModal";
import logo from "../assets/logo.png";

const placeholderImage = "https://via.placeholder.com/400x300?text=Cake+Image";

const premiumCakes = [
    { name: "Palkova", half: 450, full: 900, image: logo },
    { name: "Rasmalai", half: 450, full: 800, image: null },
    { name: "Rose Milk", half: 400, full: 700, image: null },
    { name: "Pista Chio", half: 500, full: 1000, image: null },
    { name: "Tender Coconut", half: 500, full: 1000, image: null },
    { name: "Gulab Jamoon", half: 450, full: 900, image: null },
    { name: "Gulfi", half: 500, full: 1000, image: null },
    { name: "Kit Kat", half: 700, full: 1400, image: null },
    { name: "White Truffle", half: 700, full: 1400, image: null },
    { name: "Choco Truffle", half: 700, full: 1300, image: null },
    { name: "Choco Almond", half: 500, full: 1000, image: null },
    { name: "Honey Almond", half: 500, full: 1000, image: null },
    { name: "Nutty Bubble", half: 500, full: 900, image: null },
    { name: "Dark Fantasy", half: 400, full: 800, image: null },
    { name: "Ferrero Rocher", half: 900, full: 1800, image: null },
    { name: "Biscoff", half: 700, full: 1400, image: null },
    { name: "Oreo", half: 400, full: 700, image: null },
];

const regularCakes = [
    { name: "Vanilla", half: 300, full: 500, image: null },
    { name: "Pine Apple", half: 300, full: 500, image: null },
    { name: "Mango", half: 300, full: 500, image: null },
    { name: "Strawberry", half: 300, full: 500, image: null },
    { name: "Black Current", half: 400, full: 700, image: null },
    { name: "Blue Berry", half: 400, full: 700, image: null },
    { name: "Butter Scotch", half: 300, full: 600, image: null },
    { name: "Black Forest", half: 300, full: 500, image: null },
    { name: "White Forest", half: 350, full: 600, image: null },
    { name: "Chocolate Cake", half: 400, full: 700, image: null },
];

const ProductCard = ({ item, category, onImageClick }) => {
    const handleOrder = (size) => {
        const message = `Hi, I want to order ${item.name} (${category}) (${size})`;
        const whatsappUrl = `https://wa.me/919944362457?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] shadow-lg shadow-gray-200/50 p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
        >
            <div>
                <div 
                    className="overflow-hidden rounded-2xl mb-6 cursor-pointer"
                    onClick={() => onImageClick(item.image || placeholderImage)}
                >
                    <img
                        src={item.image || placeholderImage}
                        alt={item.name}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-pink-400 transition-colors">
                    {item.name}
                </h3>
                <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center bg-pink-50/50 px-4 py-2 rounded-xl">
                        <span className="text-sm font-medium text-gray-600">½ Kg</span>
                        <span className="text-lg font-bold text-pink-500">₹{item.half}</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50/50 px-4 py-2 rounded-xl">
                        <span className="text-sm font-medium text-gray-600">1 Kg</span>
                        <span className="text-lg font-bold text-blue-500">₹{item.full}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <button
                    onClick={() => handleOrder("½ Kg")}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white border-2 border-pink-100 text-pink-400 rounded-2xl font-bold hover:bg-pink-50 transition-all text-sm"
                >
                    Order ½ Kg
                </button>
                <button
                    onClick={() => handleOrder("1 Kg")}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-2xl font-bold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-sm"
                >
                    <MessageCircle size={18} />
                    Order 1 Kg
                </button>
            </div>
        </motion.div>
    );
};

const Menu = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 pt-28 pb-20">
            <ImageModal 
                isOpen={!!selectedImage} 
                image={selectedImage} 
                onClose={() => setSelectedImage(null)} 
            />
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-400 transition-colors font-medium mb-6"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-800 tracking-tighter">
                        Our Full <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Menu</span>
                    </h1>
                </div>

                {/* Premium Cakes */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Premium Cakes
                        </h2>
                        <div className="h-0.5 flex-grow bg-gradient-to-r from-pink-200 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {premiumCakes.map((cake, idx) => (
                            <ProductCard key={idx} item={cake} category="Premium Cake" onImageClick={setSelectedImage} />
                        ))}
                    </div>
                </section>

                {/* Regular Cakes */}
                <section>
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Regular Cakes
                        </h2>
                        <div className="h-0.5 flex-grow bg-gradient-to-r from-blue-200 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {regularCakes.map((cake, idx) => (
                            <ProductCard key={idx} item={cake} category="Regular Cake" onImageClick={setSelectedImage} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Menu;
