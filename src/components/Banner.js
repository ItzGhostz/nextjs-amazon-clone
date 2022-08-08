import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        axis="horizontal"
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61Wgap2OLHL._SX3000_.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61Ew2L5n2+L._SX3000_.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/BankPromotions/DBS/HK/2022/Jun-Jul/3000x1200_eng._CB636188403_.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
