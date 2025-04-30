import Experience from "@/app/_components/experience/experience";
import Hackatons from "@/app/_components/experience/hackatons";

export default function Work() {
  return (
    <main className="flex items-center justify-center bg-background min-h-screen">
      <div className="flex flex-row justify-center items-center gap-30 mx-20 my-5">
        <div className="w-1/2">
          <Experience />
        </div>
        <div className="w-1/2 intersect:motion-preset-slide-left">
          <Hackatons />
        </div>
      </div>
    </main>
  );
}