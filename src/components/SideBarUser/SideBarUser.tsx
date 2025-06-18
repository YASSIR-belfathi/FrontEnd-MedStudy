
import Image from "next/image";
import ProfileIcon from "@/assets/SideBarAssets/profile.png";
import { 
 
  FaChartLine, 

  FaStethoscope,
  FaEnvelope,
  FaFolder,
  FaCog,
  FaQuestionCircle
} from "react-icons/fa";
import { LuBrain, LuBook } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { PiGraduationCap } from "react-icons/pi";
import { useState } from "react";

interface SidebarProps {
  onClick: (item: string) => void;
  selectedItem: string; 
}

const SideBarUser = ({ onClick, selectedItem }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const studyItems = [
    { name: "Home", icon: <AiOutlineHome className="w-5 h-5" />, label: "Dashboard" },
    { name: "QCM Modules", icon: <LuBrain className="w-5 h-5" />, label: "QCM Modules" },
    { name: "Progress Tracker", icon: <FaChartLine className="w-5 h-5" />, label: "Progress Tracker" },
    { name: "Enrolled Courses", icon: <LuBook className="w-5 h-5" />, label: "Enrolled Courses" },
  ];

  const serviceItems = [
    { name: "Messages", icon: <FaEnvelope className="w-5 h-5" />, label: "Messages", hasNotification: true },
    { name: "Documents", icon: <FaFolder className="w-5 h-5" />, label: "Documents" },
    { name: "Courses", icon: <PiGraduationCap className="w-5 h-5" />, label: "Products" },
  ];

  const otherItems = [
    { name: "Help", icon: <FaQuestionCircle className="w-5 h-5" />, label: "Help" },
    { name: "Settings", icon: <FaCog className="w-5 h-5" />, label: "Settings" },
  ];

  const handleClick = (item: string) => {
    onClick(item);
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${isExpanded ? 'w-64' : 'w-20'} h-full bg-white flex flex-col transition-all duration-300 ease-in-out shadow-sm border-r border-gray-100`}>
      
      <div className="p-4 border-b border-gray-100">
        {isExpanded ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <FaStethoscope className="w-5 h-5 text-[#2563EB]"/>
              </div>
              <div>
                <div className="flex flex-row items-center w-max h-max text-[1.2em] text-[#2563EB] italic font-bold px-4 py-2">
          
          <p>MedStudy</p>
        </div>
              </div>
            </div>
            <button 
              onClick={toggleSidebar}
              className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
            >
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <FaStethoscope className="w-5 h-5 text-blue-500" />
            </div>
            <button 
              onClick={toggleSidebar}
              className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
            >
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </button>
          </div>
        )}
      </div>

  
      <div className="flex-1 overflow-y-auto custom-scrollbar hover:scrollbar-thumb-gray-400">
        
        <div className="p-4">
          {isExpanded && (
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
              Study Session
            </h3>
          )}
          <nav className="space-y-1">
            {studyItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.name)}
                className={`w-full flex items-center ${isExpanded ? 'justify-start px-3' : 'justify-center px-0'} py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  selectedItem === item.name 
                    ? "bg-gray-900 text-white" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className={selectedItem === item.name ? "text-white" : "text-gray-400 group-hover:text-gray-500"}>
                  {item.icon}
                </span>
                {isExpanded && (
                  <span className="ml-3">{item.label}</span>
                )}
              </button>
            ))}
          </nav>
        </div>

        
        <div className="p-4">
          {isExpanded && (
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
              Services
            </h3>
          )}
          <nav className="space-y-1">
            {serviceItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.name)}
                className={`w-full flex items-center ${isExpanded ? 'justify-between px-3' : 'justify-center px-0'} py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  selectedItem === item.name 
                    ? "bg-gray-900 text-white" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center">
                  <span className={selectedItem === item.name ? "text-white" : "text-gray-400 group-hover:text-gray-500"}>
                    {item.icon}
                  </span>
                  {isExpanded && (
                    <span className="ml-3">{item.label}</span>
                  )}
                </div>
                {item.hasNotification && isExpanded && (
                  <span className="w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    9
                  </span>
                )}
              
              </button>
            ))}
          </nav>
        </div>


        <div className="p-4">
          {isExpanded && (
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
              Other
            </h3>
          )}
          <nav className="space-y-1">
            {otherItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.name)}
                className={`w-full flex items-center ${isExpanded ? 'justify-start px-3' : 'justify-center px-0'} py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  selectedItem === item.name 
                    ? "bg-gray-900 text-white" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className={selectedItem === item.name ? "text-white" : "text-gray-400 group-hover:text-gray-500"}>
                  {item.icon}
                </span>
                {isExpanded && (
                  <span className="ml-3">{item.label}</span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

     
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={() => handleClick("Profile")}
          className={`w-full flex items-center ${isExpanded ? 'justify-start px-3' : 'justify-center px-0'} py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group hover:bg-gray-50`}
        >
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Image
              src={ProfileIcon}
              alt="profile"
              className="w-5 h-5 rounded"
            />
          </div>
          {isExpanded && (
            <span className="ml-3 text-gray-600 group-hover:text-gray-900">Profile</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SideBarUser;