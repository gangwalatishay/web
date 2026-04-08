import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Stats() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 bg-[#18181B] grid grid-cols-2 md:grid-cols-4 text-center"
    >
      {[
        { number: "10K+", label: "Students" },
        { number: "50+", label: "Courses" },
        { number: "95%", label: "Success Rate" },
        { number: "100+", label: "Projects" },
      ].map((stat, i) => (
        <motion.div key={i} variants={fadeUp} className="py-6">
          <h3 className="text-3xl font-bold text-[#3B82F6]">{stat.number}</h3>
          <p className="text-gray-400">{stat.label}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}