import { FC, ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Transition from "../components/Transition";

const LoaderLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return loading ? (
    <motion.div className="h-full bg-[red]">
      <Transition />
    </motion.div>
  ) : (
    <AnimatePresence mode="wait">{children}</AnimatePresence>
  );
};

export default LoaderLayout;
