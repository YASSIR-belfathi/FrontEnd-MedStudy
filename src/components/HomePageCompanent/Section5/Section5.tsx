import Image from "next/image";
import FirstImage from "@/assets/HomePageAssets/Section5/doctor-with-his-arms-crossed-white-background.jpg";

const Section5 = () => {
  return (
    <div className="w-full h-max flex flex-col bg-white" id="Comments">
      <div className="w-full h-max mb-10 flex flex-row justify-center items-center">
        <hr className="w-[100px] h-[5px] rounded-lg border-none bg-[#55F2C8]" />
        <p className="text-[2em] text-black mx-4">Commments</p>
        <hr className="w-[100px] h-[5px] rounded-lg border-none bg-[#55F2C8]" />
      </div>
      <div className="w-full h-max overflow-hidden relative">
        <svg
          width="1440"
          height="400"
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M289.899 0C120.958 0 0 52.9598 0 52.9598V367.066C0 367.066 175.833 401.66 289.899 399.938C414.649 398.054 480.024 350.956 604.79 350.63C731.673 350.299 804.221 399.938 925.179 399.938C1046.14 399.938 1031.64 350.63 1157.6 350.63C1283.55 350.63 1440 399.938 1440 399.938V0C1440 0 1280.06 52.9598 1157.6 52.9598C1035.14 52.9598 1047.64 -8.28892e-05 925.179 0C802.721 8.28894e-05 790.226 52.9598 604.79 52.9598C419.354 52.9598 458.841 0 289.899 0Z"
            fill="#09DAA9"
          />
        </svg>
        <div className="w-full h-full flex items-center absolute top-0">
          <div className="w-full h-max flex flex-col justify-center overflow-x-hidden">
            <div className="w-max h-max flex flex-row gap-5 mb-4 bg-transparent px-8">
              <div className="w-[400px] h-max flex flex-col py-2 px-4 rounded-lg bg-white text-black">
                <div className="w-max h-max mb-4 flex flex-row items-center">
                  <div className="w-max h-max rounded-[50%] border-black border-[1px] overflow-hidden">
                    <Image
                      src={FirstImage}
                      alt="en-cours"
                      className="w-[60px] h-[60px]"
                    />
                  </div>
                  <div className="w-max h-max flex flex-col ml-4">
                    <div className="w-max h-max mb-[4px] text-[1.2em] font-bold">
                      <p>Yassir Belfath</p>
                    </div>
                    <div className="w-full h-max text-[0.8em] font-[400]">
                      <p>Doctor</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-max">
                  <p className="w-full h-max">
                    “Cette plateforme est une excellence solution pour les
                    étudiants de médecine pour bien se préparer et comprendre
                    leurs cours”
                  </p>
                </div>
              </div>
              <div className="w-[400px] h-max flex flex-col py-2 px-4 rounded-lg bg-white text-black">
                <div className="w-max h-max mb-4 flex flex-row items-center">
                  <div className="w-max h-max rounded-[50%] border-black border-[1px] overflow-hidden">
                    <Image
                      src={FirstImage}
                      alt="en-cours"
                      className="w-[60px] h-[60px]"
                    />
                  </div>
                  <div className="w-max h-max flex flex-col ml-4">
                    <div className="w-max h-max mb-[4px] text-[1.2em] font-bold">
                      <p>Yassir Belfath</p>
                    </div>
                    <div className="w-full h-max text-[0.8em] font-[400]">
                      <p>Doctor</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-max">
                  <p className="w-full h-max">
                    “Cette plateforme est une excellence solution pour les
                    étudiants de médecine pour bien se préparer et comprendre
                    leurs cours”
                  </p>
                </div>
              </div>
              <div className="w-[400px] h-max flex flex-col py-2 px-4 rounded-lg bg-white text-black">
                <div className="w-max h-max mb-4 flex flex-row items-center">
                  <div className="w-max h-max rounded-[50%] border-black border-[1px] overflow-hidden">
                    <Image
                      src={FirstImage}
                      alt="en-cours"
                      className="w-[60px] h-[60px]"
                    />
                  </div>
                  <div className="w-max h-max flex flex-col ml-4">
                    <div className="w-max h-max mb-[4px] text-[1.2em] font-bold">
                      <p>Yassir Belfath</p>
                    </div>
                    <div className="w-full h-max text-[0.8em] font-[400]">
                      <p>Doctor</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-max">
                  <p className="w-full h-max">
                    “Cette plateforme est une excellence solution pour les
                    étudiants de médecine pour bien se préparer et comprendre
                    leurs cours”
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full h-max justify-center">
              <div className="w-[20px] h-[20px] bg-white rounded-[50%] mr-2"></div>
              <div className="w-[20px] h-[20px] bg-white rounded-[50%] mr-2"></div>
              <div className="w-[20px] h-[20px] bg-white rounded-[50%] mr-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
