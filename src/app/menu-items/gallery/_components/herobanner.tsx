import { useState, useEffect } from "react";

import gallery1 from "@/assets/gallery/gallery-img1.jpg";
import gallery2 from "@/assets/gallery/gallery-img2.jpg";
import gallery3 from "@/assets/gallery/gallery-img3.jpg";
import gallery4 from "@/assets/gallery/gallery-img4.jpg";

export default function HeroBanner() {

  const [mainImage, setMainImage] = useState(gallery1);
  const [thumbs, setThumbs] = useState([gallery2, gallery3, gallery4]);

  const handleSwap = (clickedIndex: number) => {
    const newThumbs = [...thumbs];
    // store clicked thumbnail
    const clickedImage = newThumbs[clickedIndex];
    // replace thumbnail with main image
    newThumbs[clickedIndex] = mainImage;
    // set clicked image as main
    setMainImage(clickedImage);
    setThumbs(newThumbs);
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex w-full h-full">
        {/* LEFT */}
        <div className="w-1/2 bg-[#970747] flex items-center justify-center text-center">
          <div>
            <h2
              className="text-8xl font-bold text-[#FFFDD0]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >Gallery</h2>
            <p className="text-xl mt-2 text-white">
              An Art gallery of our company
            </p>
          </div>
        </div>
        {/* RIGHT OVERLAP */}
        <div className="w-1/2 flex items-center justify-center -ml-32 relative z-10">
          <div className="flex flex-col gap-4">
            {/* BIG IMAGE */}
            <div className="w-150 h-65 rounded-lg overflow-hidden shadow-xl">
              <img src={mainImage} className="w-full h-full object-cover" />
            </div>
            {/* THUMBNAILS */}
            <div className="flex gap-3">
              {thumbs.map((img, index) => (
                <div
                  key={index}
                  className="w-47.5 h-37.5 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
                  onClick={() => handleSwap(index)}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}