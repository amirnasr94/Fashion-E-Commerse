"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  caption: string;
  imageAddress: string;
}

export default function ModiweekCard({ caption, imageAddress }: Props) {
  const [showOvarlay, setShowOvarlay] = useState(false);
  return (
    <motion.div
      className="relative overflow-hidden h-[426] min-w-[288px] rounded-lg flex items-center justify-center"
      onHoverStart={() => setShowOvarlay(true)}
      onHoverEnd={() => setShowOvarlay(false)}
    >
      <AnimatePresence>
        {showOvarlay && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black opacity-30 inset-0 w-full h-full pointer-events-none" />
            <motion.h3
              className="text-white font-bold z-10"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 0 }}
            >
              {caption}
            </motion.h3>
          </motion.div>
        )}
      </AnimatePresence>
      <Image src={imageAddress} alt={caption} fill objectFit="cover" />
    </motion.div>
  );
}
