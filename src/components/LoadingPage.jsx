import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-[999] bg-[#0b0720] flex flex-col items-center justify-center">
      {/* Animated Logo/Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
          {/* Jony <span className="text-purple-500">Shagor</span><br /> */}
          <span className="text-purple-500">Welcome My Portfolio</span>
        </h1>

        {/* Modern Loader Bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative mx-auto">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          />
        </div>
      </motion.div>

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 blur-[120px] rounded-full" />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-gray-500 text-xs uppercase tracking-[0.3em]"
      >
        Precision in progress
      </motion.p>
    </div>
  );
};

export default LoadingPage;
