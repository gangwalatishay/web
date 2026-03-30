import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const tracks = [
  { title: "Foundations Track", slug: "foundations" },
  { title: "Software Engineering Track", slug: "software-engineering" },
  { title: "Data & Analytics Track", slug: "data-analytics" },
  { title: "AI & Machine Learning Track", slug: "ai-ml" },
  { title: "Generative AI & LLM Track", slug: "generative-ai" },
  { title: "Agentic AI Track (Flagship)", slug: "agentic-ai" },
  { title: "Career Acceleration Track", slug: "career-acceleration" },
];

export default function Explore() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="mt-32 px-6 relative">

      {/* 🔥 subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(151,7,71,0.15),transparent_60%)]" />

      <div className="flex flex-col items-center text-center">

        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-wide">
            Explore the Learning Tracks
          </h2>
          <p className="text-lg mt-4 text-gray-400">
            Curated paths designed to take you from beginner to expert.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10 w-full max-w-6xl">

          {tracks.map((track, index) => (
            <Link key={index} to={`/courses#${track.slug}`} className="group perspective">

              <div
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`
                  relative h-56 p-px rounded-3xl
                  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${visible
                    ? "opacity-100 translate-y-0 scale-100 blur-0"
                    : "opacity-0 translate-y-20 scale-95 blur-sm"}
                `}
              >

                {/* 🔥 gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-[#970747] via-[#232949] to-[#970747] opacity-20 group-hover:opacity-60 transition duration-500" />

                {/* 🔥 glass card */}
                <div
                  className="
                    relative h-full w-full
                    bg-[#1C1C1E]/80 backdrop-blur-xl
                    border border-white/10
                    rounded-3xl

                    flex items-center justify-center text-center

                    transition-all duration-500

                    group-hover:-translate-y-3
                    group-hover:scale-[1.03]
                    group-hover:shadow-[0_20px_60px_rgba(151,7,71,0.25)]
                  "
                >
                  {/* glow on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-[#970747]/0 group-hover:bg-[#970747]/10 transition duration-500" />

                  <h2 className="text-xl font-semibold text-gray-300 group-hover:text-white transition">
                    {track.title}
                  </h2>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}