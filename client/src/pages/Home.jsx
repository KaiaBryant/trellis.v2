import React from "react";
import "../assets/styles/Home.css";
import heroVideo from "../assets/images/homepagehero.mp4";
import heroImage from "../assets/images/Untitled design.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function Home() {
    return (
        <div className="home-container">
            {/* ================= HERO SECTION ================= */}
            <section className="video-background">
                <video autoPlay muted loop playsInline>
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="video-content">
                    <h1>Grow Your Own Paradise</h1>
                    <p>Your one stop shop to garden.</p>
                    <Link to="/shop" className="video__shopbtn">
                        Shop All
                    </Link>
                </div>
            </section>


            {/* SHOP SHORTCUTS (Swiper) */}
            <section className="shop-shortcuts-container">
                <h2>Shop by Category</h2>
                <div className="shop-shortcuts-swiper">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2}
                        navigation
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {/* PASS CATEGORY THROUGH LINK */}
                        <SwiperSlide><Link to="/shop" state={{ category: "Seeds" }}>Seeds</Link></SwiperSlide>
                        <SwiperSlide><Link to="/shop" state={{ category: "Pots" }}>Planters</Link></SwiperSlide>
                        <SwiperSlide><Link to="/shop" state={{ category: "Accessories" }}>Tools/Accessories</Link></SwiperSlide>
                        <SwiperSlide><Link to="/shop" state={{ category: "Soil" }}>Soil</Link></SwiperSlide>

                    </Swiper>
                </div>
            </section>
            {/* ================= SHOP SHORTCUTS ================= */}
            {/* <section className="shop-shortcuts-container  slide" >
                <Link to="/shop">Seeds</Link>
                <Link to="/shop">Planters</Link>
                <Link to="/shop">Accessories</Link>
                <Link to="/shop">Soil & Fertilizers</Link>
            </section> */}

            {/* ================= PLANT CLUB SECTION ================= */}
            <section className="plant-club-container">
                <div className="plant-club-main">
                    <div className="plant-club-info">
                        <img src={heroImage} alt="Plant Club" />
                        <p className="plant-club__body">
                            Plant Club by Trellis offers an exclusive membership for
                            in-depth, next-level plant growing techniques, advice and tidbits
                            from planting and seeding to maintenance and harvest.
                            <br />
                            <br />
                            Plant Club offers four levels of membership to help you feel
                            supported as you continue your food-growing journey!
                        </p>
                        <button className="plant-club__btn">Join Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
}