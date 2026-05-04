import { Card } from "@/components/ui/card";


export default function ResumeCard() {
  return (
    <Card className="bg-[#11131e] border-[#1e2235] rounded-xl relative overflow-hidden p-6">
      <div className="text-sm font-medium text-gray-400 mb-1">Resume</div>
      <div className="flex items-baseline space-x-1 mb-6">
        <span className="text-[44px] leading-none font-bold text-white">82</span>
        <span className="text-2xl text-gray-500 font-medium">/100</span>
      </div>
      
      <div className="space-y-4 mb-8">
        <div className="h-1.5 bg-[#1c1e29] rounded-full overflow-hidden">
          <div className="h-full bg-pink-600 w-[80%] rounded-full"></div>
        </div>

        <div className="space-y-1.5">
          <div className="text-sm text-gray-400 font-medium">SKills Match</div>
          <div className="h-1.5 bg-[#1c1e29] rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 w-[60%] rounded-full"></div>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="text-sm text-gray-400 font-medium">Interview Ready</div>
          <div className="h-1.5 bg-[#1c1e29] rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-[90%] rounded-full"></div>
          </div>
        </div>
      </div>

      <button className="flex items-center space-x-2 text-sm font-medium text-pink-500 bg-pink-500/10 px-4 py-2 rounded-lg w-fit hover:bg-pink-500/20 transition-colors border border-pink-500/10">
        <span>📋</span>
        <span>View Full Profile</span>
      </button>
    </Card>
  );
}
