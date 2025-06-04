import HeaderUserPage from "@/components/HeaderUserPage/HeaderUserPage";
import SideBarUser from "@/components/SideBarUser/SideBarUser";
import React from "react";
import { CiSearch } from "react-icons/ci";
const EnrolledCourses = () => {
  return (
    <div className="flex flex-row w-full h-full  ">
      
        <div className="aaaallll">
         
      <div className="search-section bg-white p-6 rounded-2xl m-2">
        <div className="flex justify-between items-center serach-wrapper border-gray-200 border-1 pl-3 pr-2 pt-4 pb-4 rounded-2xl">
          <input
            className=" text-gray-600 w-[80%] border-transparent focus:outline-none focus:border-transparent"
            type="text"
            placeholder="Search courses"
          />
          <CiSearch className="size-7 mr-5 cursor-pointer text-gray-400" />
        </div>
        <div className="courses-states  ">
          <ul className="w-[45%] flex justify-between m-2">
            <li className=" cursor-pointer h-fit bg-blue-100/50 px-3  py-1 border border-blue-300 rounded-2xl text-blue-600 text-sm">
              All Courses
            </li>
            <li className="cursor-pointer h-fit  px-3  py-1 bg-gray-50/70 p-3 border border-gray-200 rounded-2xl text-gray-500 text-sm">
              In Progress
            </li>
            <li className="cursor-pointer h-fit px-3  py-1 bg-gray-50/70 p-3 border border-gray-200 rounded-2xl text-gray-500 text-sm">
              Completed
            </li>
            <li className="cursor-pointer h-fit px-3  py-1 bg-gray-50/70 p-3 border border-gray-200 rounded-2xl text-gray-500 text-sm">
              Core Subjects
            </li>
            <li className="cursor-pointer h-fit px-3  py-1 bg-gray-50/70 p-3 border border-gray-200 rounded-2xl text-gray-500 text-sm">
              Electives
            </li>
          </ul>
        </div>
      </div>
      <div className=" m-2 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md">
          <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-6 relative">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">
                Internal Medicine Fundamentals
              </h2>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                CORE
              </span>
            </div>
            <p className="text-blue-100 mb-4">Dr. Sarah Johnson</p>
            <p className="text-blue-100 text-sm">Enrolled: Jan 15, 2025</p>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-gray-800 font-medium">Course Progress</h3>
              <span className="text-blue-500 font-semibold text-lg">68%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "68%" }}
              ></div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">34</div>
                <div className="text-gray-500 text-sm">Lectures</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">23</div>
                <div className="text-gray-500 text-sm">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">8.5h</div>
                <div className="text-gray-500 text-sm">Remaining</div>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-6">
              Comprehensive introduction to internal medicine covering
              diagnostic approaches, treatment protocols, and patient management
              strategies.
            </p>

            <div className="mb-6">
              <h4 className="text-gray-700 font-medium text-sm mb-3 uppercase tracking-wide">
                KEY TOPICS
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Cardiology
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Pulmonology
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Gastroenterology
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Endocrinology
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                Continue Learning
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md">
          <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white p-6 relative">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">
                Internal Medicine Fundamentals
              </h2>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                CORE
              </span>
            </div>
            <p className="text-blue-100 mb-4">Dr. Sarah Johnson</p>
            <p className="text-blue-100 text-sm">Enrolled: Jan 15, 2025</p>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-gray-800 font-medium">Course Progress</h3>
              <span className="text-blue-500 font-semibold text-lg">68%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "68%" }}
              ></div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">34</div>
                <div className="text-gray-500 text-sm">Lectures</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">23</div>
                <div className="text-gray-500 text-sm">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">8.5h</div>
                <div className="text-gray-500 text-sm">Remaining</div>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-6">
              Comprehensive introduction to internal medicine covering
              diagnostic approaches, treatment protocols, and patient management
              strategies.
            </p>

            <div className="mb-6">
              <h4 className="text-gray-700 font-medium text-sm mb-3 uppercase tracking-wide">
                KEY TOPICS
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Cardiology
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Pulmonology
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Gastroenterology
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Endocrinology
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                Continue Learning
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md">
          <div className="bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white p-6 relative">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">
                Internal Medicine Fundamentals
              </h2>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                CORE
              </span>
            </div>
            <p className="text-blue-100 mb-4">Dr. Sarah Johnson</p>
            <p className="text-blue-100 text-sm">Enrolled: Jan 15, 2025</p>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-gray-800 font-medium">Course Progress</h3>
              <span className="text-blue-500 font-semibold text-lg">68%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "68%" }}
              ></div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">34</div>
                <div className="text-gray-500 text-sm">Lectures</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">23</div>
                <div className="text-gray-500 text-sm">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">8.5h</div>
                <div className="text-gray-500 text-sm">Remaining</div>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-6">
              Comprehensive introduction to internal medicine covering
              diagnostic approaches, treatment protocols, and patient management
              strategies.
            </p>

            <div className="mb-6">
              <h4 className="text-gray-700 font-medium text-sm mb-3 uppercase tracking-wide">
                KEY TOPICS
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Cardiology
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Pulmonology
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Gastroenterology
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Endocrinology
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:bg-green-800 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                Continue Learning
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default EnrolledCourses;
