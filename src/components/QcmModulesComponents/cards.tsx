import Image, { StaticImageData } from "next/image";
import { BsThreeDots } from "react-icons/bs";

interface contentHeaderType {
  title: string;
  number_questions: number;
  est_time: number;
  percentage: string;
}

interface CardsTypeProps {
  image: StaticImageData;
  title: string;
  questions_number: number;
  est_hour: number;
  progress_qcm: string;
  completed_percentage: number;
  average_score: number;
  remaining_number: number;
  level: string;
  toggle_function: () => void;
  set_name_containt: React.Dispatch<React.SetStateAction<contentHeaderType>>;
}

const Cards = ({
  image,
  title,
  questions_number,
  est_hour,
  progress_qcm,
  completed_percentage,
  average_score,
  remaining_number,
  level,
  toggle_function,
  set_name_containt,
}: CardsTypeProps) => {
  const colorLevel = (level: string) => {
    if (level === "Beginner") {
      return "green";
    } else if (level === "Intermediate") {
      return "orange";
    } else if (level === "Advanced") {
      return "red";
    }
  };

  return (
    <div className="w-full h-max px-2 py-2 bg-white text-black flex flex-col gap-4 rounded-lg col-span-1">
      <div className="w-full h-max text-[black] text-[0.8em] flex justify-end">
        <p
          className={`bg-gradient-to-br from-${colorLevel(
            level
          )}-400 from-35% to-white px-[4px] rounded-lg border-none w-max h-max level_container`}
        >
          {level}
        </p>
      </div>
      <div className="flex flex-row gap-4 w-full h-max">
        <div className="w-max h-max bg-gray-300 flex justify-center items-center rounded-lg overflow-hidden px-2 py-2">
          <Image src={image} alt="en-cours" className="w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-col gap-[1px] w-max h-max">
          <div className="w-max h-max text-[1.2em] font-bold">
            <p className="w-max h-max">{title}</p>
          </div>
          <div className="flex flex-row text-[0.7em] text-[#b4b4b4]">
            <p className="w-max h-max"> {questions_number} questions &#8901;</p>
            <p className="w-max h-max">Est {est_hour}h</p>
          </div>
        </div>
      </div>
      <div className="w-full h-max flex flex-row justify-between text-[0.85em]">
        <p className="w-max h-max">
          {Number(progress_qcm) < 100 ? "Progress" : "Complete"}
        </p>
        <p className="w-max h-max text-blue-500">{progress_qcm}%</p>
      </div>
      <div className="w-full h-max bg-[#b9b9b9] rounded-[5px]">
        <div
          className={`h-[10px] rounded-[5px] bg-blue-600`}
          style={{ width: `${progress_qcm}%` }}
        ></div>
      </div>
      <div className="w-full h-max gap-4 flex flex-row">
        <div className="w-full h-max gap-[2px] flex flex-col text-black text-[0.7em] items-center">
          <p>{completed_percentage}%</p>
          <p className="text-[#626262]">Completed</p>
        </div>
        <div className="w-full h-max gap-[2px] flex flex-col text-black text-[0.7em] items-center">
          <p>{average_score}%</p>
          <p className="text-[#626262]">Avg Score</p>
        </div>
        <div className="w-full h-max gap-[2px] flex flex-col text-black text-[0.7em] items-center">
          <p>{remaining_number}%</p>
          <p className="text-[#626262]">Remaining</p>
        </div>
      </div>
      <div className="w-full h-max gap-4 flex flex-row items-center">
        <button
          className="w-full h-max py-[2px] rounded-lg border-none bg-blue-600 text-white flex justify-center items-center hover:cursor-pointer"
          onClick={() => {
            toggle_function();
            set_name_containt({
              title: title,
              number_questions: questions_number,
              est_time: est_hour,
              percentage: progress_qcm,
            });
          }}
        >
          Continue
        </button>
        <button className="w-max h-full rounded-lg border-[black] justify-center items-center hover:opacity-50 hover:cursor-pointer">
          <BsThreeDots size={20} />
        </button>
      </div>
    </div>
  );
};

export default Cards;
