"use client";

import React from "react";
import { motion } from "motion/react";

export default function HomeAnime01() {
  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: [0.2, 0.5, 1] }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
      className="text-gray-400"
    >
      with Hanami
    </motion.span>
  );
}
