import IconMed from "@/assets/NavBarLandingPageAssets/MedStudy-Photoroom.png";
import Image from "next/image";

const Section3 = () => {
  return (
    <div className="w-full h-max px-8 py-10 flex flex-col" id="Presentation">
      <div className="w-full h-max mb-10 flex flex-row justify-center items-center">
        <hr className="w-[100px] h-[5px] rounded-lg border-none bg-[#55F2C8]" />
        <p className="text-[2em] text-black mx-4">Présentation</p>
        <hr className="w-[100px] h-[5px] rounded-lg border-none bg-[#55F2C8]" />
      </div>
      <div className="w-full h-max flex flex-row gap-8 items-center">
        <div className="w-[50%] h-max text-center text-[1.1em] font-[400]">
          <p className="italic">
            &#8221;Notre solution Medical Guide est une solution qui a pour but
            d&apos;aider les étudiants du médecine dans les différentes
            spécialités pour se préparer avant le jour des contrôles ou des
            examens par un ensemble des QCMs personnalisés selon chaque
            module&#8221;.
          </p>
        </div>
        <div className="w-[50%] h-max flex justify-center relative">
          <svg
            width="402"
            height="302"
            viewBox="0 0 402 302"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M94.5192 21.1542C-58.3693 50.8348 6.62679 151.749 75.6851 240.79C144.743 329.832 199.399 315.651 321.636 227.599C443.873 139.547 388.479 145.813 388.479 145.813C338.378 137.458 321.636 153.068 321.636 98.3237C321.636 43.5795 392.172 100.962 376.292 42.5902C360.412 -15.7816 216.83 -2.59024 94.5192 21.1542Z"
              fill="#AEFFEF"
              stroke="white"
            />
          </svg>
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
            <Image
              src={IconMed}
              alt="en-cours"
              className="w-[300px] h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
