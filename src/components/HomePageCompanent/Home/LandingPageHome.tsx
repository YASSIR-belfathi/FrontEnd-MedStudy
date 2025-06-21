import Image from "next/image";
import BackGroundImage from "@/assets/HomePageAssets/svgviewer-png-output (1).png";

const LandingPageHome = () => {
  return (
    <div className="w-full h-max relative" id="Home">
      <div className="w-full h-max overflow-hidden">
        <Image
          src={BackGroundImage}
          alt="en-cours"
          className="w-full md:h-[550px] max-md:h-[400px]"
        />
      </div>
      <div className="grid md:grid-cols-2 max-md:grid-cols-1 absolute w-full h-full top-0 py-4 px-6 items-center">
        <div className="flex flex-col w-full h-max text-white col-span-1">
          <div className="w-full h-max text-[3em] mb-2">
            <p>Êtes-cous étudiants en Médecine?</p>
          </div>
          <div className="w-full h-max text-[1.5em] mb-3">
            <p>
              Bienvenur dans la plateforme
              <span className="font-bold italic">MedStudy</span>
            </p>
          </div>
          <div className="w-max h-max">
            <button className="w-max h-max py-2 px-4 rounded-3xl hover:cursor-pointer bg-linear-90 from-blue-200 to-blue-600 border-none outline-none">
              Se connecter/S&#39;inscrire
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LandingPageHome;
