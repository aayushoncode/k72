/** @format */

"use client";

export default function FullNavbar() {
  return (
    <>
      <div className="h-screen w-full flex items-center bg-slate-900">
        <div className="h-40 w-full relative bg-red-900">
          <h1 className="text-center text-[80px]">my name is ayush</h1>

          <h2 className="absolute top-0 h-40 items-center overflow-x-scroll  flex bg-green-600 w-full">
            <div className="flex w-full h-full tracking-tighter">
              <span className="text-[90px] h-full w-full ">i am a coder</span>
              <div className=" w-60 h-22 rounded-full  overflow-hidden bg-red-900">
                <img
                  className="object-cover object-center"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt="flag"
                />
              </div>
            </div>

            <div className="flex w-full h-full">
              <span className="text-[90px]  h-full w-full">i am a coder</span>

              <div className=" w-60 h-22 rounded-full overflow-hidden bg-red-900">
                <img
                  className="object-cover object-center "
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
            <span className="text-[90px]">i am a coder</span>
          </h2>
        </div>
      </div>
    </>
  );
}
