/** @format */
"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

export default function Agence() {
  const imageDivRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const imageArr = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "/images/CAMILLE_480X640_2-480x640.jpg",
    "/images/ChantalG_480x640-480x640.jpg",
    "/images/HugoJoseph_480x640-480x640.jpg",
    "/images/Lawrence_480x640-480x640.jpg",
    "/images/MAXIME_480X640_2-480x640.jpg",
    "/images/MEGGIE_480X640_2-480x640.jpg",
    "/images/Michele_480X640-480x640.jpg",
    "/images/MEL_480X640-480x640.jpg",
    "/images/MyleneS_480x640-480x640.jpg",
    "/images/Olivier_480x640-480x640.jpg",
    "/images/SophieA_480x640-480x640.jpg",
    "/images/HugoJoseph_480x640-480x640.jpg",
  ];

  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 21.6%",
        end: "top -185%",
        pin: true,
        scrub: true,
        // markers: true,

        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArr.length);
          } else {
            imageIndex = imageArr.length - 1;
          }

          imageRef.current.src = imageArr[imageIndex];
        },
      },
    });
  });

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      smoothWheel: true,
    });

    // Sync Lenis with GSAP ScrollTrigger
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      ScrollTrigger.update(); // important!
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Example GSAP animation with ScrollTrigger

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <div className="text-black">
        <div className="section-1 relative text-black h-[135vh] flex justify-center items-end w-full ">
          <div
            ref={imageDivRef}
            className="overflow-hidden absolute h-[45vh]  top-30 left-95 w-[15vw] rounded-3xl ">
            <img
              ref={imageRef}
              src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
              alt="man"
              className="object-cover w-full h-full  object-center"
            />
          </div>

          <h1 className="text-[45vh]   leading-none  uppercase text-center z-20 ">
            Soixan7e<div className="-mt-7">Douze</div>
          </h1>
        </div>
        <div className="section-2  w-full flex justify-end text-black">
          <p className=" z-20 font-semibold pr-5 leading-14 w-[60%] text-[40px] ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité
            nourrit notre créativité. On reste humbles et on dit non aux gros
            egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une
            personnalité, une histoire. Si on oublie ça, on peut faire de bons
            chiffres à court terme, mais on la tue à long terme. C’est pour ça
            qu’on s’engage à donner de la perspective, pour bâtir des marques
            influentes.
          </p>
        </div>

        <div className="section-3 pt-60 gap-50 flex flex-col w-full">
          <div className="w-[50%] flex text-xl pl-50  justify-between  ">
            <p>Expertise</p>
            <p className="w-30">Stratégie Publicité Branding Design Contenu</p>
          </div>
          <div className="w-full flex text-[18px]  font-semibold gap-12   justify-center  ">
            <p className=" w-80">
              Nos projets_ naissent dans l’humilité, grandissent dans la
              curiosité et vivent grâce à la créativité sous toutes ses formes.
            </p>
            <p className=" w-85">
              Notre création_ bouillonne dans un environnement où le talent a le
              goût d’exploser. Où on se sent libre d’être la meilleure version
              de soi-même.
            </p>
            <p className=" w-60">
              Notre culture_ c’est l’ouverture aux autres. Point. Tout
              l’équipage participe à bâtir une agence dont on est fiers.{" "}
            </p>
          </div>
        </div>

        {/* <div className="bg-red-800">
          <img src="" alt="" />
        </div> */}
      </div>
    </>
  );
}
