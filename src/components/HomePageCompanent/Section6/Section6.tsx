import Image from "next/image";
import ImageSection from "@/assets/HomePageAssets/Section6/teamwork-concept-landing-page.png";

const Section6 = () => {
  return (
    <div className="w-full h-max flex flex-col mt-8">
      <div
        className="w-full h-max mb-10 flex flex-row justify-center items-center"
        id="AboutUs"
      >
        <hr className="w-[100px] h-[5px] rounded-lg border-none bg-[#55F2C8]" />
        <p className="text-[2em] text-black mx-4">About Us</p>
        <hr className="w-[100px] h-[5px] rounded-lg border-none bg-[#55F2C8]" />
      </div>
      <div className="w-full h-max flex md:flex-row max-md:flex-col-reverse gap-8 px-10 py-6 items-center">
        <div className="md:w-[50%] max-md:w-[100%] h-max text-[1em] italic text-center flex justify-center">
          <p className="w-full h-max">
            &#x201D;Nous sommes un groupe des étudiants passionnés par la
            digitalisation des processus à travers des solutions innovantes et
            qui ont un impacte directe sur les utilisateurs de nos
            solutions.&#x201D;
          </p>
        </div>
        <div className="md:w-[50%] max-md:w-[100%] h-max flex justify-center relative">
          <svg
            width="400"
            height="300"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M156.159 0C69.989 0 1.54229 30.9789 0.0144649 163.399C-1.51336 295.819 118.281 309.428 220.633 295.819C322.984 282.209 400 0 400 0H156.159Z"
              fill="#AEFFEF"
            />
          </svg>
          <div className="w-full h-full absolute top-0 flex justify-center items-center">
            <Image
              src={ImageSection}
              alt="en-cours"
              className="w-[200px] h-[200px] translate-y-[-25px] translate-x-[-25px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
