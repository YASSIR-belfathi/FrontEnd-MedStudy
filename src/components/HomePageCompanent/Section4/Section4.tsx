"use client";

import Image from "next/image";
import FirstImage from "@/assets/HomePageAssets/Section4/jglw_bke0_220113.jpg";
import ArrowIcon from "@/assets/HomePageAssets/Section4/right-arrow (1).png";
import { useRef, useState } from "react";

const Section4 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffSet] = useState(0);

  const cardWidth = 310;
  const maxOffset = -(cardWidth * 3);

  function previousButton() {
    const newOffset = Math.min(offset + cardWidth, 0);
    setOffSet(newOffset);
    if (ref.current) {
      ref.current.style.transform = `translateX(${newOffset}px)`;
    }
  }

  const afterButton = () => {
    const newOffset = Math.max(offset - cardWidth, maxOffset);
    setOffSet(newOffset);
    if (ref.current) {
      ref.current.style.transform = `translateX(${newOffset}px)`;
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
      <div className="w-full h-max gap-10 py-4 overflow-x-hidden relative">
        <div
          ref={ref}
          className="container_catalogue transition-transform duration-500 ease-in-out w-max h-max flex flex-row gap-10 justify-start"
        >
          <div className="w-max h-max flex flex-col rounded-lg border-[2px] border-[#000000] shadow-[0px_0px_7px_0px_black] shrink-0">
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
          <div className="w-max h-max flex flex-col rounded-lg border-[2px] border-[#000000] shadow-[0px_0px_7px_0px_black] shrink-0">
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
          <div className="w-max h-max flex flex-col rounded-lg border-[2px] border-[#000000] shadow-[0px_0px_7px_0px_black] shrink-0">
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
          <div className="w-max h-max flex flex-col rounded-lg border-[2px] border-[#000000] shadow-[0px_0px_7px_0px_black] shrink-0">
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
        <div className="w-full h-full absolute px-2 py-4 justify-between items-center top-0 flex flex-row">
          <div
            className="w-max h-max p-4 rounded-[50%] border-[1px] border-black bg-white shadow-[0px_0px_4px_0px_#bebebe] hover:cursor-pointer"
            onClick={() => {
              previousButton();
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
              afterButton();
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
