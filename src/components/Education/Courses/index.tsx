import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Mousewheel } from 'swiper'

import styles from './Courses.module.scss'
import { coursesData } from '../../../data/courses-data'

export const Courses: FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const updateDimensions = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className={styles.courses}>
      <Swiper
        modules={[Pagination, Autoplay, Mousewheel]}
        slidesPerView={width > 768 ? 3 : width > 480 ? 2 : 1}
        spaceBetween={10}
        mousewheel={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'fraction',
        }}
        loop={true}
        className={styles.mySwiper}
      >
        {coursesData.map((i) => (
          <SwiperSlide className={styles.mySlide} key={i.id}>
            <a target={'_blank'} rel="noreferrer" href={i.link}>
              <img src={i.img} alt={i.text} />
              <span>{i.text}</span>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
