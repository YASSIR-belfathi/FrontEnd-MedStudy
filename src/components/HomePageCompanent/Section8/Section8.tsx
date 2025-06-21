import Image from "next/image";
import GmailIcon from "@/assets/HomePageAssets/Section8/gmail.png";
import PhoneIcon from "@/assets/HomePageAssets/Section8/phone-call.png";
import LocalizationIcon from "@/assets/HomePageAssets/Section8/location.png";

const Section8 = () => {
  return (
    <div className="w-full h-max flex flex-col mt-4 mb-8" id="ContactUs">
      <div className="w-full h-max mb-10 flex flex-row justify-center items-center">
        <hr className="w-[100px] h-[5px] rounded-lg border-none bg-[#55F2C8]" />
        <p className="text-[2em] text-black mx-4">Contact</p>
        <hr className="w-[100px] h-[5px] rounded-lg border-none bg-[#55F2C8]" />
      </div>
      <div className="w-full h-max px-6 grid max-md:grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-1 w-full h-max px-4 py-2 rounded-lg bg-[#AEFFEF] text-[black] font-[500] flex flex-col">
          <div className="w-full h-max flex justify-center">
            <Image
              src={GmailIcon}
              alt="en-cours"
              className="w-[40px] h-[40px]"
            />
          </div>
          <div className="w-full h-max text-[1.2em] flex justify-center mt-8">
            <p>MedStudy@gmail.com</p>
          </div>
        </div>
        <div className="col-span-1 w-full h-max px-4 py-2 rounded-lg bg-[#AEFFEF] text-[black] font-[500] flex flex-col">
          <div className="w-full h-max flex justify-center">
            <Image
              src={PhoneIcon}
              alt="en-cours"
              className="w-[40px] h-[40px]"
            />
          </div>
          <div className="w-full h-max text-[1.2em] flex justify-center mt-8">
            <p>+212-xxx-xxx-xxx</p>
          </div>
        </div>
        <div className="col-span-1 w-full h-max px-4 py-2 rounded-lg bg-[#AEFFEF] text-[black] font-[500] flex flex-col">
          <div className="w-full h-max flex justify-center">
            <Image
              src={LocalizationIcon}
              alt="en-cours"
              className="w-[40px] h-[40px]"
            />
          </div>
          <div className="w-full h-max text-[1.2em] flex justify-center mt-8">
            <p>Mghila, Ensa-BM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
