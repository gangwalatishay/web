type Props = {
  title: string;
  value: string | number;
};

export default function StatsCard({ title, value }: Props) {
  return (
    <div className="bg-[#18181B] border border-zinc-800 rounded-xl p-6 transition hover:shadow-lg hover:shadow-blue-500/10">

      <p className="text-sm text-[#A1A1AA]">
        {title}
      </p>

      <h3 className="text-2xl font-semibold text-white mt-2">
        {value}
      </h3>

    </div>
  );
}