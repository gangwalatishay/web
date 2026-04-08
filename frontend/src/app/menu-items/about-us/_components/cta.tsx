import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-24 text-center"
    >
      <h2 className="text-4xl font-bold">
        Ready to Start Your Journey?
      </h2>

      <p className="mt-4 text-gray-400">
        Join thousands of learners building real skills.
      </p>

      <button className="mt-8 px-8 py-3 bg-[#3B82F6] rounded-xl hover:scale-105 transition">
        Explore Courses
      </button>
    </motion.section>
  );
}