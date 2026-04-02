import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, ShoppingBag, Search, X } from "lucide-react";
import ImageModal from "../components/ImageModal";

// Assets
import brownieImage from "../assets/brownies.webp";
import waffleImage from "../assets/waffles.webp";
import cakeBowlImage from "../assets/cake.webp";
import bunImage from "../assets/vanilla.webp";
import hotChocoImage from "../assets/chocoTruffle.webp";
import pistaChocoImage from "../assets/pista.webp";

const dessertCategories = [
    {
        title: "Brownies",
        items: [
            { name: "Brownie Special", price: 60, image: brownieImage, isBestSeller: true, badgeText: "Best Seller ✨" },
            { name: "Triple Chocolate", price: 80, image: brownieImage, isBestSeller: true, badgeText: "Must Try 🔥" },
            { name: "Double Chocolate", price: 70, image: brownieImage },
            { name: "Hot Chocolate", price: 120, image: hotChocoImage },
        ]
    },
    {
        title: "Buns",
        items: [
            { name: "Korean Cream Cheese Bun", price: 50, image: bunImage, isBestSeller: true, badgeText: "Favorite 💜" },
        ]
    },
    {
        title: "Waffles",
        items: [
            { name: "Triple Chocolate", price: 150, image: waffleImage, isBestSeller: true, badgeText: "Best Seller ✨" },
            { name: "Blueberry", price: 120, image: waffleImage },
        ]
    },
    {
        title: "Cake Bowls",
        items: [
            { name: "Brownie Chocolate Bowl", price: 250, image: brownieImage, isBestSeller: true, badgeText: "Premium Choice 🌟" },
            { name: "Chocolate Cake Bowl", price: 200, image: cakeBowlImage },
        ]
    },
    {
        title: "Hot Chocolate",
        items: [
            { name: "Triple Chocolate", price: 100, image: hotChocoImage, isBestSeller: true },
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
            className="bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-lg shadow-gray-200/50 p-3 sm:p-5 lg:p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
        >
            <div>
                <div 
                    className="overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-6 cursor-pointer relative"
                    onClick={() => onImageClick(item.image)}
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {item.isBestSeller && (
                        <div className="absolute top-3 left-3">
                            <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/50 text-[10px] sm:text-xs font-bold text-gray-800 shadow-sm">
                                {item.badgeText || "Best Seller ✨"}
                            </span>
                        </div>
                    )}
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-4 group-hover:text-pink-400 transition-colors line-clamp-1">
                    {item.name}
                </h3>
                <div className="flex items-center justify-between bg-pink-50/50 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                    <span className="text-lg sm:text-xl font-black text-pink-500">₹{item.price}</span>
                    <span className="text-[10px] sm:text-xs font-medium text-gray-500">
                        Delivery above ₹300
                    </span>
                </div>
            </div>

            <button
                onClick={handleOrder}
                className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3.5 lg:py-4 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-xl sm:rounded-2xl font-bold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-xs sm:text-sm lg:text-base"
            >
                <ShoppingBag size={18} className="hidden sm:block" />
                Order Now
            </button>
        </motion.div>
    );
};

const Desserts = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCategories = dessertCategories.map(category => ({
        ...category,
        items: category.items.filter(item => 
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.items.length > 0);

    const hasResults = filteredCategories.length > 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 pt-28 pb-20">
            <ImageModal 
                isOpen={!!selectedImage} 
                image={selectedImage} 
                onClose={() => setSelectedImage(null)} 
            />
            
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-pink-400 transition-colors font-medium mb-6"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-800 tracking-tighter">
                        Sweet <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Desserts</span>
                    </h1>
                </div>

                {/* Delivery Banner & Search Sticky Section */}
                <div className="sticky top-20 z-40 -mx-6 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-pink-100/20 shadow-sm transition-all mb-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <motion.div 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-100 text-pink-600 text-xs sm:text-sm font-bold whitespace-nowrap"
                                >
                                    <span className="animate-bounce">🚚</span>
                                    Free Delivery above ₹300
                                </motion.div>
                                
                                <div className="relative group flex-grow max-w-2xl">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-pink-400 transition-colors">
                                        <Search size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search for your favorite dessert..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="block w-full pl-12 pr-12 py-3 bg-white border-2 border-gray-100 rounded-[1.2rem] sm:rounded-[2rem] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-200 focus:ring-4 focus:ring-pink-50 transition-all shadow-lg shadow-gray-100/50"
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
                            </div>
                            
                            {!searchQuery && (
                                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    <span className="text-[10px] sm:text-xs font-medium text-gray-500 whitespace-nowrap uppercase tracking-wider">Suggested:</span>
                                    <div className="flex gap-2">
                                        {[
                                            "Brownies", "Waffles", "Triple Chocolate", "Korean Bun", 
                                            "Cake Bowl", "Hot Chocolate", "Blueberry"
                                        ].map((suggestion) => (
                                            <button
                                                key={suggestion}
                                                onClick={() => setSearchQuery(suggestion)}
                                                className="px-3 py-1.5 rounded-full bg-pink-50 text-pink-500 text-[10px] sm:text-xs font-bold hover:bg-pink-100 transition-all border border-pink-100 flex items-center gap-1 shadow-sm whitespace-nowrap"
                                            >
                                                ✨ {suggestion}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Categories & Results */}
                {hasResults ? (
                    <div className="space-y-20">
                        {filteredCategories.map((category, idx) => (
                            <section key={idx}>
                                <div className="flex items-center gap-4 mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                        {category.title}
                                    </h2>
                                    <div className="h-0.5 flex-grow bg-gradient-to-r from-pink-200 to-transparent"></div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                                    {category.items.map((item, i) => (
                                        <DessertCard key={i} item={item} onImageClick={setSelectedImage} />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-white/50 rounded-[3rem] border-2 border-dashed border-gray-200"
                    >
                        <div className="text-5xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No desserts found</h3>
                        <p className="text-gray-500">We couldn't find any treats matching "{searchQuery}"</p>
                        <button 
                            onClick={() => setSearchQuery("")}
                            className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-full font-bold shadow-md hover:shadow-lg transition-all"
                        >
                            Clear Search
                        </button>
                    </motion.div>
                )}

                {/* Custom Order Section */}
                {!searchQuery && (
                    <div className="mt-24 p-8 sm:p-16 rounded-[3rem] bg-gradient-to-br from-pink-50 to-blue-50 border border-white shadow-xl relative overflow-hidden text-center group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200/20 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-pink-300/30 transition-all duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full -ml-32 -mb-32 blur-3xl group-hover:bg-blue-300/30 transition-all duration-700"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">Need a custom <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent underline decoration-pink-200 decoration-8 underline-offset-4">dessert box?</span></h3>
                            <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                                We curate special gift boxes for birthdays, corporate events, and celebrations! Let us make your sweet moments more memorable.
                            </p>
                            <a 
                                href="https://wa.me/919944362457?text=Hi, I want to inquire about a custom dessert box"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-400 to-blue-400 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-pink-200/50 hover:scale-105 active:scale-95 transition-all text-lg"
                            >
                                <MessageCircle size={24} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Desserts;
