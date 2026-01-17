/** @format */

"use client";
// import React from "react";
export default function fullScreenNavbar() {
  return (
    <>
      <div className="h-screen w-full bg-black font-bold  ">
        <div className="h-1/6  "></div>
        <div className="h-1/6 border-t-1 border-white/50 flex justify-center items-center   ">
          {/* <h1 className="text-[90px]">PROJETS</h1> */}
          <div className="flex overflow-auto items-center">
            <h2 className="text-[7vw] whitespace-nowrap text-center"> Pour tout voir</h2>

            <img
              className="h-16 w-46 shrink-0 object-cover  rounded-full"
              src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
              alt="bag"
            />

            {/* <h2> &nbsp; Pour tout voir&nbsp;</h2>

            <img
              className="object-cover h-full w-full object-center"
              src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93"
              alt="t-shirt"
            /> */}
          </div>
        </div>
        <div className="h-1/6 border-t-1 border-white/50 flex justify-center items-center text-[90px]  ">
          <h1>AGENCE</h1>
          <div></div>
        </div>
        <div className="h-1/6 border-t-1 border-white/50 flex justify-center items-center text-[90px]  ">
          <h1>CONTACT</h1>
          <div></div>
        </div>
        <div className="h-1/6 border-t-1 border-white/50  flex justify-center items-center text-[90px]  ">
          <h1>BLOGUE</h1>
          <div></div>
        </div>
        <div className="h-1/6 border-t-1 border-white/50 "></div>
      </div>
    </>
  );
}
