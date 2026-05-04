import { motion } from "framer-motion";

export default function SkillProgressCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-[#11131e] border-[#1e2235] border rounded-2xl p-5 w-full flex flex-col shadow-sm transition h-full font-sans"
        >
            <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#1c2438] to-[#121625] border border-[#2d3a5e] flex items-center justify-center shadow-inner text-2xl">
                    👨‍💻
                </div>
                <h3 className="text-[20px] font-bold text-white">Skill Progress</h3>
            </div>

            <div className="flex-1 space-y-4">
                {[
                    { name: "React", value: 80, color: "bg-[#3366ff]" },
                    { name: "Python", value: 60, color: "bg-[#4ade80]" },
                    { name: "AWS", value: 30, color: "bg-[#eab308]" }
                ].map((item) => (
                    <div key={item.name} className="flex items-center gap-4">
                        <span className="text-[14px] text-gray-200 w-14">{item.name}</span>
                        <div className="flex-1 h-1.5 bg-[#232633] rounded-full overflow-hidden">
                            <div
                                className={`h-full ${item.color} rounded-full`}
                                style={{ width: `${item.value}%` }}
                            ></div>
                        </div>
                        <span className="text-[14px] font-bold text-gray-200">{item.value}%</span>
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-7">
                <button className="px-3 py-1 text-[11px] font-bold rounded bg-[#8e3a43] text-[#f7b2b9] hover:bg-[#a6434e] transition-colors">
                    View →
                </button>
            </div>
        </motion.div>
    );
}