import Image from "next/image";
import StethoscopeIcon from "@/assets/HomePageAssets/Footer/stethoscope (1).png";
import LinkedinIcon from "@/assets/HomePageAssets/Footer/linkedin.png";
import Facebook from "@/assets/HomePageAssets/Footer/facebook.png";
import XIcon from "@/assets/HomePageAssets/Footer/twitter.png";

const Footer = () => {
  return (
    <div className="w-full h-max md:px-12 max-md:px-5 py-[4px] flex md:flex-row max-md:flex-col bg-[#00BC96] gap-4 items-center">
      <div className="md:w-[15%] max-md:w-[75%] h-full flex flex-col justify-center items-center py-[6px]">
        <div className="w-max h-max mb-4">
          <Image
            src={StethoscopeIcon}
            alt="en-cours"
            className="w-[50px] h-[50px]"
          />
        </div>
        <div className="w-full h-max flex justify-center text-center text-[0.85em] font-[400] text-white">
          <p className="w-max h-max">
            We are here to help you create your future with our innovative
            solution, join us and let&apos;s build the future together.
          </p>
        </div>
      </div>
      <div className="w-[85%] h-full flex flex-col text-[1.1em] font-[400] text-white">
        <div className="w-full h-max flex md:flex-row max-md:flex-col justify-between border-b-[1px] border-[#c7c7c7] items-center py-[10px]">
          <div className="md:w-[85%] max-md:w-[100%] h-max grid grid-cols-3 px-4 py-6">
            <div className="col-span-1 w-full h-max flex flex-col gap-4">
              <div className="w-max h-max border-l-[4px] border-[#007206] px-8">
                <p className="w-max h-max">Blogs</p>
              </div>
              <div className="w-max h-max border-l-[4px] border-[#007206] px-8">
                <p className="w-max h-max">Course</p>
              </div>
            </div>
            <div className="col-span-1 w-full h-max flex flex-col gap-4">
              <div className="w-max h-max border-l-[4px] border-[#007206] px-8">
                <p className="w-max h-max">FAQs</p>
              </div>
              <div className="w-max h-max border-l-[4px] border-[#007206] px-8">
                <p className="w-max h-max">Semester</p>
              </div>
            </div>
            <div className="col-span-1 w-full h-max flex flex-col gap-4">
              <div className="w-max h-max border-l-[4px] border-[#007206] px-8">
                <p className="w-max h-max">Contact</p>
              </div>
              <div className="w-max h-max border-l-[4px] border-[#007206] px-8">
                <p className="w-max h-max">News</p>
              </div>
            </div>
          </div>
          <div className="md:w-[25%] max-md:w-[100%] h-full flex flex-col gap-2 justify-center items-center">
            <p className="w-full flex justify-start h-max text-[0.9em] font-[400] text-[#dcdcdc]">
              Subscribe to our Newsletter
            </p>
            <div className="flex flex-row w-full h-max items-center">
              <input
                type="email"
                className="placeholder:text-gray-500 w-[100%] h-[40px] placeholder:text-[1em] px-[4px] py-[2px] border-[black] border-[1px] outline-none"
                placeholder="Enter your email ..."
              />
              <input
                type="submit"
                value={"Submit"}
                className="w-max h-[40px] px-[8px] py-[2px] flex justify-center items-center bg-blue-600"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-max px-4 py-[8px] flex flex-row justify-between">
          <div className="w-max text-[0.8em] h-max">
            <p className="w-max h-max">
              &#169;CopyRight. <span className="italic">2024-2025</span>
            </p>
          </div>
          <div className="w-max h-max grid grid-cols-3 gap-4 items-center">
            <div className="col-span-1 w-max h-max">
              <Image
                src={Facebook}
                alt="en-cours"
                className="w-[20px] h-[20px] hover:cursor-pointer"
              />
            </div>
            <div className="col-span-1 w-max">
              <Image
                src={LinkedinIcon}
                alt="en-cours"
                className="w-[20px] h-[20px] cursor-pointer"
              />
            </div>
            <div className="col-span-1 h-max">
              <Image
                src={XIcon}
                alt="en-cours"
                className="w-[20px] h-[20px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
