import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '/public/list.json';
import Cards from './Cards';
import { FaRocket } from 'react-icons/fa'; // Importing a rocket icon

function FreeBook() {
    const filteredData = list.filter((data) => data.category === "Free");

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 mt-20'>
                <div className='flex items-center mb-4'>
                    <FaRocket className='text-3xl mr-2 text-blue-500' /> {/* Rocket icon */}
                    <h1 className='font-bold text-xl py-2'>Galactic Reads: Free Adventures Await!</h1>
                </div>
                <p className='mb-4'>
                    Dive into our selection of free books across various genres. Perfect for readers looking to explore new worlds and ideas without any cost.
                </p>

                <div>
                    <Slider {...settings}>
                        {filteredData.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default FreeBook;
