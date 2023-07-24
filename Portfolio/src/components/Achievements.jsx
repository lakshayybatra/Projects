import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({ index, achievement, name }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-2">
      <p className="text-white font-black text-[18px]">{name}</p>
    </div>
    <div className="mt-3">
      <ul className="mt-3 list-disc ml-5 space-y-2">
        <li
          key={{ index }}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {achievement}
        </li>
      </ul>
    </div>
  </motion.div>
);
const Achievements = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I Achieved</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.name}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
