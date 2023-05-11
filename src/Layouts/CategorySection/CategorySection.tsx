import { faArrowLeft, faArrowRight, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { useRef } from "react";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";

const CategorySection = () => {
    const LeftarrowBTN = useRef<HTMLDivElement>(null)
    const RightarrowBTN = useRef<HTMLDivElement>(null)
    return (
        <div className="CategorySection container">
            <div className="text-center mb-1 text-sm">
                <span className="CategorySection-introduction font-RokhFaNumLight bml:text-lg lg:text-xl dark:text-lightSecondaryWhite relative">
                    - دسته بندی دوره های آموزشـی -
                    <div className="absolute -top-[20%] -left-[10%] opacity-20 -rotate-12 scale-150">
                        <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                    </div>
                    <div className="absolute top-[20%] -right-[10%] opacity-20 rotate-12 scale-150">
                        <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                    </div>
                </span>
            </div>
            <p className="text-center font-RokhFaNumBold bml:text-xl lg:text-2xl dark:text-lightSecondaryWhite font-light text-lg mb-6">
                دوره های فراوان در دسته بندی های مختلف
            </p>
            <div className="group relative px-2 text-lightWhite font-danafaBold pb-5">
                <Swiper
                    className="px-2"
                    modules={[Navigation, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onInit={(swiper) => {
                        swiper.params.navigation = {
                            nextEl: LeftarrowBTN.current,
                            prevEl: RightarrowBTN.current,
                            disabledClass: 'hidden',
                        }
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        270: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        370: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 18
                        },
                        980: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }}
                >
                    <SwiperSlide className="text-Gray dark:bg-darkFourthBlack flex flex-col items-center p-2 rounded-md hover:bg-main dark:hover:bg-main dark:text-lightWhite hover:text-lightWhite cursor-pointer transition-all duration-300 group/swiperslide mb-8 shadow-lg">
                        <FontAwesomeIcon icon={faJsSquare} className="text-3xl 2xs:text-4xl md:text-5xl lg:text-6xl" />
                        <p className="mt-3 text-sm md:text-base lg:text-lg xl:text-xl">کارگاه آموزش JS</p>
                        <span className="text-FourthGray text-[10px] md:text-xs lg:text-sm xl:text-base font-danafa transition-all duration-300 group-hover/swiperslide:text-lightWhite">
                            2
                            دوره آموزشی
                        </span>
                    </SwiperSlide>
                    <SwiperSlide className="text-Gray dark:bg-darkFourthBlack flex flex-col items-center p-2 rounded-md hover:bg-main dark:hover:bg-main dark:text-lightWhite hover:text-lightWhite cursor-pointer transition-all duration-300 group/swiperslide mb-8 shadow-lg">
                        <FontAwesomeIcon icon={faJsSquare} className="text-3xl 2xs:text-4xl md:text-5xl lg:text-6xl" />
                        <p className="mt-3 text-sm md:text-base lg:text-lg xl:text-xl">کارگاه آموزش JS</p>
                        <span className="text-FourthGray text-[10px] md:text-xs lg:text-sm xl:text-base font-danafa transition-all duration-300 group-hover/swiperslide:text-lightWhite">
                            2
                            دوره آموزشی
                        </span>
                    </SwiperSlide>
                    <SwiperSlide className="text-Gray dark:bg-darkFourthBlack flex flex-col items-center p-2 rounded-md hover:bg-main dark:hover:bg-main dark:text-lightWhite hover:text-lightWhite cursor-pointer transition-all duration-300 group/swiperslide mb-8 shadow-lg">
                        <FontAwesomeIcon icon={faJsSquare} className="text-3xl 2xs:text-4xl md:text-5xl lg:text-6xl" />
                        <p className="mt-3 text-sm md:text-base lg:text-lg xl:text-xl">کارگاه آموزش JS</p>
                        <span className="text-FourthGray text-[10px] md:text-xs lg:text-sm xl:text-base font-danafa transition-all duration-300 group-hover/swiperslide:text-lightWhite">
                            2
                            دوره آموزشی
                        </span>
                    </SwiperSlide>
                    <SwiperSlide className="text-Gray dark:bg-darkFourthBlack flex flex-col items-center p-2 rounded-md hover:bg-main dark:hover:bg-main dark:text-lightWhite hover:text-lightWhite cursor-pointer transition-all duration-300 group/swiperslide mb-8 shadow-lg">
                        <FontAwesomeIcon icon={faJsSquare} className="text-3xl 2xs:text-4xl md:text-5xl lg:text-6xl" />
                        <p className="mt-3 text-sm md:text-base lg:text-lg xl:text-xl">کارگاه آموزش JS</p>
                        <span className="text-FourthGray text-[10px] md:text-xs lg:text-sm xl:text-base font-danafa transition-all duration-300 group-hover/swiperslide:text-lightWhite">
                            2
                            دوره آموزشی
                        </span>
                    </SwiperSlide>
                    <SwiperSlide className="text-Gray dark:bg-darkFourthBlack flex flex-col items-center p-2 rounded-md hover:bg-main dark:hover:bg-main dark:text-lightWhite hover:text-lightWhite cursor-pointer transition-all duration-300 group/swiperslide mb-8 shadow-lg">
                        <FontAwesomeIcon icon={faJsSquare} className="text-3xl 2xs:text-4xl md:text-5xl lg:text-6xl" />
                        <p className="mt-3 text-sm md:text-base lg:text-lg xl:text-xl">کارگاه آموزش JS</p>
                        <span className="text-FourthGray text-[10px] md:text-xs lg:text-sm xl:text-base font-danafa transition-all duration-300 group-hover/swiperslide:text-lightWhite">
                            2
                            دوره آموزشی
                        </span>
                    </SwiperSlide>
                </Swiper>
                <div ref={LeftarrowBTN} className='absolute top-1/4 translate-y-1 md:translate-y-2 lg:translate-y-3 left-1 -z-[1] opacity-0 scale-0 group-hover:scale-75 2xs:group-hover:scale-100 md:group-hover:scale-115 bml:group-hover:scale-125 lg:group-hover:scale-150 xl:group-hover:scale-[1.75] group-hover:opacity-100 group-hover:z-[10] bg-darkThirdBlack text-lightSecondaryWhite rounded-full p-2 flex place-items-center transition-all duration-500 cursor-pointer'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div ref={RightarrowBTN} className='absolute top-1/4 translate-y-1 md:translate-y-2 lg:translate-y-3 right-1 -z-[1] opacity-0 scale-0 group-hover:scale-75 2xs:group-hover:scale-100 md:group-hover:scale-115 bml:group-hover:scale-125 lg:group-hover:scale-150 xl:group-hover:scale-[1.75] group-hover:opacity-100 group-hover:z-[10] bg-darkThirdBlack text-lightSecondaryWhite rounded-full p-2 flex place-items-center transition-all duration-500 cursor-pointer'>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </div >
    )
}
export default CategorySection