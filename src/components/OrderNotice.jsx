import React from 'react';
import { motion } from 'framer-motion';

const OrderNotice = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-50 border border-pink-100 text-pink-500 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
    >
      <span className="text-base">⏰</span>
      <span>Orders must be placed at least 5 hours in advance</span>
    </motion.div>
  );
};

export default OrderNotice;
