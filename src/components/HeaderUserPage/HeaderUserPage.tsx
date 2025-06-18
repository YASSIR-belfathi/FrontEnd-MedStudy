interface HeaderUserPageProps {
  selectedItem: string;
}

const HeaderUserPage = ({ selectedItem }: HeaderUserPageProps) => {
  const renderContent = () => {
    switch (selectedItem) {
      case "Enrolled Courses":
        return (
          <div>
            <div className="w-full h-max mb-2 text-black">
              <h1 className="text-[2em] font-bold">Enrolled Courses</h1>
            </div>
            <div className="w-full h-max text-[#424242]">
              <p className="text-[0.8em]">
                Continue your medical education with comprehensive courses
                designed for students.
              </p>
            </div>
          </div>
        );
      case "Progress Tracker":
        return (
          <div className="flex items-center justify-between">
            <div>
              <div className="w-full h-max mb-2 text-black">
                <h1 className="text-[2em] font-bold">Progress Tracker</h1>
              </div>
              <div className="w-full h-max text-[#424242]">
                <p className="text-[0.8em]">
                  Organize and track your courses, QCMs, and study tasks.
                </p>
              </div>
            </div>
            <div className="m-2 flex gap-2">
              <button className="font-medium text-sm cursor-pointer px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors duration-200">
                Clear Completed
              </button>
              <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded-xl shadow-sm transition-colors duration-200 flex items-center justify-center gap-1">
                <span className="text-lg font-light">+</span>
                Add Task
              </button>
            </div>
          </div>
        );
      case "Home":
        return (
          <div>
            <div className="w-full h-max mb-2 text-black">
              <h1 className="text-[2em] font-bold">Welcome back, Yasser !</h1>
            </div>
            <div className="w-full h-max text-[#424242]">
              <p className="text-[0.8em]">
                Ready to continue your medical studies? Heres your progress
                overview.
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div>
            <div className="w-full h-max mb-2 text-black">
              <h1 className="text-[2em] font-bold">Welcome back, Ayoub !</h1>
            </div>
            <div className="w-full h-max text-[#424242]">
              <p className="text-[0.8em]">
                Ready to continue your medical studies? Heres your progress
                overview.
              </p>
            </div>
          </div>
        );
    }
  };

  return <div className="w-full h-max flex flex-col">{renderContent()}</div>;
};

export default HeaderUserPage;
