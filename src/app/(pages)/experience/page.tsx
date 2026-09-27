import Experience from "@/app/_components/experience/experience";
import Hackatons from "@/app/_components/experience/hackatons";

export default function Work() {
  return (
    <main className="flex items-center justify-center bg-background min-h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-30 mx-4 md:mx-10 lg:mx-20 my-5 pt-20 lg:pt-0">
        <div className="w-full lg:w-1/2">
          <Experience />
        </div>
        <div className="w-full lg:w-1/2 intersect:motion-preset-slide-left">
          <Hackatons />
        </div>
      </div>
    </main>
  );
}