/** @format */

"use client";

function MarqueeItem() {
  return (
    <div className="marquee-item">
      <span>POUR TOUT VOIR</span>

      <div className="img-pill">
        <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" />
      </div>

      <span>POUR TOUT VOIR</span>

      <div className="img-pill">
        <img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="h-screen bg-black">
      <div className="relative h-40 overflow-hidden border-t border-white/30">
        <div className="absolute inset-0 bg-[#D3FD50] flex items-center">
          <div className="marquee-wrapper">
            <div className="marquee-track">
              <MarqueeItem />
              <MarqueeItem /> {/* duplicate */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
