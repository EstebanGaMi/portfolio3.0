"use client";
import FlipNumbers from "react-flip-numbers";
import React, { useEffect, useState } from "react";

const AchievementsSection = () => {
  const [contador, setContador] = useState(0);
  const achievementsList = [
    {
      metric: "Projects",
      numbers: "10",
      postfix: "+",
    },
    {
      metric: "views",
      numbers: `${1}${contador}`,
    },
    {
      metric: "certificates",
      numbers: "40",
      postfix: "+",
    },
    {
      metric: "Years",
      numbers: "3",
    },
  ];
  useEffect(() => {
    // Lógica para obtener el contador de visitas (puedes usar localStorage)
    const visitas = parseInt(localStorage.getItem("contadorVisitas")) || 0;
    setContador(visitas);

    // Incrementar el contador al cargar la página
    localStorage.setItem("contadorVisitas", (visitas + 1).toString());
  }, []);
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-3xl py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-3xl font-bold flex flex-row">
                {achievement.prefix}
                <FlipNumbers
                  height={25}
                  width={25}
                  color="white"
                  play
                  perspective={150}
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
