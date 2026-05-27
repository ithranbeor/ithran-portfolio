import { motion } from "framer-motion";
import { type ReactNode } from "react";

export default function PageTransition({ children, direction = 1 }: { children: ReactNode; direction?: number }) {
  const offset = 120;
  const initialX = direction > 0 ? offset : -offset;
  const exitX = direction > 0 ? -offset : offset;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: exitX }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
