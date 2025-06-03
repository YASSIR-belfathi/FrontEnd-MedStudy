import Image, { StaticImageData } from "next/image";

interface NotificationType {
  image: StaticImageData | string;
  Title: string;
  description: string;
}

const Notification = ({ image, Title, description }: NotificationType) => {
  return (
    <div className="w-full h-max flex flex-row my-8 py-2 px-4 border-[2px] border-amber-500 rounded-lg items-center bg-linear-to-r from-[#FEF3C7] to-amber-500">
      <div className="w-max h-max mr-4">
        <Image src={image} alt="en-cours" className="w-[20px] h-[20px]" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[1.2em] font-bold">{Title}</h1>
        <p className="font-[300]">{description}</p>
      </div>
    </div>
  );
};

export default Notification;
