import BreadcrumbService from "../components/BCService";
import TaxServices from "../components/Service";
import HeroSection from "../components/TaxSolution";

export default function ServiceDetails() {
    return (
      <div className=" mt-28 mx-auto overflow-x-hidden flex flex-col items-center justify-center w-full">
        
       <BreadcrumbService/>
       <TaxServices/>
       <HeroSection/>
      </div>
    );
  }