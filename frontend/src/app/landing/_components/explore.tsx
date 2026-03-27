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
  return (
    <div className="mt-24 px-6">
      <div className="flex flex-col items-center text-center">

        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-wide">
            Explore the Learning Tracks
          </h2>
          <p className="text-xl mt-4 text-gray-500 leading-relaxed">
            Browse curated learning paths designed to guide you 
            from beginner to expert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-16 gap-8 w-full max-w-7xl">
          {tracks.map((track, index) => (
            <Link
              key={index}
              to={`/courses#${track.slug}`}
              className="block"
            >
              <div
                className="
                  p-8 h-60 flex items-center justify-center text-center
                  rounded-3xl
                  bg-[#1C1C1E]
                  text-gray-300
                  border border-[#2A2A2E]
                  transition-all duration-500
                  hover:scale-105
                  hover:bg-[#2A2A2E]
                  hover:text-white
                  hover:shadow-xl
                "
              >
                <h2 className="text-xl font-semibold">
                  {track.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}