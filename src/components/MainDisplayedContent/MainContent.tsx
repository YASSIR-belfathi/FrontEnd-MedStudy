import EnrolledCourses from "@/components/EnrolledCourses/page";
import Homeuser from "@/components/HomeUser/page";
import ProgressTracker from "@/components/ProgressTracker/page";
import QcmModules from "@/components/QcmModules/page";
import React from "react";
interface MainContentProps {
  selectedItem: string;
}
const MainContent = ({ selectedItem }: MainContentProps) => {
  const renderContent = () => {
    switch (selectedItem) {
      case "Enrolled Courses":
        return <EnrolledCourses />;
      case "Progress Tracker":
        return <ProgressTracker />;
      case "Home":
        return <Homeuser />;
      case "QCM Modules":
        return <QcmModules />;
      default:
        return <Homeuser />;
    }
  };

  return (
    <div>
      <div className="mainContentdiv">{renderContent()}</div>
    </div>
  );
};

export default MainContent;
