import Presentation from "@/app/_components/contactMe/presentation";
import Tech from "@/app/_components/contactMe/tech";

export default function Contact() {
  return (
    <main className="flex items-center justify-center bg-background min-h-screen">
      <div className="flex flex-row justify-center items-center gap-85 py-[10%] mx-55">
        <div className="w-1/2 transform scale-130">
          <Presentation />
        </div>
        <div className="w-1/2 transform scale-130">
          <Tech />
        </div>
      </div>
    </main>
  );
}