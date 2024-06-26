import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="">
      {/* Pantallas: Celular, tablet */}
      <div className="sm:px-10 lg:hidden flex bg-primary text-gray-900 items-center h-25">
        <div className="flex-1 hidden sm:block">
          <Image
            alt="Imagen de manos"
            src="images/footer/icon-hands.svg"
            height={25}
            width={50}
            style={{ height: "10em" }}
            className="w-full"
          />
        </div>
        <div className="m-auto flex-2 flex flex-col items-center">
          <div className="sm:mb-3 text-lg sm:text-md font-semibold bg-white md:p- px-5 text-center rounded-b-xl sm:rounded p-3 md:p-4">
            <span className="font-black">13,14 y 15 </span> de Mayo de 2024
          </div>
          <div className="py-5 sm:py-0 space-y-3">
            <div className="text-md sm:text-sm flex gap-3 items-center md:text-[15px]">
              <span className="font-bold mr-1">Lunes 13</span> desde las 10:00 hrs.
              <Image
                alt="Hora Chile"
                src="images/footer/chilean-flag.svg"
                height={20}
                width={20}
              />
              GMT-3
            </div>
            <div className="text-md sm:text-sm flex gap-3 items-center md:text-[15px]">
              <span className="font-bold mr-1">Martes 14</span> desde las 10:00 hrs.
              <Image
                alt="Hora Chile"
                src="images/footer/chilean-flag.svg"
                height={20}
                width={20}
              />
              GMT-3
            </div>
            <div className="text-md sm:text-sm flex gap-3 items-center md:text-[15px]">
              <span className="font-bold mr-1">Miércoles 15</span> desde las 10:00.
              <Image
                alt="Hora Chile"
                src="images/footer/chilean-flag.svg"
                height={20}
                width={20}
              />
              GMT-3
            </div>
          </div>
        </div>
        <div className="flex-1 hidden sm:block">
          <Image
            alt="Imagen de reloj"
            src="images/footer/icon-clock.svg"
            className="h-14 sm:h-20 w-full"
            height={50}
            width={50}
          />
        </div>
      </div>

      {/* Pantallas: Desktop hacia arriba */}
      <div className="hidden px-10 lg:flex bg-[#a675f4] text-gray-900 items-center h-[125px] shadow-inner">
        <div className="flex">
          <Image
            alt="Imagen de manos"
            src="images/footer/icon-hands.svg"
            height={36}
            width={50}
            className="w-full h-full"
          />
        </div>
        <div className="flex-1 flex justify-around">
          <div className="flex items-center text-xl">
            <Image
              alt="Ímagen de un reloj"
              src="images/footer/icon-calendar.svg"
              className="mr-5"
              height={50}
              width={50}
            />
            <span className="font-black mr-1">13,14 y 15</span> de Mayo de 2024
          </div>
          <div className="gap-10 flex items-center text-xl">
            <Image
              alt="Imagen de un reloj"
              src="images/footer/icon-clock.svg"
              height={50}
              width={50}
            />
            <div className="flex flex-col space-y-4">
              <div className="flex gap-3 lg:text-lg xl:text-xl">
                <span className="font-bold mr-1">Lunes 13</span> desde las
                10:00 hrs.
                <Image
                  alt="Hora Chile"
                  src="images/footer/chilean-flag.svg"
                  height={20}
                  width={20}
                />
                GMT-3
              </div>
              <div className="flex gap-3 lg:text-lg xl:text-xl">
                <span className="font-bold mr-1">Martes 14</span> desde las 10:00
                hrs.
                <Image
                  alt="Hora Chile"
                  src="images/footer/chilean-flag.svg"
                  height={20}
                  width={20}
                />
                GMT-3
              </div>
              <div className="flex gap-3 lg:text-lg xl:text-xl">
                <span className="font-bold mr-1">Miércoles 15</span> desde las
                10:00 hrs.
                <Image
                  alt="Hora Chile"
                  src="images/footer/chilean-flag.svg"
                  height={20}
                  width={20}
                />
                GMT-3
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
