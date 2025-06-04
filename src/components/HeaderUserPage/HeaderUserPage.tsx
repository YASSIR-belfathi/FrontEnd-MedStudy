interface HeaderUserPageProps {
 
  selectedItem: string;
}

const HeaderUserPage = ({ selectedItem}: HeaderUserPageProps) => {
  
 const renderContent = () => {
    switch (selectedItem) {
      case "Enrolled Courses":
       return (
    <div >
      <div className="w-full h-max mb-2 text-black">
        <h1 className="text-[2em] font-bold">Enrolled Courses</h1>
      </div>
      <div className="w-full h-max text-[#424242]">
        <p className="text-[0.8em]">Continue your medical education with comprehensive courses designed for students.</p>
      </div>
    </div>
  );
      case "Progress Tracker":
      return (
    <div >
      <div className="w-full h-max mb-2 text-black">
        <h1 className="text-[2em] font-bold">Progress Tracker</h1>
      </div>
      <div className="w-full h-max text-[#424242]">
        <p className="text-[0.8em]">Organize and track your courses, QCMs, and study tasks.</p>
      </div>
    </div>
  );
      case "Home":
       return(
    <div >
      <div className="w-full h-max mb-2 text-black">
        <h1 className="text-[2em] font-bold">Welcome back, Yasser !</h1>
      </div>
      <div className="w-full h-max text-[#424242]">
        <p className="text-[0.8em]">Ready to continue your medical studies? Here's your progress overview.</p>
      </div>
    </div>
  );
      default:
        return (
    <div >
      <div className="w-full h-max mb-2 text-black">
        <h1 className="text-[2em] font-bold">Welcome back, Ayoub !</h1>
      </div>
      <div className="w-full h-max text-[#424242]">
        <p className="text-[0.8em]">Ready to continue your medical studies? Here's your progress overview.</p>
      </div>
    </div>
  );
    }
  };
  
  return (
    <div className="w-full h-max flex flex-col">
    {renderContent()}
    </div>
  );
};

export default HeaderUserPage;
