"use client"
import Presentation from "@/app/_components/contactMe/presentation";
import Tech from "@/app/_components/contactMe/tech";

export default function Contact() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center bg-background gap-10 lg:gap-60 p-4 md:p-10 pt-20 lg:pt-10 min-h-screen w-full">
      <div className="lg:scale-120">
        <Presentation />
      </div>
      <div className="lg:scale-120">
        <Tech />
      </div>
    </main>
  );
}