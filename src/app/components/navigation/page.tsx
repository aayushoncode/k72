/** @format */
"use client";
import { useRef } from "react";

export default function navigation() {
  const navGreenRef = useRef(null);
  return (
    <>
      <div className=" flex justify-between h-20 fixed z-40 w-full">
        <div className="mt-4 ml-4">
          <a
            className="c-header_logo "
            href="/"
            title="Aller à la page d'accueil">
            {/* <div className="u-screen-reader-text">K72</div>2 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="44"
              fill="currentColor"
              fillRule="evenodd"
              viewBox="0 0 103 44"
              className="text-white">
              <path
                // fill-rule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
          </a>
        </div>
        <div
          onMouseEnter={() => {
            navGreenRef.current.style.height = "100%";
          }}
          onMouseLeave={() => {
            navGreenRef.current.style.height = "0%";
          }}
          className="relative bg-black h-12 w-50">
          <div className=" h-full w-full group cursor-pointer flex justify-center items-end pr-10 flex-col gap-1 ">
            <div className="h-[1.5px]  w-13 group-hover:bg-black z-20 bg-white"></div>
            <div className="h-[1.5px]  w-5 ml-7 group-hover:bg-black z-20 bg-white"></div>

            <div
              ref={navGreenRef}
              className="bg-[#D3FD50]  w-full h-0 absolute top-0 right-0 transition-all duration-100  "></div>
          </div>
        </div>
      </div>
    </>
  );
}
