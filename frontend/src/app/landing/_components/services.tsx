import CardComponents from "@/components/card-components";
import { GraduationCap } from "lucide-react";

export default function Services() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col">
          <h3 className="text-4xl">
            Why Choose AlgoAscend?
          </h3>
        </div>
        <div className="grid grid-cols-4 mt-20 p-8 gap-x-8 w-full">
          <CardComponents
          icon={<GraduationCap size={70} />}
          title="Industry-Relevant Curriculum"
          description="Designed by industry experts to match what companies actually need"
        />
          <CardComponents
          icon={<GraduationCap size={70} />}
          title="Industry-Relevant Curriculum"
          description="Designed by industry experts to match what companies actually need"
        />
          <CardComponents
          icon={<GraduationCap size={70} />}
          title="Industry-Relevant Curriculum"
          description="Designed by industry experts to match what companies actually need"
        />
          <CardComponents
          icon={<GraduationCap size={70} />}
          title="Industry-Relevant Curriculum"
          description="Designed by industry experts to match what companies actually need"
        />
        </div>
      </div>
    </div>
  )
}