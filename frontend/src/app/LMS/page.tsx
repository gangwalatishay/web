import AIInsightsCard from "./_components/dashboard/AIInsightsCard";
import AvgScoreChart from "./_components/dashboard/AvgScoreChart";
import CareerReadinessCard from "./_components/dashboard/CareerReadinessCard";
import ContinueLearning from "./_components/dashboard/ContinueLearning";
import CourseProgressItem from "./_components/dashboard/CourseProgressItem";
import DeadlineList from "./_components/dashboard/DeadlineList";
import LearningProgressChart from "./_components/dashboard/LearningProgressChart";
import LiveClassList from "./_components/dashboard/LiveClassList";
import PortfolioCard from "./_components/dashboard/PortfolioCard";
import ResumeCard from "./_components/dashboard/ResumeCard";
import SkillProgressCard from "./_components/dashboard/SkillProgressCard";
import StatsGrid from "./_components/dashboard/StatsGrid";
import WelcomeBanner from "./_components/dashboard/WelcomeBanner";
import LMSLayout from "./layout";

const LMSPage = () => {
  return (
    <LMSLayout>
      <div className="mx-auto max-w-7xl flex flex-col xl:flex-row gap-8">

        {/* LEFT COLUMN: Main Content */}
        <div className="flex-1 space-y-8 min-w-0 mt-10">
          <WelcomeBanner />

          <section className="space-y-6">
            <StatsGrid />
          </section>

          <hr className="border-t border-gray-200 dark:border-white/30" />

          <section className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[95%] h-[95%]">
              <SkillProgressCard />
              <CareerReadinessCard />
              <AIInsightsCard />
              <PortfolioCard />
            </div>
          </section>
          <section className="space-y-6">
            <ContinueLearning />
            
            {/* Grid to hold the two charts side-by-side on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <LearningProgressChart />
              </div>
              <div className="md:col-span-1">
                <AvgScoreChart />
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Right Panel */}
        <div className="w-full xl:w-85 space-y-8 shrink-0 mt-10">
          <CourseProgressItem />
          <ResumeCard />
          <DeadlineList />
          <LiveClassList />
        </div>

      </div>
    </LMSLayout>
  );
};

export default LMSPage;