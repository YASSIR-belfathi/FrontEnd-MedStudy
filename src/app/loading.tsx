import Image from "next/image";
import GifLoading from "@/assets/HomePageAssets/heartbeat.gif";
import AudioLoading from "@/components/HomePageCompanent/Home/AudioLoading";

const loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image src={GifLoading} alt="en-cours" className="w-[250px] h-[250px]" />
      <AudioLoading />
    </div>
  );
};

export default loading;
