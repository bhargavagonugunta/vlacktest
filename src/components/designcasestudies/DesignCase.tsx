import DesignAboutProject from "./designcasecomp/DesignAbout";
import DesignCaseCard from "./designcasecomp/DesignCaseCard";
import DesignCaseCard2 from "./designcasecomp/DesignCaseCard2";
import DesignCaseHeader from "./designcasecomp/DesignCaseHeader";
import DesignHowWeDo from "./designcasecomp/DesignHowWeDo";
import DesignKeywords from "./designcasecomp/DesignKeywords";
import DesignTogether from "./designcasecomp/DesignTogether";
export default function DesignCaseComp() {
  return (
    <div className="sm:p-5 md:p-8 lg:p-32">
      <DesignCaseHeader />
      <DesignCaseCard />
      <DesignAboutProject />
      <DesignCaseCard2 />
      <DesignHowWeDo />
      <DesignKeywords />
      <DesignTogether />
    </div>
  );
}
