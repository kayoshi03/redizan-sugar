import Review from "@/ui/Review/Review.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Autoplay} from "swiper/modules";
import logotype from "@/assets/Logotype.png";
import style from "./style.module.scss"
const ReviewsBlock = () => {
    return (
        <div id="reviews" className={style.reviews}>
            <div className="container">
                <div className={style.wrapper}>
                    <h2 className="title red">ОТЗЫВЫ</h2>
                    <div className={style.phone}>
                        <div className={style.logotype}>
                            <p>САХАРНАЯ</p>
                            <img width={50}
                                 src={logotype}
                                 alt={"Логотип Сахарная Вата"}/>
                            <p className={style.red}>ВАТА</p>
                        </div>
                        <div className={style.list}>
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={50}
                                loop={true}
                                autoplay={{
                                    delay: 5000,
                                }}
                            >
                                <SwiperSlide>
                                    <Review/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Review/>
                                </SwiperSlide>
                            </Swiper>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsBlock