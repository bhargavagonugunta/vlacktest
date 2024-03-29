import { DesignProjectData } from "./ProjectData";
import DataAboutList from "./DesignAboutList";
import { useTranslation } from "react-i18next";
export default function DesignAboutProject() {
  const {t}= useTranslation()
  return (
    <div className=" md:p-14 lg:p-20 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{t(`${DesignProjectData[0].title}`)}</h1>
      <p className="text-base">{t(`${DesignProjectData[0].description}`)}</p>
      <ul className="text-base">
        {DesignProjectData[0].list.map((item, index) => {
          return <DataAboutList item={item} key={index} />;
        })}
      </ul>
    </div>
  );
}
