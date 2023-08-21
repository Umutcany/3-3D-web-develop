import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/Motion";
import { SectionWrapper } from "../hoc";

interface Service {
  title: string;
  icon: string;
}

interface ServiceCardProps extends Service {
  index: number;
}

const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Hakkımda</p>
        <h2 className={styles.sectionHeadText}>Önİzlenim</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Kendisini geliştirmeye, her yeni bir günde daha iyi bir hale gelebilmek
        için elinden geleni yapan bir türk genciyim.
        Html5,Css,Javascript,Bootstrap,Tailwind,ReactJS,Typescript,Redux
        Hakkında bilgi sahibiyim. Aktif olarak üniversite öğrencisiyim.
        Öğrenmeye aç, Takım çalışmasına elverişli, adapte olabilen bir kişiliğe
        sahibim.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <Tilt key={service.title} className="xs:w-[250px] w-full">
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
