import Image from "next/image";
import LogoPage from "@/assets/NavBarLandingPageAssets/MedStudy.png";
import Link from "next/link";

const NavBarLandingPage = () => {
  return (
    <div className="w-full h-[50px] overflow-hidden flex flex-row justify-between py-[3px] px-[4px] items-center border-[1px] border-[#e0e0e0] shadow-[0px_1px_6px_0px_#e0e0e0] fixed top-0 z-999 bg-white">
      <div className="w-max h-max flex items-center">
        <Image src={LogoPage} alt="en-cours" className="w-[150px] h-[150px]" />
      </div>
      <div className="w-max h-max grid grid-cols-7 text-[black] font-[500] text-[1.1em] gap-4">
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
    </div>
  );
};

export default NavBarLandingPage;
