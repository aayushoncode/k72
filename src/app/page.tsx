/** @format */
"use client";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className=" h-[110vh]  w-full ">
        <video
          autoPlay
          muted
          loop
          className="object-cover fixed h-screen w-full"
          src="/video/bg-video.mp4"
        />

        <div className="text-[105px] absolute leading-none  flex flex-col uppercase  top-2 text-center pb-4 left-50 ">
          L'étincelle{" "}
          <div className="flex">
            qui{" "}
            <video
              autoPlay
              muted
              loop
              className=" h-25  leading-tight object-cover w-60  rounded-full"
              src="/video/bg-video.mp4"
            />{" "}
            génère
          </div>{" "}
          la créativité
        </div>

        <p className="absolute w-60  text-start text-sm   bottom-24 right-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est
          une agence qui pense chaque action pour nourrir la marque. Demain,
          dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle
          pour générer de l’émotion. Pour assurer une relation honnête, on est
          sans filtre, on dit ce qui doit être dit, on fait ce qui doit être
          fait.
        </p>

        <div className=" text-[75px] font-bold flex gap-3  absolute  -bottom-12 left-50  ">
          <Link
            href="/Projects"
            className="border-4 hover:text-[#D3FD50] px-6 rounded-full leading-none ">
            PROJECTS
          </Link>
          <Link
            href="/agence"
            className="border-4 hover:text-[#D3FD50] px-6 rounded-full leading-none  ">
            AGENCE
          </Link>
        </div>
      </div>
    </>
  );
}
