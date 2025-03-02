import Image from "next/image";

export default function OnlineTax() {
  return (
    
      <section className=" w-full mb-10 pt-6">
             <div className="relative h-[400px] rounded-r-[200px]">
           {/* Background Image */}
           <Image
             src="/onlinetax.png" // Replace with your image path
             alt="Office Background"
             layout="fill"
             objectFit="cover"
             className="absolute inset-0"
           />
     
           {/* Overlay Content */}
           <div className="relative flex flex-col justify-center  bg-[#741C0059] rounded-r-[200px] bg-opacity-50 h-full  text-white px-6">
           <h2 className="text-3xl md:text-5xl font-bold text-white w-[750px] leading-relaxed pl-4">
          Expert Tax Preparation Made Simple. Maximize Your Refund Today!
        </h2>
        <button className="mt-6 px-10 py-4 w-[200px] bg-[#FE5722] text-[18px] text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition">
          GET STARTED
        </button>
            
           </div>
           </div>


        <div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center  text-center py-6 px-6 mt-3">
      {/* Heading */}
      <h2 className="text-3xl md:text-[44px]  w-[731px] font-semibold  leading-normal  text-black">
        Get your tax return prepared and lodged by a dedicated IPA Tax Accountant.
      </h2>

      {/* Description */}
      <div className="w-[1100px]">
      <p className="mt-4 text-[#1E1E1E] leading-relaxed text-[16px] ">
        Our online tax return service is designed to provide a seamless, secure, and expert-driven experience. 
        Unlike DIY or automated systems, our team of certified IPA Tax Accountants personally reviews and prepares 
        your tax return, ensuring accuracy, compliance, and the maximum refund you’re entitled to.
      </p>

      <p className="mt-1 text-[#1E1E1E] leading-relaxed text-[16px]">
        Getting started is simple—just complete our easy-to-use questionnaire and upload your tax documents. 
        From there, we take care of everything, handling the complexities while you focus on what matters most.
      </p>

      <p className="mt-1 text-[#1E1E1E] leading-relaxed text-[16px]">
        Every tax return is meticulously prepared by experienced professionals, and our commitment to data security 
        ensures that your sensitive information remains encrypted and protected at all times. Whether you’re a sole trader, 
        partnership, company, or trust, we streamline the process to make tax filing hassle-free and efficient.
      </p>
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <button className="bg-[#FE5722] text-white px-10  py-4 text-[18px] rounded-full font-semibold shadow-md hover:bg-orange-600 transition">
          GET TAX RETURN
        </button>
      </div>
      </div>
      
    </section>
  );
}
