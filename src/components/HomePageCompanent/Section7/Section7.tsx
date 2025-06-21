import Image from "next/image";
import TeamIcon from "@/assets/HomePageAssets/Section7/developers.png";
import QCMIcon from "@/assets/HomePageAssets/Section7/quiz-en-ligne.png";
import PersonIcon from "@/assets/HomePageAssets/Section7/bussiness-man.png";
import ConversationIcon from "@/assets/HomePageAssets/Section7/conversation.png";
import YoutubeImage from "@/assets/HomePageAssets/Section7/image.png"; // to delete when we will the video to the website
import BackGroundImage from "@/assets/HomePageAssets/Section7/svgviewer-png-output.png";

const Section7 = () => {
  return (
    <div className="w-full h-max flex flex-col" id="Keys">
      <div className="w-full h-max mb-10 flex flex-row justify-center items-center">
        <hr className="w-[100px] h-[5px] rounded-lg border-none bg-[#55F2C8]" />
        <p className="text-[2em] text-black mx-4">Keys Number</p>
        <hr className="w-[100px] h-[5px] rounded-lg border-none bg-[#55F2C8]" />
      </div>
      <div className="w-full h-max overflow-hidden relative">
        <div className="w-max h-max">
          <Image
            src={BackGroundImage}
            alt="en-cours"
            className="md:h-[550px] max-md:h-[800px]"
          />
        </div>
        <div className="w-full h-full absolute top-0 flex md:flex-row items-center justify-center max-md:flex-col gap-5">
          <div className="max-md:w-[100%] md:w-[50%] h-max px-4 text-[1.3em] font-[500]">
            <div className="w-full h-max grid-cols-2 gap-4 flex flex-row mb-8">
              <div className="flex flex-col col-span-1 w-full h-max bg-white text-black px-4 py-2 rounded-lg">
                <div className="w-full h-max justify-center flex">
                  <Image
                    src={TeamIcon}
                    alt="en-cours"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <div className="w-full h-max justify-center flex my-2">
                  <p className="w-max h-max">7</p>
                </div>
                <div className="w-full h-max justify-center flex">
                  <p className="w-max h-max">Membres</p>
                </div>
              </div>
              <div className="w-full h-max flex flex-col col-span-1 bg-white text-black px-4 py-2 rounded-lg">
                <div className="w-full h-max justify-center flex">
                  <Image
                    src={QCMIcon}
                    alt="en-cours"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <div className="w-full h-max justify-center flex my-2">
                  <p className="h-max w-max">60</p>
                </div>
                <div className="w-full h-max justify-center flex">
                  <p className="h-max w-max">QCM</p>
                </div>
              </div>
            </div>
            <div className="w-full h-max grid-cols-2 gap-4 flex flex-row">
              <div className="w-full h-max flex flex-col col-span-1 bg-white text-black px-4 py-2 rounded-lg">
                <div className="w-full h-max justify-center flex">
                  <Image
                    src={PersonIcon}
                    alt="en-sours"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <div className="w-full h-max justify-center flex my-2">
                  <p className="w-max h-max">10</p>
                </div>
                <div className="w-full h-max justify-center flex">
                  <p className="w-max h-max">Participants</p>
                </div>
              </div>
              <div className="w-full h-max flex flex-col col-span-1 bg-white text-black px-4 py-2 rounded-lg">
                <div className="w-full h-max justify-center flex">
                  <Image
                    src={ConversationIcon}
                    alt="en-cours"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                <div className="w-full h-max justify-center flex my-2">
                  <p className="w-max h-max">6</p>
                </div>
                <div className="w-full h-max justify-center flex">
                  <p className="w-max h-max">Consultants</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-md:w-[100%]  md:w-[50%] h-max flex justify-center">
            <Image
              src={YoutubeImage}
              alt="en-cours"
              className="max-md:w-[50%] md:w-[75%] max-md:h-[200px] md:h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
