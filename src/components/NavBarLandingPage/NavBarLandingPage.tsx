"use client";
import Image from "next/image";
import LogoPage from "@/assets/NavBarLandingPageAssets/MedStudy.png";
import Link from "next/link";
import MenuIcon from "@/assets/NavBarLandingPageAssets/menu.png";
import { useState } from "react";

const NavBarLandingPage = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const container_links = document.getElementsByClassName("container_links");

  const displayMenu = (value: boolean) => {
    if (value) {
      (container_links[0] as HTMLDivElement).style.height = "max-content";
      setToggle(false);
    } else {
      (container_links[0] as HTMLDivElement).style.height = "0px";
      setToggle(true);
    }
  };

  return (
    <div className="w-full h-max overflow-hidden flex flex-col justify-between py-[3px] px-[4px] items-center border-[1px] border-[#e0e0e0] fixed shadow-[0px_1px_6px_0px_#e0e0e0] top-0 z-20 bg-white">
      <div className="w-full h-max flex flex-row items-center justify-between">
        <div className="w-max h-[50px] overflow-hidden flex items-center">
          <Image
            src={LogoPage}
            alt="en-cours"
            className="w-[150px] h-[150px]"
          />
        </div>
        <div className="md:grid w-max h-max grid-cols-7 text-[black] font-[500] text-[1.1em] gap-4 max-md:hidden">
          <div className="col-span-1 w-full flex justify-center h-max hover:cursor-pointer hover:text-blue-500">
            <Link href={"#Home"} className="w-max h-max">
              <p>Home</p>
            </Link>
          </div>
          <div className="col-span-1 w-full flex justify-center h-max hover:cursor-pointer hover:text-blue-500">
            <Link href={"#Presentation"}>
              <p>Presentation</p>
            </Link>
          </div>
          <div className="col-span-1 w-full flex justify-center h-max hover:cursor-pointer hover:text-blue-500">
            <Link href={"#Products"}>
              <p>Products</p>
            </Link>
          </div>
          <div className="col-span-1 w-full flex justify-center h-max hover:cursor-pointer hover:text-blue-500">
            <Link href={"#Comments"}>
              <p>Comments</p>
            </Link>
          </div>
          <div className="col-span-1 w-full flex justify-center h-max hover:cursor-pointer hover:text-blue-500">
            <Link href={"#AboutUs"}>
              <p>About Us</p>
            </Link>
          </div>
          <div className="col-span-1 w-full flex justify-center h-max hover:cursor-pointer hover:text-blue-500">
            <Link href={"#Keys"}>
              <p>Key Numbers</p>
            </Link>
          </div>
          <div className="col-span-1 w-full flex justify-center h-max hover:cursor-pointer hover:text-blue-500">
            <Link href={"#ContactUs"}>
              <p>Contact</p>
            </Link>
          </div>
        </div>
        <div
          className="w-max h-max flex justify-center items-center px-4 md:hidden cursor-pointer"
          onClick={() => {
            displayMenu(toggle);
          }}
        >
          <Image src={MenuIcon} alt="en-cours" className="h-[30px] w-[30px]" />
        </div>
      </div>
      <div className="container_links md:hidden max-md:grid transition-transform duration-1000 ease-in-out w-full overflow-hidden h-0 grid-cols-1 text-[black] font-[500] bg-white text-[1.1em] gap-2">
        <div className="border-t-[#a7a6a6] border-t-[1px] col-span-1 w-full flex justify-start h-max hover:cursor-pointer hover:text-blue-500">
          <Link href={"#Home"} className="w-max h-max">
            <p
              onClick={() => {
                displayMenu(false);
              }}
            >
              Home
            </p>
          </Link>
        </div>
        <div className="border-t-[#a7a6a6] border-t-[1px] col-span-1 w-full flex justify-start h-max hover:cursor-pointer hover:text-blue-500">
          <Link href={"#Presentation"}>
            <p
              onClick={() => {
                displayMenu(false);
              }}
            >
              Presentation
            </p>
          </Link>
        </div>
        <div className="border-t-[#a7a6a6] border-t-[1px] col-span-1 w-full flex justify-start h-max hover:cursor-pointer hover:text-blue-500">
          <Link href={"#Products"}>
            <p
              onClick={() => {
                displayMenu(false);
              }}
            >
              Products
            </p>
          </Link>
        </div>
        <div className="border-t-[#a7a6a6] border-t-[1px] col-span-1 w-full flex justify-start h-max hover:cursor-pointer hover:text-blue-500">
          <Link href={"#Comments"}>
            <p
              onClick={() => {
                displayMenu(false);
              }}
            >
              Comments
            </p>
          </Link>
        </div>
        <div className="border-t-[#a7a6a6] border-t-[1px] col-span-1 w-full flex justify-start h-max hover:cursor-pointer hover:text-blue-500">
          <Link href={"#AboutUs"}>
            <p
              onClick={() => {
                displayMenu(false);
              }}
            >
              About Us
            </p>
          </Link>
        </div>
        <div className="border-t-[#a7a6a6] border-t-[1px] col-span-1 w-full flex justify-start h-max hover:cursor-pointer hover:text-blue-500">
          <Link href={"#Keys"}>
            <p
              onClick={() => {
                displayMenu(false);
              }}
            >
              Key Numbers
            </p>
          </Link>
        </div>
        <div className="border-t-[#a7a6a6] border-t-[1px] col-span-1 w-full flex justify-start h-max hover:cursor-pointer hover:text-blue-500">
          <Link href={"#ContactUs"}>
            <p
              onClick={() => {
                displayMenu(false);
              }}
            >
              Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarLandingPage;
