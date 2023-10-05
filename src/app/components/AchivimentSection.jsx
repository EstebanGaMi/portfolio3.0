"use client";
import FlipNumbers from "react-flip-numbers";

const achievementsList = [
  {
    metric: "Projects",
    numbers: "10",
    postfix: "+",
  },
  {
    metric: "Users",
    numbers: "10",
  },
  {
    metric: "certificates",
    numbers: "40",
    postfix: "+",
  },
  {
    metric: "Years",
    numbers: "2",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-3xl font-bold flex flex-row ">
                {achievement.prefix}
                <FlipNumbers
                  height={20}
                  width={20}
                  color="white"
                  play
                  perspective={100}
                  numbers={achievement.numbers}
                  delay={1}
                  duration={5}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
