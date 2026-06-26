"use client";
import { animate, useMotionValue, motion } from "framer-motion";
import ModiweekCard from "./ModiweekCard";
import { useEffect, useRef } from "react";

export default function ModiweekSlider() {
  const ref = useRef<HTMLDivElement>(null);
  const xTranform = useMotionValue(0);

  useEffect(() => {
    if (!ref.current) return;
    const finalPotition = -ref.current?.clientWidth;
    const controls = animate(xTranform, [0, finalPotition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      delay: 0,
    });
    return controls.stop;
  }, [xTranform]);

  return (
    <motion.div className="flex gap-5" style={{ x: xTranform }} ref={ref}>
      {[...slider, ...slider].map((slide, idx) => {
        return (
          <ModiweekCard
            key={idx}
            imageAddress={slide.image}
            caption={slide.caption}
          />
        );
      })}
    </motion.div>
  );
}

const slider = [
  {
    id: 1,
    caption: "Sunday",
    image: "/assets/images/landing/modiweek/pic1.png",
  },
  {
    id: 2,
    caption: "Monday",
    image: "/assets/images/landing/modiweek/pic2.png",
  },
  {
    id: 3,
    caption: "Tuesday",
    image: "/assets/images/landing/modiweek/pic3.png",
  },
  {
    id: 4,
    caption: "Wednesday",
    image: "/assets/images/landing/modiweek/pic4.png",
  },
  {
    id: 5,
    caption: "Thursday",
    image: "/assets/images/landing/modiweek/pic1.png",
  },
  {
    id: 6,
    caption: "Friday",
    image: "/assets/images/landing/modiweek/pic2.png",
  },
  {
    id: 7,
    caption: "Saturday",
    image: "/assets/images/landing/modiweek/pic3.png",
  },
];
