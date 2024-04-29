"use client";
import { useState } from "react";
import AgendaLogo from "@/components/AgendaLogo";
import { Button } from "@/components/Button/Button.js";
import { Title } from "@/components/Title";
import { Timeline } from "@/components/Timeline";
import talksData from "@/talks/talks.json";
import { AnimatePresence, motion } from "framer-motion";

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(13);
  const talksDay1 = talksData.filter(
    (item) => new Date(item.startHour).getDate() === 13,
  );
  const talksDay2 = talksData.filter(
    (item) => new Date(item.startHour).getDate() === 14,
  );

  const talksDay3 = talksData.filter(
    (item) => new Date(item.startHour).getDate() === 15,
  );
  return (
    <div className="flex flex-col w-full relative justify-center items-center">
      <section className="lg:px-64 pt-10 ">
        <Title
          logo={
            <svg
              aria-label="TechTon"
              className="fill-primary h-32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>TechTon | Agenda </title>
              <desc>Logo de TechTon</desc>
              <AgendaLogo />
            </svg>
          }
        />
      </section>
      <div className="sticky top-0 pt-6 pb-10 w-full h-fit z-10">
        <div className="relative z-10 flex justify-center gap-4 flex-wrap">
          <Button
            id="day13"
            variant={`${activeDay === 13 ? "primary" : "tertiary"}`}
            onClick={() => setActiveDay(13)}
          >
            Lunes 13 de Mayo
          </Button>
          <Button
            id="day14"
            variant={`${activeDay === 14 ? "primary" : "tertiary"}`}
            onClick={() => setActiveDay(14)}
          >
            Martes 14 de Mayo
          </Button>

          <Button
            id="day15"
            variant={`${activeDay === 15 ? "primary" : "tertiary"}`}
            onClick={() => setActiveDay(15)}
          >
            Miercoles 15 de Mayo
          </Button>

        </div>
        <div
          className="absolute  top-0 bottom-0 left-0 right-0 z-0"
          style={{
            backgroundImage:
              "-webkit-gradient(linear, left top, left bottom, color-stop(1, rgba(35, 33, 33, 0)), color-stop(0, rgba(35, 33, 33, 1)))",
          }}
        ></div>
      </div>


      <AnimatePresence>
        {activeDay === 13 && (
          <motion.div
            key="day13"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Timeline data={talksDay1} />
          </motion.div>
        )}
        {activeDay === 14 && (
          <motion.div
            key="day14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Timeline data={talksDay2} />
          </motion.div>
        )}
        {activeDay === 15 && (
          <motion.div
            key="day15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Timeline data={talksDay3} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
