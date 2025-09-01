"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import gokuImg from "../../../../public/goku.png";

export default function NarutoMotion() {
  return (
    <motion.div
      initial={{ y: -350, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.9,
        ease: "easeInOut",
      }}
    >
      <Image
        src={gokuImg}
        alt="Naruto"
        width={200} // Adjust size as needed
        height={200}
        className="absolute -bottom-4 -right-4"
        style={{ filter: "drop-shadow(5px 5px 10px #000)" }}
        priority
      />
    </motion.div>
  );
}
