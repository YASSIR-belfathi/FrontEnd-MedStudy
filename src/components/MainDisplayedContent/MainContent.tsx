import EnrolledCourses from '@/app/EnrolledCourses/page';
import Homeuser from '@/app/HomeUser/page';
import ProgressTracker from '@/app/ProgressTracker/page';
import React from 'react'
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
        return <Homeuser/>;
      default:
        return <Homeuser />;
    }
  };
  
  return (
    <div>
      <div className="mainContentdiv">{renderContent()}</div>
    </div>
  );
}

export default MainContent