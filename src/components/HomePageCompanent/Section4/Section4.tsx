"use client";

import Image from "next/image";
import FirstImage from "@/assets/HomePageAssets/Section4/jglw_bke0_220113.jpg";
import ArrowIcon from "@/assets/HomePageAssets/Section4/right-arrow (1).png";
import { useRef } from "react";

const Section4 = () => {
  const refChildren1Div = useRef<HTMLDivElement>(null);
  const refChildren2Div = useRef<HTMLDivElement>(null);

  const prevCardWidth = useRef(340);
  const afterCardWidth = useRef(340);

  const prevContent = () => {
    if (refChildren1Div.current && prevCardWidth.current <= 340 * 3) {
      refChildren1Div.current.style.transform = `translateX(-${prevCardWidth.current}px)`;
      prevCardWidth.current += 340;
      afterCardWidth.current -= 340;
    }
  };

  const afterContent = () => {
    if (refChildren1Div.current && afterCardWidth.current <= 0) {
      refChildren1Div.current.style.transform = `translateX(${afterCardWidth.current}px)`;
      prevCardWidth.current -= 340;
      afterCardWidth.current += 340;
    }
  };

  const pauseAnimation = (value: boolean) => {
    if (refChildren1Div.current && refChildren2Div.current) {
      if (value) {
        refChildren1Div.current.style.animationPlayState = "paused";
        refChildren2Div.current.style.animationPlayState = "Paused";
      } else {
        refChildren1Div.current.style.animationPlayState = "running";
        refChildren2Div.current.style.animationPlayState = "running";
      }
    }
  };

  return (
    <div
      className="w-full h-max px-8 py-10 flex flex-col bg-white"
      id="Products"
    >
      <div className="w-full h-max mb-10 flex flex-row justify-center items-center">
        <hr className="w-[100px] h-[5px] rounded-lg border-none bg-[#55F2C8]" />
        <p className="text-[2em] text-black mx-4">Catalogue</p>
        <hr className="w-[100px] h-[5px] rounded-lg border-none bg-[#55F2C8]" />
      </div>
      <div className="w-full flex overflow-hidden flex-row h-max py-4 relative gap-10">
        <div
          ref={refChildren1Div}
          className="container_catalogue w-max h-max flex flex-row gap-10 transition-transform duration-500 ease-in-out"
        >
          <div className="w-max h-max flex flex-col rounded-lg border-[2px] border-[#000000] shadow-[0px_0px_7px_0px_black]">
            <Image
              src={FirstImage}
              alt="en-cours"
              className="w-[300px] h-[400px] border-[1px] border-b-black rounded-t-lg"
            />
            <div className="w-full h-max flex justify-center py-2">
              <p className="w-max h-max text-[1.7em] font-bold">Semestre</p>
            </div>
            <div className="w-full h-max py-2 flex justify-center">
              <p className="w-max h-max">7 semestres</p>
            </div>
          </div>
          <div className="w-max h-max flex flex-col rounded-lg border-[2px] border-[#000000] shadow-[0px_0px_7px_0px_black]">
            <Image
              src={FirstImage}
              alt="en-cours"
              className="w-[300px] h-[400px] border-[1px] border-b-black rounded-t-lg"
            />
            <div className="w-full h-max flex justify-center py-2">
              <p className="w-max h-max text-[1.7em] font-bold">Semestre</p>
            </div>
            <div className="w-full h-max py-2 flex justify-center">
              <p className="w-max h-max">7 semestres</p>
            </div>
          </div>
          <div className="w-max h-max flex flex-col rounded-lg border-[2px] border-[#000000] shadow-[0px_0px_7px_0px_black]">
            <Image
              src={FirstImage}
              alt="en-cours"
              className="w-[300px] h-[400px] border-[1px] border-b-black rounded-t-lg"
            />
            <div className="w-full h-max flex justify-center py-2">
              <p className="w-max h-max text-[1.7em] font-bold">Semestre</p>
            </div>
            <div className="w-full h-max py-2 flex justify-center">
              <p className="w-max h-max">7 semestres</p>
            </div>
          </div>
          <div className="w-max h-max flex flex-col rounded-lg border-[2px] border-[#000000] shadow-[0px_0px_7px_0px_black]">
            <Image
              src={FirstImage}
              alt="en-cours"
              className="w-[300px] h-[400px] border-[1px] border-b-black rounded-t-lg"
            />
            <div className="w-full h-max flex justify-center py-2">
              <p className="w-max h-max text-[1.7em] font-bold">Semestre</p>
            </div>
            <div className="w-full h-max py-2 flex justify-center">
              <p className="w-max h-max">7 semestres</p>
            </div>
          </div>
        </div>
        <div
          id="container_button"
          className="w-full h-full absolute px-2 py-4 justify-between items-center top-0 flex flex-row "
          onMouseEnter={() => {
            pauseAnimation(true);
          }}
          onMouseLeave={() => {
            pauseAnimation(false);
          }}
        >
          <div
            className="w-max h-max p-4 rounded-[50%] border-[1px] border-black bg-white shadow-[0px_0px_4px_0px_#bebebe] hover:cursor-pointer"
            onClick={() => {
              prevContent();
            }}
          >
            <Image
              src={ArrowIcon}
              alt="en-cours"
              className="w-[20px] h-[20px] rotate-180"
            />
          </div>
          <div
            className="w-max h-max p-4 rounded-[50%] border-[1px] border-black bg-white shadow-[0px_0px_4px_0px_#bebebe] hover:cursor-pointer"
            onClick={() => {
              afterContent();
            }}
          >
            <Image
              src={ArrowIcon}
              alt="en-cours"
              className="w-[20px] h-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
