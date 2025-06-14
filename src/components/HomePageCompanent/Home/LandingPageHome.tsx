const LandingPageHome = () => {
  return (
    <div className="w-full h-max relative" id="Home">
      <div className="w-full h-max overflow-hidden">
        <svg
          viewBox="0 0 1440 548"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M280.597 450.42C145.05 450.42 0 547 0 547V1H1442V547C1442 547 1429 450.42 1338.96 450.42C1248.93 450.42 1193.91 547 1079.87 547C965.835 547 910.765 447.557 807.28 450.42C697.081 453.468 652.226 547 535.186 547C418.145 547 416.144 450.42 280.597 450.42Z"
            fill="url(#paint0_radial_7_42)"
            stroke="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_7_42"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1.81175e-05 1.64389) scale(303.605 114.957)"
            >
              <stop offset="0.024" stopColor="white" />
              <stop offset="0.971" stopColor="#4FD1C7" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="grid grid-cols-2 absolute w-full h-full top-0 py-4 px-6 items-center">
        <div className="flex flex-col w-full h-max text-white">
          <div className="w-full h-max text-[3em] mb-2">
            <p>Êtes-cous étudiants en Médecine?</p>
          </div>
          <div className="w-full h-max text-[1.5em] mb-3">
            <p>
              Bienvenur dans la plateforme{" "}
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
