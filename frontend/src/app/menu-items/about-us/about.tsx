import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function About() {
  return (
    <div className="w-full bg-[#0F1115] text-white">

      {/* 🔹 HERO */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-6xl font-bold leading-tight">
          Building the Future of <span className="text-[#970747]">Tech Learning</span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          We are not just another ed-tech platform. We design real-world learning
          experiences that transform beginners into industry-ready professionals.
        </p>
      </motion.section>

      {/* 🔹 MISSION + VISION */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 px-10 grid md:grid-cols-2 gap-12"
      >
        <motion.div variants={fadeUp} className="bg-[#18181B] p-10 rounded-2xl border border-white/10">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-400">
            To bridge the gap between theoretical knowledge and real-world skills.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-[#18181B] p-10 rounded-2xl border border-white/10">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-400">
            To become the most trusted learning platform globally.
          </p>
        </motion.div>
      </motion.section>

      {/* 🔹 WHY US */}
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
            {
              title: "Industry-Focused Learning",
              desc: "Courses designed by professionals.",
            },
            {
              title: "Hands-on Projects",
              desc: "Build real-world applications.",
            },
            {
              title: "Career Acceleration",
              desc: "Focused on real outcomes.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="bg-[#18181B] p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🔹 STATS */}
      <motion.section
        variants={stagger}
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
            <h3 className="text-3xl font-bold text-[#970747]">{stat.number}</h3>
            <p className="text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* 🔹 CTA */}
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

        <button className="mt-8 px-8 py-3 bg-[#970747] rounded-xl hover:scale-105 transition">
          Explore Courses
        </button>
      </motion.section>

    </div>
  );
}