import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <h1 className="text-6xl font-bold leading-tight">
        Building the Future of <span className="text-[#3B82F6]">Tech Learning</span>
      </h1>

      <p className="mt-6 text-lg text-gray-400 max-w-2xl">
        We design real-world learning experiences that transform beginners into industry-ready professionals.
      </p>
    </motion.section>
  );
}