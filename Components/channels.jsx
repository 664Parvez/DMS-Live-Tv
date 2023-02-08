import Link from "next/link"
import Head from 'next/head'
import React, {useState, useEffect} from "react"

// Swiper Module and CSS and Navigator
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// Swiper Module and CSS and Navigator

// import MainPage from "./channel/index"
import { Autoplay, Navigation } from 'swiper';


const Channel = ({data}) => {


    return (
        <>
            <div id="all_channel">
                <ul className="nav nav-pills justify-content-center mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-news-tab" data-bs-toggle="pill" data-bs-target="#pills-news" type="button" role="tab" aria-controls="pills-news" aria-selected="true">News</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-sports-tab" data-bs-toggle="pill" data-bs-target="#pills-sports" type="button" role="tab" aria-controls="pills-sports" aria-selected="false">Sports</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-bangla-tab" data-bs-toggle="pill" data-bs-target="#pills-bangla" type="button" role="tab" aria-controls="pills-bangla" aria-selected="false">Bangla</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-hindi-tab" data-bs-toggle="pill" data-bs-target="#pills-hindi" type="button" role="tab" aria-controls="pills-hindi" aria-selected="false">Hindi</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-english-tab" data-bs-toggle="pill" data-bs-target="#pills-english" type="button" role="tab" aria-controls="pills-english" aria-selected="false">English</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-documentary-tab" data-bs-toggle="pill" data-bs-target="#pills-documentary" type="button" role="tab" aria-controls="pills-documentary" aria-selected="false">Documentary</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-cartoon-tab" data-bs-toggle="pill" data-bs-target="#pills-cartoon" type="button" role="tab" aria-controls="pills-cartoon" aria-selected="false">Cartoon</button>
                    </li>
                </ul>
                
                <div className="tab-content text-center" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab">

                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={30}
                            allowTouchMove={true}
                            grabCursor={true}
                            loop={true}
                            breakpoints= {{
                                300: {
                                slidesPerView: 3,
                                spaceBetween: 10
                                },
                                480: {
                                slidesPerView: 4,
                                spaceBetween: 20
                                },
                                640: {
                                slidesPerView: 5,
                                spaceBetween: 30
                                },
                                1025: {
                                slidesPerView: 7,
                                spaceBetween: 30
                                },
                                1440: {
                                slidesPerView: 10,
                                spaceBetween: 30
                                }
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"

                            >
                            
                            {
                            data ?
                            data.map((items, index = 0) => {
                                return (
                                <>
                                    {
                                    items.channel === "news" ? 
                                        <SwiperSlide key={index + 1}>
                                            <Link href={`/channel/${items.slug}`}>
                                                <img src={items.img} alt='' />
                                            </Link>
                                        </SwiperSlide> : ""
                                    }
                    
                                </>
                                )
                            }) : <div>Data is Not Available</div>
                            }     

                        </Swiper>

                    </div>

                    <div className="tab-pane fade" id="pills-sports" role="tabpanel" aria-labelledby="pills-sports-tab">

                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={30}
                            allowTouchMove={true}
                            grabCursor={true}
                            loop={true}
                            breakpoints= {{
                                300: {
                                slidesPerView: 3,
                                spaceBetween: 10
                                },
                                480: {
                                slidesPerView: 4,
                                spaceBetween: 20
                                },
                                640: {
                                slidesPerView: 5,
                                spaceBetween: 30
                                },
                                1025: {
                                slidesPerView: 7,
                                spaceBetween: 30
                                },
                                1440: {
                                slidesPerView: 10,
                                spaceBetween: 30
                                }
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"

                            >
                            
                            {
                            data ?
                            data.map((items, index = 0) => {
                                return (
                                <>
                                    {
                                    items.channel === "sports" ? 
                                        <SwiperSlide key={index + 1}>
                                            <Link href={`/channel/${items.slug}`}>
                                                <img src={items.img} alt='' />
                                            </Link>
                                        </SwiperSlide> : ""
                                    }
                    
                                </>
                                )
                            }) : <div>Data is Not Available</div>
                            }     

                        </Swiper>

                    </div>
                    
                    <div className="tab-pane fade" id="pills-bangla" role="tabpanel" aria-labelledby="pills-bangla-tab">
                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={30}
                            allowTouchMove={true}
                            grabCursor={true}
                            loop={true}
                            breakpoints= {{
                                300: {
                                slidesPerView: 3,
                                spaceBetween: 10
                                },
                                480: {
                                slidesPerView: 4,
                                spaceBetween: 20
                                },
                                640: {
                                slidesPerView: 5,
                                spaceBetween: 30
                                },
                                1025: {
                                slidesPerView: 7,
                                spaceBetween: 30
                                },
                                1440: {
                                slidesPerView: 10,
                                spaceBetween: 30
                                }
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"

                            >
                            
                            {
                            data ?
                            data.map((items, index = 0) => {
                                return (
                                <>
                                    {
                                    items.channel === "bangla" ? 
                                        <SwiperSlide key={index + 1}>
                                            <Link href={`/channel/${items.slug}`}>
                                                <img src={items.img} alt='' />
                                            </Link>
                                        </SwiperSlide> : ""
                                    }
                    
                                </>
                                )
                            }) : <div>Data is Not Available</div>
                            }     

                        </Swiper>
                    </div>
                    
                    <div className="tab-pane fade" id="pills-hindi" role="tabpanel" aria-labelledby="pills-hindi-tab">
                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={30}
                            allowTouchMove={true}
                            grabCursor={true}
                            loop={true}
                            breakpoints= {{
                                300: {
                                slidesPerView: 3,
                                spaceBetween: 10
                                },
                                480: {
                                slidesPerView: 4,
                                spaceBetween: 20
                                },
                                640: {
                                slidesPerView: 5,
                                spaceBetween: 30
                                },
                                1025: {
                                slidesPerView: 7,
                                spaceBetween: 30
                                },
                                1440: {
                                slidesPerView: 10,
                                spaceBetween: 30
                                }
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"

                            >
                            
                            {
                            data ?
                            data.map((items, index = 0) => {
                                return (
                                <>
                                    {
                                    items.channel === "sports" ? 
                                        <SwiperSlide key={index + 1}>
                                            <Link href={`/channel/${items.slug}`}>
                                                <img src={items.img} alt='' />
                                            </Link>
                                        </SwiperSlide> : ""
                                    }
                    
                                </>
                                )
                            }) : <div>Data is Not Available</div>
                            }     

                        </Swiper>
                    </div>

                    <div className="tab-pane fade" id="pills-english" role="tabpanel" aria-labelledby="pills-english-tab">
                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={30}
                            allowTouchMove={true}
                            grabCursor={true}
                            loop={true}
                            breakpoints= {{
                                300: {
                                slidesPerView: 3,
                                spaceBetween: 10
                                },
                                480: {
                                slidesPerView: 4,
                                spaceBetween: 20
                                },
                                640: {
                                slidesPerView: 5,
                                spaceBetween: 30
                                },
                                1025: {
                                slidesPerView: 7,
                                spaceBetween: 30
                                },
                                1440: {
                                slidesPerView: 10,
                                spaceBetween: 30
                                }
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"

                            >
                            
                            {
                            data ?
                            data.map((items, index = 0) => {
                                return (
                                <>
                                    {
                                    items.channel === "english" ? 
                                        <SwiperSlide key={index + 1}>
                                            <Link href={`/channel/${items.slug}`}>
                                                <img src={items.img} alt='' />
                                            </Link>
                                        </SwiperSlide> : ""
                                    }
                    
                                </>
                                )
                            }) : <div>Data is Not Available</div>
                            }     

                        </Swiper>
                    </div>

                    <div className="tab-pane fade" id="pills-documentary" role="tabpanel" aria-labelledby="pills-documentary-tab">
                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={30}
                            allowTouchMove={true}
                            grabCursor={true}
                            loop={true}
                            breakpoints= {{
                                300: {
                                slidesPerView: 3,
                                spaceBetween: 10
                                },
                                480: {
                                slidesPerView: 4,
                                spaceBetween: 20
                                },
                                640: {
                                slidesPerView: 5,
                                spaceBetween: 30
                                },
                                1025: {
                                slidesPerView: 7,
                                spaceBetween: 30
                                },
                                1440: {
                                slidesPerView: 10,
                                spaceBetween: 30
                                }
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"

                            >
                            
                            {
                            data ?
                            data.map((items, index = 0) => {
                                return (
                                <>
                                    {
                                    items.channel === "sports" ? 
                                        <SwiperSlide key={index + 1}>
                                            <Link href={`/channel/${items.slug}`}>
                                                <img src={items.img} alt='' />
                                            </Link>
                                        </SwiperSlide> : ""
                                    }
                    
                                </>
                                )
                            }) : <div>Data is Not Available</div>
                            }     

                        </Swiper>
                    </div>

                    <div className="tab-pane fade" id="pills-cartoon" role="tabpanel" aria-labelledby="pills-cartoon-tab">
                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={30}
                            allowTouchMove={true}
                            grabCursor={true}
                            loop={true}
                            breakpoints= {{
                                300: {
                                slidesPerView: 3,
                                spaceBetween: 10
                                },
                                480: {
                                slidesPerView: 4,
                                spaceBetween: 20
                                },
                                640: {
                                slidesPerView: 5,
                                spaceBetween: 30
                                },
                                1025: {
                                slidesPerView: 7,
                                spaceBetween: 30
                                },
                                1440: {
                                slidesPerView: 10,
                                spaceBetween: 30
                                }
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"

                            >
                            
                            {
                            data ?
                            data.map((items, index = 0) => {
                                return (
                                <>
                                    {
                                    items.channel === "bangla" ? 
                                        <SwiperSlide key={index + 1}>
                                            <Link href={`/channel/${items.slug}`}>
                                                <img src={items.img} alt='' />
                                            </Link>
                                        </SwiperSlide> : ""
                                    }
                    
                                </>
                                )
                            }) : <div>Data is Not Available</div>
                            }     

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Channel