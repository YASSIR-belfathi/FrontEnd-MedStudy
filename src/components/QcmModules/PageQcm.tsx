import QcmModules from "../QcmModulesComponents/QcmModules";
import { useState } from "react";
import React from "react";
import Qcm from "../Qcm/Qcm";

interface contentHeaderType {
  title: string;
  number_questions: number;
  est_time: number;
  percentage: string;
}

const PageQcm = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [contentHeader, setContentHeader] = useState<contentHeaderType>({
    title: "",
    number_questions: 0,
    est_time: 0,
    percentage: "0",
  });

  const toggleContaint = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-full bg-transparent flex flex-col py-2">
      {toggle ? (
        <QcmModules
          toggle_containt={toggleContaint}
          set_content_header={setContentHeader}
        />
      ) : (
        <Qcm
          name_containt={contentHeader.title}
          number_questions={contentHeader.number_questions}
          time_estimation={contentHeader.est_time}
          percentage={contentHeader.percentage}
          set_toggle_containt={setToggle}
        />
      )}
    </div>
  );
};

export default PageQcm;
