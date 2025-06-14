import Image from "next/image";
import AiIcon from "@/assets/HomePageAssets/ai.png";
import PDFIcon from "@/assets/HomePageAssets/pdf-file.png";
import TeamIcon from "@/assets/HomePageAssets/team.png";
import style from "@/components/HomePageCompanent/Section2/style.module.css";

const Section2 = () => {
  return (
    <div className="grid grid-cols-3 gap-8 bg-white px-8 py-10 w-full h-max">
      <div className={style.card}>
        <div className="w-full h-max mb-2 flex justify-center">
          <Image src={AiIcon} alt="en-cours" className="w-[30px] h-[30px]" />
        </div>
        <div className="w-full h-max mb-2 flex justify-center text-[black] text-[1.2em] font-bold">
          <p className="w-max h-max">AI QCM Builder</p>
        </div>
        <div className="w-full h-max flex justify-center text-center text-[black] font-[300] text-[0.8em]">
          <p>
            Notre solution propose des qcms qui sont statiques et ceux qui sont
            générées par un modèle ai propement entrainement sur des données
            bien filtrées afin de guarantir la meilleur qualité possible.
          </p>
        </div>
      </div>
      <div className={style.card}>
        <div className="w-full h-max mb-2 flex justify-center">
          <Image src={PDFIcon} alt="en-cours" className="w-[30px] h-[30px]" />
        </div>
        <div className="w-full h-max mb-2 flex justify-center text-[black] text-[1.2em] font-bold">
          <p className="w-max h-max">Course And Live</p>
        </div>
        <div className="w-full h-max flex justify-center text-center text-[black] font-[300] text-[0.8em]">
          <p>
            Notre plateforme vous assure un catalogue des enregistrements qui
            explique les différents cours de manière détaillée, tout en assurant
            des cours sous forme pdf prêt à être téléchargé.
          </p>
        </div>
      </div>
      <div className={style.card}>
        <div className="w-full h-max mb-2 flex justify-center">
          <Image src={TeamIcon} alt="en-cours" className="w-[30px] h-[30px]" />
        </div>
        <div className="w-full h-max mb-2 flex justify-center text-[black] text-[1.2em] font-bold">
          <p className="w-max h-max">Qualified Team</p>
        </div>
        <div className="w-full h-max flex justify-center text-center text-[black] font-[300] text-[0.8em]">
          <p>
            Cette platforme est gérée par une équipe qualifiée qui travaille
            pour vous assurer la meilleure qualité possible pour vous aider à
            réussir votre parcours académique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
