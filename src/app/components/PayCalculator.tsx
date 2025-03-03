"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function PayCalculator() {
  const [income, setIncome] = useState<string>("");
  const [period, setPeriod] = useState<"annually" | "monthly" | "fortnightly" | "weekly">("annually");
  const [includeSuper, setIncludeSuper] = useState<boolean>(false);
  const [includeHelpDebt, setIncludeHelpDebt] = useState<boolean>(false);
  const [isNonResident, setIsNonResident] = useState<boolean>(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  // Ref for scrolling
  const resultRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (result) {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result]); // Runs whenever `result` changes

  const calculateTax = () => {
    let annualIncome = parseFloat(income) || 0;
    
    if (period === "monthly") annualIncome *= 12;
    else if (period === "fortnightly") annualIncome *= 26;
    else if (period === "weekly") annualIncome *= 52;

    let superRate = includeSuper ? 0.105 : 0;
    let superAmount = annualIncome * superRate;
    let tax = 0;

    if (!isNonResident) {
      if (annualIncome > 180000) tax = (annualIncome - 180000) * 0.45 + 51667;
      else if (annualIncome > 120000) tax = (annualIncome - 120000) * 0.37 + 29467;
      else if (annualIncome > 45000) tax = (annualIncome - 45000) * 0.325 + 5092;
      else if (annualIncome > 18200) tax = (annualIncome - 18200) * 0.19;
    } else {
      if (annualIncome > 180000) tax = (annualIncome - 180000) * 0.45 + 61200;
      else if (annualIncome > 120000) tax = (annualIncome - 120000) * 0.37 + 31200;
      else if (annualIncome > 45000) tax = (annualIncome - 45000) * 0.325 + 14625;
      else tax = annualIncome * 0.325;
    }

    let medicareLevy = isNonResident ? 0 : annualIncome * 0.02;
    let helpDebtAmount = includeHelpDebt ? annualIncome * 0.05 : 0;
    let netIncome = annualIncome - (tax + medicareLevy + helpDebtAmount);

    setResult({ 
      grossIncome: annualIncome, 
      superannuation: superAmount,  
      tax, 
      medicareLevy,  
      help: helpDebtAmount,  
      helpDebt: helpDebtAmount,  
      taxOffsets: 0, 
      netIncome 
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white mb-[60px] pb-[60px]">
      <div className="shadow-lg shadow-[#FF8B661F] bg-[#F8F8F8] w-[1216px] h-[844px] rounded-xl p-8 border border-gray-200 flex justify-between items-center">
        <div className="flex flex-col items-center justify-center pr-6 w-[340px] h-[425px]">
          <Image src="/taxpic.png" alt="Tax Image" width={340} height={424} />
        </div>
        <div className="w-px h-[425px] bg-[#A19C9C] mx-6 shadow-md shadow-gray-400 pl-[-4px]"></div>
        <div className="flex-1">
          <h1 className="text-xl font-semibold text-[#A19C9C]">Gross Income (Before Tax)</h1>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full p-3 border rounded-xl shadow-inner mt-2 text-lg bg-[#F8F8F8] text-[#A19C9C]"
            placeholder="$0.00"
          />

          <div className="flex justify-between mt-4 bg-[#F8F8F8] shadow-lg p-1 rounded-[50px] px-4 py-2">
            {["annually", "monthly", "fortnightly", "weekly"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p as any)}
                className={`px-4 py-2 text-sm font-semibold rounded-[50px] transition-all ${
                  period === p ? "hover:text-orange-600 border rounded-[50px] shadow-inner text-orange-600" : "text-[#A19C9C] hover:text-orange-500"
                }`}
              >
                {p.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            {[
              { label: "Includes Superannuation", state: includeSuper, setState: setIncludeSuper },
              { label: "Includes HELP Debt", state: includeHelpDebt, setState: setIncludeHelpDebt },
              { label: "Non-Resident", state: isNonResident, setState: setIsNonResident }
            ].map(({ label, state, setState }) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-[#939393] font-medium">{label}</span>
                <div className="flex space-x-2">
                  <div className="bg-[#F8F8F8] flex justify-between px-6 items-center w-[198px] h-[64px] border shadow-lg rounded-[50px]">
                    <button
                      onClick={() => setState(true)}
                      className={`px-5 py-2 rounded-[50px] transition-all hover:text-orange-500 hover:text-lg hover:shadow-inner ${state ? "text-orange-600 shadow-inner " : "text-[#A19C9C]"}`}
                    >
                      YES
                    </button>
                    <button
                      onClick={() => setState(false)}
                      className={`px-5 py-2 rounded-[50px] transition-all hover:text-orange-500 hover:text-lg hover:shadow-inner ${!state ? "text-orange-600 shadow-inner" : "text-[#A19C9C]"}`}
                    >
                      NO
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button onClick={calculateTax} className="mt-6 bg-orange-600 text-white py-3 rounded-[50px] w-[198px] h-[64px] text-lg font-semibold shadow-md hover:bg-orange-500">
              CALCULATE
            </button>
          </div>
        </div>
      </div>

      {/* Results - With Ref for Scrolling */}
      {result && (
        <div ref={resultRef} className="mt-6 p-4 bg-white rounded-xl w-[1216px]">
          <table className="w-full border-collapse border mt-2 shadow-lg rounded-xl">
            <thead>
              <tr className="bg-white text-[#7C7C7C] text-[20px] shadow-lg rounded-xl">
                <th className="p-6">YEAR</th>
                <th className="p-6">ANNUALLY</th>
                <th className="p-6">MONTHLY</th>
                <th className="p-6">FORTNIGHTLY</th>
                <th className="p-6">WEEKLY</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(result).map(([key, value]) => (
                <tr key={key} className={key === "netIncome" ? "bg-[#FF8B662E]" : ""}>
                  <td className="border p-2 capitalize text-[#7C7C7C] text-[20px]">{key.replace(/([A-Z])/g, " $1").trim()}</td>
                  {[1, 12, 26, 52].map((divider, i) => (
                    <td key={i} className="border p-6 text-[#7C7C7C] text-[20px]">
                      ${(value / divider).toFixed(2)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
