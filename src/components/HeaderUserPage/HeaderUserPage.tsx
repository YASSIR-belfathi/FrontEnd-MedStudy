interface HeaderUserPageProps {
  Title: string;
  subTitle: string;
}

const HeaderUserPage = ({ Title, subTitle }: HeaderUserPageProps) => {
  return (
    <div className="w-full h-max flex flex-col">
      <div className="w-full h-max mb-2 text-black">
        <h1 className="text-[2em] font-bold">{Title}</h1>
      </div>
      <div className="w-full h-max text-[#424242]">
        <p className="text-[0.8em]">{subTitle}</p>
      </div>
    </div>
  );
};

export default HeaderUserPage;
