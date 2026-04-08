import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function MissionVision() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24 px-10 grid md:grid-cols-2 gap-12"
    >
      <motion.div variants={fadeUp} className="card bg-[#18181B] p-6 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-400">
          To bridge the gap between theoretical knowledge and real-world skills.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="card bg-[#18181B] p-6 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-400">
          To become the most trusted learning platform globally.
        </p>
      </motion.div>
    </motion.section>
  );
}