// import HeaderUserPage from "@/components/HeaderUserPage/HeaderUserPage";
import Notification from "@/components/Notification/Notification";
// import SideBarUser from "@/components/SideBarUser/SideBarUser";
import CalendarIcon from "@/assets/NotificationAssets/calendar.png";
import Image from "next/image";
import CheckMarkIcon from "@/assets/HomeUserAssets/checkmark.png";
import RewardsIcon from "@/assets/HomeUserAssets/icons8-reward-96.png";
import ClockIcon from "@/assets/HomeUserAssets/clock.png";
import BookIcon from "@/assets/HomeUserAssets/book.png";
import BrainIcon from "@/assets/SideBarAssets/brainstorm.png";
import HeartIcon from "@/assets/HomeUserAssets/heart.png";
import LungsIcon from "@/assets/HomeUserAssets/lungs.png";
import DotIcon from "@/assets/HomeUserAssets/dot.png";

const Homeuser = () => {
  return (
    <div className="flex flex-row w-full h-full bg-[#FAFAFA]">
      {/* <SideBarUser /> */}
      <div className="w-full h-full py-2 px-4 flex flex-col">
        {/* <HeaderUserPage
          Title="Welcome Back, Yassir!"
          subTitle="this is the Home Page!"
        /> */}
        <Notification
          image={CalendarIcon}
          Title="bonjour"
          description="this is bonjour"
        />
        <div className="grid grid-cols-4 gap-8 w-full h-max">
          <div className="col-span-1 bg-white text-[black] flex flex-col p-4 rounded-lg shadow-[0px_0px_3px_0px_#808080]">
            <div className="flex flex-row w-full h-max items-center mb-4">
              <div className="w-max h-max mr-2">
                <Image
                  src={CheckMarkIcon}
                  alt="en-cours"
                  className="w-[30px] h-[30px]"
                />
              </div>
              <div className="w-max h-max text-black font-[500]">
                <p>Complete QCMs</p>
              </div>
            </div>
            <div className="flex flex-row w-full h-max items-center">
              <div className="w-max h-max font-[500] mr-2">123</div>
              <div className="w-full border-none h-[16px] rounded-[8px]">
                <div className="bg-linear-90 from-blue-600 to-blue-400 w-[50%] h-full rounded-[8px]"></div>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-white text-[#000000] flex flex-col p-4 rounded-lg shadow-[0px_0px_3px_0px_#808080]">
            <div className="flex flex-row w-full h-max items-center mb-4">
              <div className="w-max h-max mr-2">
                <Image
                  src={RewardsIcon}
                  alt="en-cours"
                  className="w-[30px] h-[30px]"
                />
              </div>
              <div className="w-max h-max text-black font-[500]">
                <p>Average Score</p>
              </div>
            </div>
            <div className="flex flex-row w-full h-max items-center">
              <div className="w-max h-max mr-2 font-[500]">84%</div>
              <div className="w-full border-none h-[16px] rounded-[8px]">
                <div className="bg-linear-90 from-blue-600 to-blue-400 w-[50%] h-full rounded-[8px]"></div>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-white text-[black] flex flex-col p-4 rounded-lg shadow-[0px_0px_3px_0px_#808080]">
            <div className="flex flex-row w-full h-max items-center mb-4">
              <div className="w-max h-max mr-2">
                <Image
                  src={ClockIcon}
                  alt="en-cours"
                  className="w-[30px] h-[30px]"
                />
              </div>
              <div className="w-max h-max text-black font-[500]">
                <p>Study Streak</p>
              </div>
            </div>
            <div className="flex flex-row w-full h-max items-center">
              <div className="w-max h-max mr-2 font-[500]">15</div>
              <div className="w-full h-max font-[400]">
                <p>days in row</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-white text-[black] flex flex-col p-4 rounded-lg shadow-[0px_0px_3px_0px_#808080]">
            <div className="flex flex-row w-full h-max items-center mb-4">
              <div className="w-max h-max mr-2">
                <Image
                  src={BookIcon}
                  alt="en-cours"
                  className="w-[30px] h-[30px]"
                />
              </div>
              <div className="w-max h-max text-black font-[500]">
                <p>Courses Enrolled</p>
              </div>
            </div>
            <div className="flex flex-row w-full h-max items-center">
              <div className="w-max h-max font-[500] mr-2">6</div>
              <div className="w-full h-max font-[400]">
                <p>Enrolled Courses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-2 px-4 rounded-lg w-full h-max mt-8 shadow-[0px_0px_3px_0px_#808080]">
          <div className="w-full h-max mb-8 font-bold text-[1.3em] flex flex-row justify-between items-center">
            <p>Continue Learning</p>
            <p className="text-[0.8em] text-blue-500 font-[500]">View All</p>
          </div>
          <div className="w-full h-max flex flex-col">
            <div className="w-full h-max border-b-[1px] border-[#ececec] flex flex-row justify-between items-center pb-2 mb-2">
              <div className="w-max h-max flex flex-row items-center">
                <div className="p-[6px] bg-amber-400 rounded-lg">
                  <Image
                    src={HeartIcon}
                    alt="en-cours"
                    className="w-[30px] h-[30px]"
                  />
                </div>
                <div className="w-max h-max flex flex-col ml-2">
                  <div className="w-max h-max font-bold text-[1.1em] mb-[2px]">
                    <p>CardioVascular System</p>
                  </div>
                  <div className="w-max h-max flex flex-row text-[#B8B8B8] text-[0.7em] items-center">
                    <div className="w-max h-max">
                      <p>Progress: 75%</p>
                    </div>
                    <div className="w-max h-max mx-[2px]">
                      <Image
                        src={DotIcon}
                        alt="en-cours"
                        className="w-[10px] h-[10px]"
                      />
                    </div>
                    <div className="w-max h-max">
                      <p>23 remaining questions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="w-max h-max py-2 px-4 text-white bg-blue-500 rounded-lg">
                  Continue
                </button>
              </div>
            </div>
            <div className="w-full h-max border-b-[1px] border-[#ececec] flex flex-row justify-between items-center pb-2 mb-2">
              <div className="w-max h-max flex flex-row items-center">
                <div className="p-[6px] bg-amber-400 rounded-lg">
                  <Image
                    src={BrainIcon}
                    alt="en-cours"
                    className="w-[30px] h-[30px]"
                  />
                </div>
                <div className="w-max h-max flex flex-col ml-2">
                  <div className="w-max h-max font-bold text-[1.1em] mb-[2px]">
                    <p>Neurological System</p>
                  </div>
                  <div className="w-max h-max flex flex-row text-[#B8B8B8] text-[0.7em] items-center">
                    <div className="w-max h-max">
                      <p>Progress: 25%</p>
                    </div>
                    <div className="w-max h-max mx-[2px]">
                      <Image
                        src={DotIcon}
                        alt="en-cours"
                        className="w-[10px] h-[10px]"
                      />
                    </div>
                    <div className="w-max h-max">
                      <p>100 remaining questions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="w-max h-max py-2 px-4 text-white bg-blue-500 rounded-lg">
                  Continue
                </button>
              </div>
            </div>
            <div className="w-full h-max border-b-[1px] border-[#ececec] flex flex-row justify-between items-center pb-2 mb-2">
              <div className="w-max h-max flex flex-row items-center">
                <div className="p-[6px] bg-amber-400 rounded-lg">
                  <Image
                    src={LungsIcon}
                    alt="en-cours"
                    className="w-[30px] h-[30px]"
                  />
                </div>
                <div className="w-max h-max flex flex-col ml-2">
                  <div className="w-max h-max font-bold text-[1.1em] mb-[2px]">
                    <p>Respiratory System</p>
                  </div>
                  <div className="w-max h-max flex flex-row text-[#B8B8B8] text-[0.7em] items-center">
                    <div className="w-max h-max">
                      <p>Progress: 90%</p>
                    </div>
                    <div className="w-max h-max mx-[2px]">
                      <Image
                        src={DotIcon}
                        alt="en-cours"
                        className="w-[10px] h-[10px]"
                      />
                    </div>
                    <div className="w-max h-max">
                      <p>5 remaining questions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="w-max h-max py-2 px-4 text-white bg-blue-500 rounded-lg">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeuser;
