"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

export default function CollectionSection() {
  return (
    <section className="mt-10 space-y-4 overflow-hidden">
      <h3 className="text-black font-bold">Collection</h3>
      <div className="grid grid-cols-2 justify-center">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          className="space-y-16"
        >
          <motion.div variants={cardVariant1}>
            <div>
              <Image
                src="/assets/images/landing/collections/pic2.png"
                alt="ad"
                objectFit="cover"
                width={600}
                height={518}
              />
              <button></button>
            </div>
          </motion.div>
          <motion.div variants={cardVariant3}>
            <div>
              <Image
                src="/assets/images/landing/collections/pic3.png"
                alt="ad"
                objectFit="cover"
                width={600}
                height={837}
              />
              <button></button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          className="space-y-36"
        >
          <motion.div variants={cardVariant2}>
            <div>
              <Image
                src="/assets/images/landing/collections/pic1.png"
                alt="ad"
                objectFit="cover"
                width={600}
                height={840}
              />
              <button></button>
            </div>
          </motion.div>
          <motion.div className="-mt-[100]" variants={cardVariant4}>
            <div>
              <Image
                src="/assets/images/landing/collections/pic4.png"
                alt="ad"
                objectFit="cover"
                width={600}
                height={435}
              />
              <button></button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const transition = {
  type: "spring",
  bounce: 0.4,
  duration: 0.8,
} as const;

const cardVariant1: Variants = {
  offscreen: {
    x: -200,
    y: 0,
  },
  onscreen: {
    x: 0,
    transition: transition,
  },
};

const cardVariant2: Variants = {
  offscreen: {
    x: 400,
    y: 0,
  },
  onscreen: {
    x: 0,
    transition: transition,
  },
};

const cardVariant3: Variants = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 0,
    transition: transition,
  },
};

const cardVariant4: Variants = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 0,
    transition: transition,
  },
};
