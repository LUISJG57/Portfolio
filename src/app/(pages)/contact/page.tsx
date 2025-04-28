import Presentation from "@/app/_components/contactMe/presentation";
import Tech from "@/app/_components/contactMe/tech";
import Navbar from "@/app/_components/navbar/navbar";

export default function Contact() {
  return (
    <main className="items-center">
      <Navbar />
      <div className="flex flex-row justify-center items-center gap-60 px-[2%] py-[10%] max-w-7xl mx-auto">
        <div className="w-1/2 transform scale-120">
          <Presentation />
        </div>
        <div className="w-1/2 transform scale-120">
          <Tech />
        </div>
      </div>
    </main>
  );
}