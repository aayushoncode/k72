/** @format */

export default function fullScreenNavbar() {
  return (
    <>
      <div className="h-screen w-full bg-black font-bold  ">
        <div className="h-1/6  ">1</div>
        <div className="h-1/6 border-t-1 border-white/50 flex justify-center items-center text-[90px]  ">
          <h1>PROJETS</h1>
          <div></div>
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
