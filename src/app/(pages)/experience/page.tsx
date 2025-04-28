import Experience from "@/app/_components/experience/experience";
import Navbar from "@/app/_components/navbar/navbar";

export default function Contact() {
  return (
    <main className="items-center">
      <Navbar />
      <div className="flex flex-row justify-center items-center gap-10 max-w-7xl mx-auto">
        <div className="w-1/2 transform">
          <Experience />
        </div>
        <div className="w-1/2 transform">
          Hola
        </div>
      </div>
    </main>
  );
}