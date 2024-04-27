"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SkillIcon = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative md:p-0.5"
    >
      <div className="cursor-pointer">{skill.icon}</div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{
              opacity: 0,
              left: "50%",
              transform: "translateX(-50%) translateY(-10px)",
            }}
            animate={{
              opacity: 1,
              left: "50%",
              transform: "translateX(-50%) translateY(5px)",
            }}
            exit={{
              opacity: 0,
              left: "50%",
              transform: "translateX(-50%) translateY(-10px)",
            }}
            transition={{ type: "spring", mass: 0.1, duration: 0.5 }}
            className="absolute -bottom-10 bg-white/20 backdrop-blur-sm px-4 py-2 whitespace-nowrap rounded-lg shadow-lg border"
          >
            {skill.name}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillIcon;
