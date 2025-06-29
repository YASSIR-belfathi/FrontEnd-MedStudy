import Image from "next/image";
import { LuLogOut } from "react-icons/lu";
import ExclamationIcon from "@/assets/QcmAssets/danger.png";
import CheckIcon from "@/assets/QcmAssets/check.png";
import IssuesIcon from "@/assets/QcmAssets/stop.png";
import React from "react";

interface QcmType {
  name_containt: string;
  time_estimation: number;
  number_questions: number;
  percentage: string;
  set_toggle_containt: React.Dispatch<React.SetStateAction<boolean>>;
}

const Qcm = ({
  name_containt,
  time_estimation,
  number_questions,
  percentage,
  set_toggle_containt,
}: QcmType) => {
  console.log(percentage);

  return (
    <>
      <div className="w-full h-max  justify-between flex-shrink-0 py-2 px-4 flex flex-row">
        <div className="w-max h-max">
          <div className="w-full h-max mb-2 text-black">
            <h1 className="text-[2em] font-bold">QCM : {name_containt}</h1>
          </div>
          <div className="flex flex-row gap-2 w-full h-max text-[#424242] text-[0.8em]">
            <p>{number_questions} questions</p>
            <p>&#9679;</p>
            <p>Est {time_estimation}h</p>
          </div>
        </div>
        <div className="w-max h-max gap-8 flex flex-row">
          <div className="w-max h-max">
            <button className="px-4 py-2 rounded-lg bg-[#FFBB00] text-white w-max h-max hover:cursor-pointer">
              ▶︎‖ Pause
            </button>
          </div>
          <div className="w-max h-max">
            <button
              className="flex flex-row items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 text-white w-max h-max hover:cursor-pointer"
              onClick={() => {
                set_toggle_containt(true);
              }}
            >
              <LuLogOut size={20} />
              Quit
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row justify-between mt-6 gap-8">
        <div className="gap-6 w-max py-2 px-6 flex flex-col items-start h-full bg-white rounded-lg">
          <div className="w-max h-max text-[1.1em] font-bold">
            <h1>Review Progress</h1>
          </div>
          <div className="flex flex-col w-full h-max text-[1.1em] gap-6">
            <div className="w-[300px] flex flex-row justify-between h-[70px] py-2 px-2 rounded-lg bg-[#bee1fd]/50 items-center border-[1px] border-transparent hover:border-blue-600 transition-colors duration-500 ease-in-out cursor-pointer">
              <div className="w-max h-max flex flex-col text-blue-600">
                <p>Total questions</p>
                <p>{number_questions}</p>
              </div>
              <div className="w-max h-[75%] px-1 flex items-center flex-row rounded-[50%] bg-blue-700 text-white">
                <Image
                  className="w-[20px] h-[20px]"
                  src={ExclamationIcon}
                  alt="en-cours"
                />
              </div>
            </div>
            <div className="w-[300px] flex flex-row justify-between h-[70px] py-2 px-2 rounded-lg bg-[#bee1fd]/50 gap-[100px] items-center border-[1px] border-transparent hover:border-green-600 transition-colors duration-500 ease-in-out cursor-pointer">
              <div className="w-max h-max flex flex-col text-green-600">
                <p>Validated</p>
                <p>0</p>
                {/* make a dynamic value for the validated responses of questions. */}
              </div>
              <div className="w-max h-[75%] px-1 flex items-center flex-row rounded-[50%] bg-green-700 text-white">
                <Image
                  className="w-[20px] h-[20px]"
                  src={CheckIcon}
                  alt="en-cours"
                />
              </div>
            </div>
            <div className="w-[300px] flex flex-row justify-between h-[70px] py-2 px-2 rounded-lg bg-[#bee1fd]/50 gap-[100px] items-center border-[1px] border-transparent hover:border-red-600 transition-colors duration-500 ease-in-out cursor-pointer">
              <div className="w-max h-max flex flex-col text-red-600">
                <p>Issues</p>
                <p>{number_questions}</p>
              </div>
              <div className="w-max h-[75%] px-1 flex items-center flex-row rounded-[50%] bg-red-700 text-white">
                <Image
                  className="w-[20px] h-[20px]"
                  src={IssuesIcon}
                  alt="en-cours"
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full h-[20px] border-black bg-green-50/50 border-[1px] rounded-[20px]">
            <div
              className={` h-full bg-gradient-to-r from-blue-600 to-gray-500 rounded-lg`}
              style={{
                width: `${percentage}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="w-full gap-10 h-full bg-white px-3 py-2 rounded-lg flex flex-col">
          <div className="w-full h-max font-bold text-[1.3em]">
            <p>Question 1 of 10</p>
          </div>
          <div className="w-full h-max gap-3 flex flex-col">
            <p className="w-full h-max flex flex-row justify-start">Question</p>
            <p className="w-full h-max py-3 px-2 rounded-lg bg-gray-500/50">
              what is the correct way to declare a variable in javascript?
            </p>
          </div>
          <div className="w-full h-max flex flex-col gap-3">
            <div className="w-full h-max">
              <p>Options:</p>
            </div>
            <div className="w-full h-max flex flex-col gap-1">
              <div className="flex flex-row gap-3 w-max h-max items-center">
                <div className="w-max h-max py-2 px-4 bg-orange-400/50 rounded-lg">
                  <p className="w-max h-max">A</p>
                </div>
                <div className="w-max h-max">
                  <p className="w-max h-max">var a = 2;</p>
                </div>
              </div>
              <div className="flex flex-row gap-3 w-max h-max items-center">
                <div className="w-max h-max py-2 px-4 bg-orange-400/50 rounded-lg">
                  <p className="w-max h-max">B</p>
                </div>
                <div className="w-max h-max">
                  <p className="w-max h-max">va a = 2;</p>
                </div>
              </div>
              <div className="flex flex-row gap-3 w-max h-max items-center">
                <div className="w-max h-max py-2 px-4 bg-orange-400/50 rounded-lg">
                  <p className="w-max h-max">C</p>
                </div>
                <div className="w-max h-max">
                  <p className="w-max h-max">let a = 2;</p>
                </div>
              </div>
              <div className="flex flex-row gap-3 w-max h-max items-center">
                <div className="w-max h-max py-2 px-4 bg-orange-400/50 rounded-lg">
                  <p className="w-max h-max">D</p>
                </div>
                <div className="w-max h-max">
                  <p className="w-max h-max">var = 2;</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-max flex flex-col gap-3">
            <div className="w-full h-max">
              <p className="w-full h-max">Explanation</p>
            </div>
            <div className="w-full h-max py-2 px-3 bg-blue-400/50 rounded-lg">
              <p className="w-full h-max">
                the var keyword is used to declare a variable in javascript, and
                also we have let and const which are an available choiced to
                declare a variable in javascript.
              </p>
            </div>
          </div>
          <div className="w-full h-max flex flex-row justify-between text-white">
            <div className="w-max h-max">
              <button className="bg-green-600 px-3 py-1 rounded-lg">
                Validate
              </button>
            </div>
            <div className="w-max h-max">
              <button className="bg-gray-600 px-3 py-1 rounded-lg">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qcm;
