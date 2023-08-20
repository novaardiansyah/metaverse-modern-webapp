'use client'

import { motion } from 'framer-motion'

import styles from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'
import { TitleText, TypingText } from '../components'

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the world" textStyles="text-center" />
        <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img src="/map.png" alt="map" className="w-full h-full object-cover" />

          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-01.png" alt="people-01" className="w-full h-full" />
          </div>

          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-02.png" alt="people-02" className="w-full h-full" />
          </div>

          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-03.png" alt="people-03" className="w-full h-full" />
          </div>

          <div className="hidden absolute top-1/2 left-[22%] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5D6680] md:flex justify-center">
            <img src="/mask-1.png" alt="mask-1" className="w-full h-full" />
            <p className="text-white font-semibold text-[18px] leading-[22.68px] absolute bottom-5">The Upside Down</p>
          </div>

          <div className="hidden absolute top-[45px] right-[20%] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5D6680] md:flex justify-center">
            <img src="/mask-2.png" alt="mask-2" className="w-full h-full" />
            <p className="text-white font-semibold text-[18px] leading-[22.68px] absolute bottom-5">Hawkins Labs</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default World;
