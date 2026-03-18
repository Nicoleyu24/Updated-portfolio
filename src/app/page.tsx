import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="ml-[200px] pt-[100px] p-10">
        {/* Page content goes here */}
      </main>
    </>
  );
}
