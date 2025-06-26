// File: src/components/StatsCards.tsx
import React from "react";
import { motion } from "framer-motion";

interface CardData {
  title: string;
  desc: string;
  stat: React.ReactNode;
  rotate: string;
  colored?: boolean;
  delay?: number;
}

interface StatsCardsProps {
  data: CardData[];
}

// Custom hook to detect if screen is mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1025);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

const StatsCards: React.FC<StatsCardsProps> = ({ data }) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`
        ${isMobile ? "relative my-8 gap-4" : "sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:z-10 sm:mt-16"}
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto
      `}
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: "-50vh", rotate: 0 }}
          animate={{
            y: 0,
            rotate: isMobile ? 0 : Number(item.rotate),
          }}
          transition={{
            type: "spring",
            damping: 22,
            stiffness: 70,
            mass: 0.8,
            delay: item.delay ?? (0.15 + index * 0.2),
          }}
          className={`
            w-full
            rounded-xl p-6 flex flex-col justify-between min-h-[240px] shadow-lg
            ${item.colored ? "bg-[#004fce] text-white" : "bg-white text-black"}
            ${!isMobile && index === 2 ? "ml-4" : ""}
          `}
          style={{
            transformOrigin: "bottom center",
          }}
        >
          <div className={`border-b-[1px] ${item.colored ? "border-blue-600" : "border-gray-300"} pb-4 mb-2`}>
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className={`text-base ${item.colored ? "text-blue-100" : "text-gray-600"}`}>{item.desc}</p>
          </div>
          <div className="mt-2 text-5xl font-bold flex items-center">
            {item.stat}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;