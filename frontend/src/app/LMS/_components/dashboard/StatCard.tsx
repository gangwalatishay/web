
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: string | React.ReactNode;
  badgeContent?: string;
  delay?: number;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  badgeContent,
  delay = 0
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5 }}
    >
      <Card className="border-[#1e2235] bg-[#11131e] text-white transition-colors hover:border-[#2a2f4c] rounded-2xl overflow-hidden shadow-sm h-full font-sans">
        <CardContent className="p-5 flex flex-col justify-between h-full min-h-35">
          <div className="flex items-center gap-4">
            {/* Icon Block */}
            <div className="w-14 h-14 rounded-2xl bg-linear-to-b from-[#1c2438] to-[#121625] border border-[#2d3a5e] flex items-center justify-center text-3xl shadow-inner">
              {icon}
            </div>
            
            {/* Value & Title Block */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[28px] leading-none font-bold text-white mb-1.5 flex items-baseline gap-1">
                {typeof value === 'string' && value.includes('hrs') ? (
                  <>
                    {value.replace('hrs', '')}
                    <span className="text-base text-gray-400 font-medium tracking-normal">hrs</span>
                  </>
                ) : typeof value === 'string' && value.includes('/') ? (
                  <>
                    {value.split('/')[0]}
                    <span className="text-base text-gray-400 font-medium tracking-normal">/{value.split('/')[1]}</span>
                  </>
                ) : value}
              </h3>
              <p className="text-[13px] font-medium text-gray-400 leading-none">{title}</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-[13px] text-gray-300 font-medium flex items-center gap-1">
              {subtitle}
            </p>
            {badgeContent && (
              <span className="text-[11px] font-medium text-gray-300 bg-[#232736] px-2.5 py-1 rounded-full whitespace-nowrap">
                {badgeContent}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
