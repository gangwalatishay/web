import CardComponents from "@/components/card-components"
import {
  Users,
  GraduationCap,
  Briefcase
} from "lucide-react"

export default function SmallCard() {
  return (
    <section className="bg-[#18181B] mt-40 py-16">
      <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <CardComponents
          icon={<GraduationCap size={70} />}
          title="Industry-Relevant Curriculum"
          description="Designed by industry experts to match what companies actually need"
        />
        <CardComponents
          icon={<Users size={70} />}
          title="Expert Instructors"
          description="Learn from professionals including a system design expert from Google"
        />
        <CardComponents
          icon={<Briefcase size={70} />}
          title="Placement Assistance"
          description="Comprehensive placement assistance for students who ace our assessment"
        />
      </div>
    </section>
  )
}
