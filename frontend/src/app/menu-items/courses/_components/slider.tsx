import Sliderimg1 from "@/assets/slider/slider1.jpg";
import Sliderimg2 from "@/assets/slider/slider2.jpg";
import Sliderimg3 from "@/assets/slider/slider3.jpg";
import Sliderimg4 from "@/assets/slider/slider4.jpg";
import Sliderimg5 from "@/assets/slider/slider5.jpg";
import Sliderimg6 from "@/assets/slider/slider6.jpg";

import { ImageSlider } from "@/components/image-slider";

const IMAGES = [Sliderimg1,Sliderimg2,Sliderimg3,Sliderimg4,Sliderimg5,Sliderimg5,Sliderimg6]

export default function Slider() {
  return (
    <div
      style={{
        maxWidth: "2200px",
        width: "100%",
        aspectRatio: "7 / 2",
        margin: "0 auto",
      }}
    >
      <ImageSlider imageUrls={IMAGES} />
    </div>
  )
}