"use client"
import Presentation from "@/app/_components/contactMe/presentation";
import Tech from "@/app/_components/contactMe/tech";

export default function Contact() {
  return (
    <main className="flex flex-row items-center justify-center bg-background gap-60 p-10 min-h-screen min-w-screen">
      <div className="transform scale-120">
        <Presentation />
      </div>
      <div className="transform scale-120">
        <Tech />
      </div>
    </main>
  );
}