type CardComponentsProps = {
  icon: React.ReactNode
  title: string
  description: string
}

function CardComponents({ icon, title, description }: CardComponentsProps) {
  return (
    <div className="flex flex-col items-center text-center bg-[#1F2126] rounded-lg p-6 hover:bg-[#24262C] transition-colors duration-300">
      <div className="mb-4 text-white">
        {icon}
      </div>

      <h2 className="text-xl font-semibold text-white mb-2">
        {title}
      </h2>

      <p className="text-sm text-[#A1A1AA]">
        {description}
      </p>
    </div>
  );
};

export default CardComponents;
