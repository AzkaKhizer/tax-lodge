
import Hero from "./components/Hero";
import About from "./components/About";
import TaxLodgeProcess from "./components/taxlodge";
import WhyChooseUs from "./components/whychooseus";
import Affiliations from "./components/Affiliations";


export default function Home() {
  return (
    <div className=" mx-auto overflow-x-hidden ">
    <div className="bg-[#F2F2F2]  relative flex justify-center ">
      <Hero/>
      </div>
      
      <About/>
      <TaxLodgeProcess/>
      <WhyChooseUs/>
      <Affiliations/>

      
    </div>)}