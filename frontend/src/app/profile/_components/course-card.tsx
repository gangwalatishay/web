type Props = {
  title: string;
  progress: number;
};

export default function CourseCard({
  title,
  progress,
}: Props) {
  return (
    <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-6 transition hover:shadow-lg hover:shadow-blue-500/10">

      <h3 className="text-white font-medium mb-4">
        {title}
      </h3>

      {/* Progress Bar */}

      <div className="w-full bg-zinc-700 h-2 rounded-full">
        <div
          className="bg-[#3B82F6] h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-[#A1A1AA] mt-2">
        {progress}% Completed
      </p>

      <button className="mt-5 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-2 rounded-lg text-sm transition">
        Continue Learning
      </button>

    </div>
  );
}