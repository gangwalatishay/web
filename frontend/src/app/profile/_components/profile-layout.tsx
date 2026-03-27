import Sidebar from "./sidebar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#0F1115] min-h-screen w-full">

      <Sidebar />

      <main className="flex-1 px-8 py-10">
        {children}
      </main>

    </div>
  );
}