import { CiSearch } from "react-icons/ci";
import CardioIcon from "@/assets/HomeUserAssets/heart.png";
import Cards from "@/components/QcmModulesComponents/cards";
import { useState } from "react";
import React from "react";

const QcmModules = () => {
  const All_List_cards = [
    {
      id: 1,
      image: CardioIcon,
      title: "Cardio",
      questions_number: 120,
      est_hour: 3,
      progress_qcm: "100",
      completed_percentage: 94,
      average_score: 25,
      remaining_number: 45,
      level: "Intermediate",
    },
    {
      id: 2,
      image: CardioIcon,
      title: "Resp",
      questions_number: 70,
      est_hour: 7,
      progress_qcm: "25",
      completed_percentage: 44,
      average_score: 15,
      remaining_number: 7,
      level: "Beginner",
    },
  ];

  const [list_cards, setListCards] = useState(All_List_cards);

  function SearchButton(level_progress: string = "All") {
    if (level_progress === "All") {
      setListCards(All_List_cards);
    } else if (level_progress === "Progress") {
      const progress_container = All_List_cards.filter((cards) => {
        return Number(cards.progress_qcm) < 100;
      });
      setListCards(progress_container);
    } else if (level_progress === "Complete") {
      const complete_container = All_List_cards.filter(
        (cards) => Number(cards.progress_qcm) === 100
      );
      setListCards(complete_container);
    } else {
      const level_container = All_List_cards.filter((cards) => {
        return cards.level === level_progress;
      });
      setListCards(level_container);
    }
  }

  const search_input = document.getElementsByClassName("search_input");

  function SearchOption() {
    const string_search = (search_input[0] as HTMLInputElement).value ?? "";
    const list_cards_components = All_List_cards.filter((cards) => {
      return cards.title.toUpperCase().includes(string_search.toUpperCase());
    });
    setListCards(list_cards_components);
  }

  return (
    <div className="w-full h-max bg-transparent flex flex-col py-2">
      <div className="w-full h-max bg-[#ffffff] flex flex-col py-4 px-6 gap-2 rounded-lg shadow-[0px_0px_2px_0px_#e2e2e2] mb-4">
        <div className="w-full h-max flex flex-row gap-4">
          <input
            type="text"
            className="search_input w-full h-[50px] px-3 py-2 rounded-lg border-[black] border-[1px] outline-none"
            placeholder="Search about ..."
            onKeyDown={() => {
              SearchOption();
            }}
            onKeyUp={() => {
              SearchOption();
            }}
          />
          <div
            className="w-[50px] h-[50px] flex px-2 py-2 justify-center items-center bg-gray-400 rounded-lg hover:cursor-pointer"
            onClick={() => {
              SearchOption();
            }}
          >
            <CiSearch size={20} />
          </div>
        </div>
        <div className="w-full flex flex-wrap flex-row justify-start gap-2 bg-transparent text-black text-[0.8em]">
          <div
            className="w-max h-max px-4 py-[1px] bg-gray-200 border-gray-300 border-[2px] rounded-[15px] hover:cursor-pointer hover:opacity-75"
            onClick={() => {
              SearchButton("All");
            }}
          >
            <p className="w-max h-max">All</p>
          </div>
          <div
            className="w-max h-max px-4 py-[1px] bg-gray-200 border-gray-300 border-[2px] rounded-[15px] hover:cursor-pointer hover:opacity-75"
            onClick={() => {
              SearchButton("Progress");
            }}
          >
            <p className="w-max h-max">In Progress</p>
          </div>
          <div
            className="w-max h-max px-4 py-[1px] bg-gray-200 border-gray-300 border-[2px] rounded-[15px] hover:cursor-pointer hover:opacity-75"
            onClick={() => {
              SearchButton("Complete");
            }}
          >
            <p className="w-max h-max">Complete</p>
          </div>
          <div
            className="w-max h-max px-4 py-[1px] bg-gray-200 border-gray-300 border-[2px] rounded-[15px] hover:cursor-pointer hover:opacity-75"
            onClick={() => {
              SearchButton("Beginner");
            }}
          >
            <p className="w-max h-max">Beginner</p>
          </div>
          <div
            className="w-max h-max px-4 py-[1px] bg-gray-200 border-gray-300 border-[2px] rounded-[15px] hover:cursor-pointer hover:opacity-75"
            onClick={() => {
              SearchButton("Intermediate");
            }}
          >
            <p className="w-max h-max">Intermediate</p>
          </div>
          <div
            className="w-max h-max px-4 py-[1px] bg-gray-200 border-gray-300 border-[2px] rounded-[15px] hover:cursor-pointer hover:opacity-75"
            onClick={() => {
              SearchButton("Advanced");
            }}
          >
            <p className="w-max h-max">Advanced</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 max-lg::grid-cols-1 w-full h-max bg-transparent gap-2">
        {list_cards.map((card) => {
          return (
            <>
              <Cards
                key={card.id}
                title={card.title}
                image={card.image}
                questions_number={card.questions_number}
                completed_percentage={card.completed_percentage}
                level={card.level}
                remaining_number={card.remaining_number}
                est_hour={card.est_hour}
                progress_qcm={card.progress_qcm}
                average_score={card.average_score}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default QcmModules;
