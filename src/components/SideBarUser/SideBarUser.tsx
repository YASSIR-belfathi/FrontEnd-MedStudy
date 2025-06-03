import Image from "next/image";
import HomeIcon from "@/assets/SideBarAssets/house.png";
import QcmIcon from "@/assets/SideBarAssets/brainstorm.png";
import BookIcon from "@/assets/SideBarAssets/stack-of-books.png";
import ProgressIcon from "@/assets/SideBarAssets/rising.png";
import SummuryIcon from "@/assets/SideBarAssets/contract.png";
import ProfileIcon from "@/assets/SideBarAssets/profile.png";
import StethoscopeIcon from "@/assets/SideBarAssets/stethoscope.png";

const SideBarUser = () => {
  return (
    <div className="w-max h-full bg-[#ffff] border-r-[1px] border-[#00000026] flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex flex-row items-center w-max h-max text-[1.2em] text-[#2563EB] italic font-bold px-4 py-2">
          <Image
            src={StethoscopeIcon}
            alt="en-cours"
            className="w-[20px] h-[20px] mr-2"
          />
          <p>MedPrep</p>
        </div>
        <div className="py-2 flex flex-col border-t-[1px] border-[#00000026] text-[0.85em] font-600">
          <div className="flex flex-row items-center w-full h-max py-[6px] px-4 hover:bg-[#aac5ff] hover:cursor-pointer hover:shadow-[-2px_0px_0px_0px_blue_inset]">
            <Image
              src={HomeIcon}
              alt="en-cours"
              className="w-[15px] h-[15px] mr-2"
            />
            <p>Home</p>
          </div>
          <div className="flex flex-row items-center w-full h-max py-[6px] px-4 hover:bg-[#aac5ff] hover:cursor-pointer hover:shadow-[-2px_0px_0px_0px_blue_inset]">
            <Image
              src={QcmIcon}
              alt="en-cours"
              sizes="20"
              className="w-[15px] h-[15px] mr-2"
            />
            <p>QCM Modules</p>
          </div>
          <div className="flex flex-row items-center w-full h-max py-[6px] px-4 hover:bg-[#aac5ff] hover:cursor-pointer hover:shadow-[-2px_0px_0px_0px_blue_inset]">
            <Image
              src={BookIcon}
              alt="en-cours"
              sizes="20"
              className="w-[15px] h-[15px] mr-2"
            />
            <p>Enrolled Courses</p>
          </div>
          <div className="flex flex-row items-center w-full h-max py-[6px] px-4 hover:bg-[#aac5ff] hover:cursor-pointer hover:shadow-[-2px_0px_0px_0px_blue_inset]">
            <Image
              src={ProgressIcon}
              alt="en-cours"
              sizes="20"
              className="w-[15px] h-[15px] mr-2"
            />
            <p>Progress Tracker</p>
          </div>
          <div className="flex flex-row items-center w-full h-max py-[6px] px-4 hover:bg-[#aac5ff] hover:cursor-pointer hover:shadow-[-2px_0px_0px_0px_blue_inset]">
            <Image
              src={SummuryIcon}
              alt="en-cours"
              sizes="20"
              className="w-[15px] h-[15px] mr-2"
            />
            <p>Courses</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-full h-max py-2 border-t-[1px] border-[#00000026]">
        <div className="w-full px-4 py-[4px] h-max flex flex-row items-center hover:cursor-pointer hover:bg-[#aac5ff] hover:shadow-[-2px_0px_0px_0px_blue_inset]">
          <div className="w-max h-max rounded-[50%]">
            <Image
              src={ProfileIcon}
              alt="en-cours"
              className="w-[15px] h-[15px] mr-2"
            />
          </div>
          Profile
        </div>
      </div>
    </div>
  );
};

export default SideBarUser;
