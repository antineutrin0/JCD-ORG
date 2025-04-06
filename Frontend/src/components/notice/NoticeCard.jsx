import React from 'react';
import { motion } from 'framer-motion';

export default function NoticeCard({ title, date, description }) {
  return (
    <motion.div 
      className="bg-white shadow-md p-4 rounded-xl border-l-4 border-green-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-2 text-gray-700">{description}</p>
    </motion.div>
  );
}
