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

export default function WhyUs() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24 text-center px-10"
    >
      <h2 className="text-4xl font-bold mb-16">
        Why Choose Us?
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          { title: "Industry-Focused Learning", desc: "Courses designed by professionals." },
          { title: "Hands-on Projects", desc: "Build real-world applications." },
          { title: "Career Acceleration", desc: "Focused on real outcomes." },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="card"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}