import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Search, X } from "lucide-react";
import ImageModal from "../components/ImageModal";
import palkova from "../assets/palkova.webp";
import rasmalai from "../assets/rasmalai.webp";
import rosemilk from "../assets/roseMilk.webp";
import pista from "../assets/pista.webp";
import tender from "../assets/tender.webp";
import gulabJamoon from "../assets/gulabJamoon.webp";
import gulfi from "../assets/gulfi.webp";
import kitkat from "../assets/kitkat.webp";
import whiteTruffle from "../assets/whiteTruffle.webp";
import chocoTruffle from "../assets/chocoTruffle.webp";
import chocoAlmond from "../assets/chocoAlmond.webp";
import honeyAlmond from "../assets/honeyAlmond.webp";
import nuttyBubble from "../assets/nuttyBubble.webp";
import darkFantasy from "../assets/darkFantasy.webp";
import ferreroRocher from "../assets/ferreroRocher.webp";
import biscoff from "../assets/biscoff.webp";
import oreo from "../assets/oreo.webp";
import vanilla from "../assets/vanilla.webp";
import pineapple from "../assets/pineapple.webp";
import mango from "../assets/mango.webp";
import strawberry from "../assets/strawberry.webp";
import blackCurrent from "../assets/blackCurrent.webp";
import blueBerry from "../assets/blueBerry.webp";
import butterScotch from "../assets/butterScotch.webp";
import blackForest from "../assets/blackForest.webp";
import whiteForest from "../assets/whiteForest.webp";
import chocolateCake from "../assets/chocolateCake.webp";



const placeholderImage = "https://via.placeholder.com/400x300?text=Cake+Image";

const premiumCakes = [
    { name: "Palkova", half: 450, full: 900, image: palkova },
    { name: "Rasmalai", half: 450, full: 800, image: rasmalai },
    { name: "Rose Milk", half: 400, full: 700, image: rosemilk },
    { name: "Pista Chio", half: 500, full: 1000, image: pista },
    { name: "Tender Coconut", half: 500, full: 1000, image: tender },
    { name: "Gulab Jamoon", half: 450, full: 900, image: gulabJamoon },
    { name: "Gulfi", half: 500, full: 1000, image: gulfi },
    { name: "Kit Kat", half: 700, full: 1400, image: kitkat },
    { name: "White Truffle", half: 700, full: 1400, image: whiteTruffle },
    { name: "Choco Truffle", half: 700, full: 1300, image: chocoTruffle },
    { name: "Choco Almond", half: 500, full: 1000, image: chocoAlmond },
    { name: "Honey Almond", half: 500, full: 1000, image: honeyAlmond },
    { name: "Nutty Bubble", half: 500, full: 900, image: nuttyBubble },
    { name: "Dark Fantasy", half: 400, full: 800, image: darkFantasy },
    { name: "Ferrero Rocher", half: 900, full: 1800, image: ferreroRocher },
    { name: "Biscoff", half: 700, full: 1400, image: biscoff },
    { name: "Oreo", half: 400, full: 700, image: oreo },
];

const regularCakes = [
    { name: "Vanilla", half: 300, full: 500, image: vanilla },
    { name: "Pine Apple", half: 300, full: 500, image: pineapple },
    { name: "Mango", half: 300, full: 500, image: mango },
    { name: "Strawberry", half: 300, full: 500, image: strawberry },
    { name: "Black Current", half: 400, full: 700, image: blackCurrent },
    { name: "Blue Berry", half: 400, full: 700, image: blueBerry },
    { name: "Butter Scotch", half: 300, full: 600, image: butterScotch },
    { name: "Black Forest", half: 300, full: 500, image: blackForest },
    { name: "White Forest", half: 350, full: 600, image: whiteForest },
    { name: "Chocolate Cake", half: 400, full: 700, image: chocolateCake },
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
            className="bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-lg shadow-gray-200/50 p-3 sm:p-5 lg:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
        >
            <div>
                <div 
                    className="overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-6 cursor-pointer"
                    onClick={() => onImageClick(item.image || placeholderImage)}
                >
                    <img
                        src={item.image || placeholderImage}
                        alt={`${item.name} from Haaris Cakes in Aranthangi`}
                        className="w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-4 group-hover:text-pink-400 transition-colors line-clamp-1">
                    {item.name}
                </h3>
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <div className="flex justify-between items-center bg-pink-50/50 px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl">
                        <span className="text-[10px] sm:text-sm font-medium text-gray-600">½ Kg</span>
                        <span className="text-sm sm:text-base lg:text-lg font-bold text-pink-500">₹{item.half}</span>
                    </div>
                    <div className="flex justify-between items-center bg-blue-50/50 px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl">
                        <span className="text-[10px] sm:text-sm font-medium text-gray-600">1 Kg</span>
                        <span className="text-sm sm:text-base lg:text-lg font-bold text-blue-500">₹{item.full}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-1.5 sm:gap-2">
                <button
                    onClick={() => handleOrder("½ Kg")}
                    className="flex items-center justify-center gap-2 w-full py-2 sm:py-2.5 lg:py-3 bg-white border-2 border-pink-100 text-pink-400 rounded-xl sm:rounded-2xl font-bold hover:bg-pink-50 transition-all text-[10px] sm:text-xs lg:text-sm"
                >
                    Order ½ Kg
                </button>
                <button
                    onClick={() => handleOrder("1 Kg")}
                    className="flex items-center justify-center gap-2 w-full py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-xl sm:rounded-2xl font-bold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-[10px] sm:text-xs lg:text-sm"
                >
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" />
                    Order 1 Kg
                </button>
            </div>
        </motion.div>
    );
};

