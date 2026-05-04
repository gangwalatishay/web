import Navbar from "./_components/layout/navbar";
import Sidebar from "./_components/layout/sidebar";

const LMSLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-[#070b14] text-white font-sans flex w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 ml-64">
        <Navbar />
        <main className="flex-1 px-6 py-12 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default LMSLayout;