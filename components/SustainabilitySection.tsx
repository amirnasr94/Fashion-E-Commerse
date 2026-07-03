"use client";
import Image from "next/image";
import Button from "./UI/Button";
import PlusIcon from "../public/assets/icons/plus.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SustainabilitySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"],
  );
  return (
    <motion.div
      className="relative w-full h-[526] my-9"
      ref={ref}
      style={{ clipPath }}
    >
      <div className="absolute right-10 bottom-10 z-1 space-y-4">
        <p className="text-primary-800 text-body-lg font-light">
          Stylish sustainability in clothing promotes eco-friendly <br />{" "}
          choices for a greater future
        </p>
        <Button variant="white" className="gap-x-1 px-9 py-3 float-end">
          Sustainability
          <PlusIcon width={14} height={14} />
        </Button>
      </div>
      <Image
        src="/assets/images/landing/Sustainability.png"
        alt="sustainability"
        fill
      />
    </motion.div>
  );
}