const Menu = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPremiumCakes = premiumCakes.filter(cake =>
        cake.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredRegularCakes = regularCakes.filter(cake =>
        cake.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const hasResults = filteredPremiumCakes.length > 0 || filteredRegularCakes.length > 0;


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
                        Our <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Cakes</span>
                    </h1>
                </div>

                {/* Custom Order Message */}
                <div className="mb-8 flex">
                    <div className="px-5 py-3 rounded-[2rem] bg-gradient-to-r from-pink-50 to-blue-50 border border-gray-100 shadow-sm text-sm text-gray-700 max-w-2xl">
                        🎂 Need a bigger cake? 
                        <span className="font-semibold text-pink-500">
                            {" "}For orders above 1 Kg, contact us on WhatsApp to customize your order
                        </span>
                    </div>
                </div>

                {/* Sticky Header Section */}
                <div className="sticky top-20 z-40 -mx-6 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-pink-100/20 shadow-sm transition-all mb-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col gap-4">
                            <div className="relative group max-w-2xl">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-pink-400 transition-colors">
                                    <Search size={20} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search for your favorite cake..."

                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="block w-full pl-12 pr-12 py-3.5 bg-white border-2 border-gray-100 rounded-[1.5rem] sm:rounded-[2rem] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-200 focus:ring-4 focus:ring-pink-50 transition-all shadow-lg shadow-gray-100/50"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-pink-400 transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                )}
                            </div>
                            
                            {!searchQuery && (
                                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    <span className="text-[10px] sm:text-sm font-medium text-gray-500 whitespace-nowrap">Suggested:</span>
                                    <div className="flex gap-2">
                                        {[
                                            "Rasmalai", "Black Forest", "Kit Kat", "Gulfi", 
                                            "Choco Truffle", "Dark Fantasy", "Oreo", "Vanilla", 
                                            "Strawberry", "Butter Scotch", "Chocolate"
                                        ].map((suggestion) => (
                                            <button
                                                key={suggestion}
                                                onClick={() => setSearchQuery(suggestion)}
                                                className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-pink-50 text-pink-500 text-[10px] sm:text-xs font-bold hover:bg-pink-100 transition-all border border-pink-100 flex items-center gap-1 shadow-sm whitespace-nowrap"
                                            >
                                                ✨ {suggestion}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {searchQuery && (
                                <div className="text-xs text-gray-500 animate-fade-in flex items-center gap-2">
                                    <span className="font-bold text-pink-400">Filtering:</span> "{searchQuery}"
                                    <span className="bg-pink-50 px-2 py-0.5 rounded text-[10px]">{(filteredPremiumCakes.length + filteredRegularCakes.length)} cakes found</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>



                {/* Premium Cakes */}
                {filteredPremiumCakes.length > 0 && (
                    <section className="mb-20">
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                Premium Cakes
                            </h2>
                            <div className="h-0.5 flex-grow bg-gradient-to-r from-pink-200 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
                            {filteredPremiumCakes.map((cake, idx) => (
                                <ProductCard key={idx} item={cake} category="Premium Cake" onImageClick={setSelectedImage} />
                            ))}
                        </div>
                    </section>
                )}


                {/* Regular Cakes */}
                {filteredRegularCakes.length > 0 && (
                    <section className="mb-20">
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                Regular Cakes
                            </h2>
                            <div className="h-0.5 flex-grow bg-gradient-to-r from-blue-200 to-transparent"></div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
                            {filteredRegularCakes.map((cake, idx) => (
                                <ProductCard key={idx} item={cake} category="Regular Cake" onImageClick={setSelectedImage} />
                            ))}
                        </div>
                    </section>
                )}

                {!hasResults && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-white/50 rounded-[3rem] border-2 border-dashed border-gray-200"
                    >
                        <div className="text-5xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No cakes found</h3>
                        <p className="text-gray-500">We couldn't find any cakes matching "{searchQuery}"</p>
                        <button 
                            onClick={() => setSearchQuery("")}
                            className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-full font-bold shadow-md hover:shadow-lg transition-all"
                        >
                            Clear Search
                        </button>
                    </motion.div>
                )}

            </div>
        </div>
    );
};

export default Menu;
