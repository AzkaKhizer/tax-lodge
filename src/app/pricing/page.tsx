

import Breadcrumb from "@/app/components/Breadcrumb"
import Pricing from "../components/Pricing";
import PricingSupplementary from "../components/Supplementaryplan";
import RegistrationFees from "../components/Registrationfee";
import TaxSolutionsSection from "../components/TaxSolution";

export default function PricingPage() {
  return (
    <div className=" mt-28 mx-auto overflow-x-hidden flex flex-col items-center justify-center w-full">
      
      <Breadcrumb />
      {/* Other content here */}
      <Pricing />
      <PricingSupplementary/>
      <RegistrationFees/>
      <TaxSolutionsSection/>
    </div>
  );
}
