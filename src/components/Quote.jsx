import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Quote = () => {
    return (
        <section className="py-20 bg-background relative overflow-hidden border-y border-white/5">
            <div className="absolute inset-0 bg-gradient-main opacity-5 blur-[100px]" />
            
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex justify-center mb-6">
                        <Sparkles className="text-secondary w-12 h-12 md:w-16 md:h-16 drop-shadow-glow" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif italic text-white/90 leading-tight">
                        "The secret ingredient is always <span className="text-gradient-main font-bold">love</span>"
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default Quote;
