/** @format */

"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
export default function stairTransition() {
  const currentPath = usePathname();

  console.log(currentPath);
  const parentStair = useRef(null);
  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.to(parentStair.current, {
        display: "block",
      });
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: 0.25,
        },
      });
      tl.to(".stair", {
        y:"100%",
        stagger: {
          amount: -0.25,
        },
      });
      tl.set(parentStair.current, {
        display: "none",
      });

      tl.to(".stair", {
        y: "0%",
      });
    },
    [currentPath]
  );
  return (
    <>
      <div ref={parentStair} className="h-screen fixed top-0 z-10  w-full">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black "></div>
          <div className="stair h-full w-1/5 bg-black "></div>
          <div className="stair h-full w-1/5 bg-black "></div>
          <div className="stair h-full w-1/5 bg-black "></div>
          <div className="stair h-full w-1/5 bg-black "></div>
        </div>
      </div>
    </>
  );
}
