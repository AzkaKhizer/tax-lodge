import PayCalculator from "@/app/components/PayCalculator";
import BreadcrumbCalc from "../components/BreadcrumbCalc";
import WelcomeSection from "../components/WelcomeCalc";
import TaxReturnSection from "../components/GetStarted";

export default function Home() {
  return (
    <main className=" pt-28 max-w-screen-2xl mx-auto overflow-x-hidden">
        <div>
        <BreadcrumbCalc/>
        <WelcomeSection/>
        
      <PayCalculator />
      <TaxReturnSection/>
      </div>
    </main>
  );
}
