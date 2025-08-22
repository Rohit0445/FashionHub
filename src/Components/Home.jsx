import React, { useEffect } from "react";

// Hooks Import
import { useRef, useState } from "react";

// Swipper React Import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// React Icons Import
import { FaCalendarMinus } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaGift } from "react-icons/fa6";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";


 import AOS from 'aos';
    import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
        AOS.init({
          // Optional: Configuration options
          duration: 3000, // Animation duration in milliseconds
          once: true,    // Whether animation should happen only once
        });
      }, []);
  return (
    <>
      <div className="bg-white pt-32 " data-aos="fade-up">
        <h1 className="font-bold text-6xl ml-140 ">New Collections</h1>
        <br />
        <br />
        <p className=" ml-120 font-semibold">
          Step into the season with our latest arrivals. Fresh styles, bold
          colors, and perfect fits await you. <br /> From casual comfort to
          statement looks — we’ve got it all. <br /> Discover the trends
          everyone will be talking about.
        </p>

        <div className="p-20 " data-aos="fade-zoom-in">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <img src="newcollectionimg1.jpg" alt="" />
              <h1 className="text-3xl">Cotton Tops</h1>
              <br />
              <p>
                Tops for Women: Select from a wide range of stylish tops for
                women online at Cottonworld.{" "}
              </p>{" "}
              <br />
              <button className="border rounded p-2 hover:bg-black hover:text-white">
                Discover Now
              </button>
              <br />

            </SwiperSlide>
            <SwiperSlide>
              <img src="newcollectionimg2.jpg" alt="" />
              <h1 className="text-3xl">Winter Coats</h1>
              <br />
              <p>
                Coats for Women: Select from a wide range of stylish Coats for
                women online at Coatsworld.{" "}
              </p>{" "}
              <br />
              <button className="border rounded p-2 hover:bg-black hover:text-white">
                Discover Now
              </button>
              <br />
              <br />

            </SwiperSlide>
            <SwiperSlide>
              <img src="newcollectionimg3.jpg" alt="" />
              <h1 className="text-3xl">Co-ord Sets </h1>
              <br />
              
              <p>
                Co-ord Sets for Women: Explore our trendy blue co-ord sets that
                provide a stylish look for casual outings.{" "}
              </p>
              <br />
              <button className="border rounded p-2 hover:bg-black hover:text-white">
                Discover Now
              </button>
              <br />
              <br />

            </SwiperSlide>
            <SwiperSlide>
              <img src="newcollectionimg4.jpg" alt="" />
              <h1 className="text-3xl">Casual Wear</h1>
              <br />
              <p>
                Casual Wear for Women: Select from a wide range of stylish
                Casuals for women online at FashionHub.{" "}
              </p>{" "}
              <br />
              <button className="border rounded p-2 hover:bg-black hover:text-white">
                Discover Now
              </button>
              <br />
              <br />
              
            </SwiperSlide>
            <SwiperSlide>
              <img src="newcollectionimg5.jpg" alt="" />
              <h1 className="text-3xl"> Soft Lather Jackets</h1>
              <br />
              <p>
                Lather Jackets for Men: Select from a wide range of stylish tops
                for Men online at FAshionHub.{" "}
              </p>{" "}
              <br />
              <button className="border rounded p-2 hover:bg-black hover:text-white">
                Discover Now
              </button>
              <br />
              <br />

            </SwiperSlide>
            <SwiperSlide>
              <img src="newcollectionimg6.jpg" alt="" />
              <h1 className="text-3xl">Women Sweaters </h1>
              <br />
              <p>
                Sweaters for Women: Shop for sweaters for women Online in India.
                Buy long line, poncho, cardigan and more sweater{" "}
              </p>{" "}
              <br />
              <button className="border rounded p-2 hover:bg-black hover:text-white">
                Discover Now
              </button>
              <br />
              <br />

            </SwiperSlide>
          </Swiper>

          <div className="pt-30 px-20 flex gap-10" >
            <div className="" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
              <FaCalendarMinus className="h-10 w-10 ml-25 text-gray-700" />
              <br />
              <h1 className="text-2xl">Book An Appointment</h1>
              <br />
              <p className="text-gray-500">
                Schedule your visit with ease and on your time. Our team is
                ready to give you the best experience.
              </p>
            </div>
            <div className="" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
              <BsFillHandbagFill className="h-10 w-10 ml-25 text-gray-700" />
              <br />
              <h1 className="text-2xl pl-10">Pick up in store</h1>
              <br />
              <p className="text-gray-500">
                Shop online and collect your order at your convenience. Fast,
                easy, and ready for you — right at our store..
              </p>
            </div>
            <div className="" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              <FaGift className="h-10 w-10 ml-25 text-gray-700" />
              <br />
              <h1 className="text-2xl"> Special packaging </h1>
              <br />
              <p className="text-gray-500">
                Make every purchase feel extra special with our premium
                packaging. Perfect for gifting or treating yourself in style.
              </p>
            </div>
            <div className="" data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine">
              <HiMiniArrowPathRoundedSquare className="h-10 w-10 ml-25 text-gray-700" />
              <br />
              <h1 className="text-2xl"> free global returns </h1>
              <br />
              <p className="text-gray-500">
                Schedule your visit with ease and on your time. Our team is
                ready to give you the best experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-duration="1000" className="flex p-20 gap-5">
        <div>
          <img src="shopformmen.jpg" alt="" /><br />
          <Link to={`/products/${"mens"}`} className="border rounded p-2 mt-8 hover:bg-black hover:text-white ">
            Shop For Men
          </Link>
        </div>
        <div>
          <img src="shopforwomen.jpg" alt="" /><br />
          <Link to={`/products/${"womens"}`} className="border rounded p-2 mt-8 hover:bg-black hover:text-white ">
            Shop For Men
          </Link>
        </div>
        <div>
          <img src="shopaccessories.jpg" alt="" />
          <button className="border rounded p-2 mt-4 hover:bg-black hover:text-white">
            Shop Accessories
          </button>
        </div>
      </div>

      <div className="px-20">
        <h1 className="text-4xl">Our New Arrivals</h1><br />
        <button className="border rounded p-2 hover:bg-black hover:text-white">
          View All Products
        </button>
        <br /><br />
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            // loop={true}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <img src="newarrivals1.jpg" alt="" />
              <h1 className="text-3xl">Sleaveless Sweaters</h1>
              <br />
              <br />
              
            </SwiperSlide>
            <SwiperSlide>
              <img src="newarrivals2.jpg" alt="" />
              <h1 className="text-3xl">Jeans </h1>
              <br />
              <br />
              
            </SwiperSlide>
            <SwiperSlide>
              <img src="newarrivals3.jpg" alt="" />
              <h1 className="text-3xl">T-shirts </h1>
              <br />
              <br />
              
              
            </SwiperSlide>
            <SwiperSlide>
              <img src="newarrivals4.jpg" alt="" />
              <h1 className="text-3xl">Winter Tops </h1>
              <br />
              <br />
              
            </SwiperSlide>
            <SwiperSlide>
              <img src="newarrivals5.jpg" alt="" />
              <h1 className="text-3xl"> Baggy Jeans</h1>
              <br />
              <br />
              
            </SwiperSlide>
          
          </Swiper>
      </div>
    </>
  );
};

export default Home;
