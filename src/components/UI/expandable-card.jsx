/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";

export default function ExpandableCard({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout transition={{ layout: { duration: 1, type: "spring" } }} className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
      <motion.h2 layout="position" onClick={() => setIsOpen(!isOpen)} >{title}</motion.h2>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
