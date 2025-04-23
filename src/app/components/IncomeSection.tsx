"use client";

import { useState } from 'react';

interface Employer {
  id: number;
  occupation: string;
  role: string;
  businessName: string;
  phone: string;
  startDate: string;
  finishDate: string;
  files: File[];
}

interface OtherIncome {
  type: string;
  amount: string;
  description: string;
}

interface IncomeSectionProps {
  onNext: () => void;
  onBack: () => void;
}

export default function IncomeSection({ onNext, onBack }: IncomeSectionProps) {
  // Employment state
  const [employers, setEmployers] = useState<Employer[]>([
    {
      id: 1,
      occupation: '',
      role: '',
      businessName: '',
      phone: '',
      startDate: '',
      finishDate: '',
      files: []
    }
  ]);
  const [employerCount, setEmployerCount] = useState(1);
  
  // Other income state
  const [hasOtherIncome, setHasOtherIncome] = useState(false);
  const [otherIncomes, setOtherIncomes] = useState<OtherIncome[]>([]);
  const [selectedIncomeTypes, setSelectedIncomeTypes] = useState<string[]>([]);
  const [additionalIncomeNotes, setAdditionalIncomeNotes] = useState('');

  // COVID support state
  const [receivedCovidSupport, setReceivedCovidSupport] = useState(false);
  const [selectedCovidPayments, setSelectedCovidPayments] = useState<string[]>([]);
  
  // Overseas assets state
  const [hasOverseasAssets, setHasOverseasAssets] = useState(false);
  
  // Business income state
  const [hasBusinessIncome, setHasBusinessIncome] = useState(false);
  const [businessActivity, setBusinessActivity] = useState('');
  const [businessCovidSupport, setBusinessCovidSupport] = useState(false);
  const [selectedBusinessCovidPayments, setSelectedBusinessCovidPayments] = useState<string[]>([]);
  const [pldpDetails, setPldpDetails] = useState('');
  const [hasDeferredLeases, setHasDeferredLeases] = useState(false);

  // Income types matching the first screenshot
  const incomeTypes = [
    'Bank interest',
    'Dividends',
    'Disposal of shares, units and similar investments',
    'Rental property',
    'Disposal of a real estate (other than your main residence)',
    'Foreign source income',
    'Cryptocurrency trading',
    'Forex trading',
    'Distribution from a Partnership or Trust',
    'Distribution from a Managed or Investment Fund',
    'Paid Parental Leave',
    'Jobseeker',
    'Newstart',
    'Austudy',
    'Youth Allowance',
    'Parenting Payment',
    'Sickness Allowance',
    'Pension from Centrelink',
    'Other Centrelink payments',
    'Pension/payments from your superannuation',
    'Employer termination payments',
    'Employer lump sum payments',
    'Other government payments'
  ];

  // COVID payment types
  const covidPaymentTypes = [
    'Pandemic Leave Disaster Payment (PLDP)',
    'Covid-19 Disaster Payment',
    'Jobkeeper',
    'Other Covid support payments'
  ];

  const businessCovidPaymentTypes = [
    'Pandemic Leave Disaster Payment (PLDP)',
    'Jobkeeper',
    'Other Covid support payments'
  ];

  // Employer methods
  const addEmployer = () => {
    const newId = employers.length > 0 ? Math.max(...employers.map(e => e.id)) + 1 : 1;
    setEmployers([...employers, {
      id: newId,
      occupation: '',
      role: '',
      businessName: '',
      phone: '',
      startDate: '',
      finishDate: '',
      files: []
    }]);
    setEmployerCount(employerCount + 1);
  };

  const removeEmployer = (id: number) => {
    setEmployers(employers.filter(emp => emp.id !== id));
    setEmployerCount(employerCount - 1);
  };

  const handleEmployerChange = (id: number, field: string, value: string) => {
    setEmployers(employers.map(emp => 
      emp.id === id ? { ...emp, [field]: value } : emp
    ));
  };

  const handleFileUpload = (id: number, files: FileList | null) => {
    if (files) {
      setEmployers(employers.map(emp => 
        emp.id === id ? { ...emp, files: [...emp.files, ...Array.from(files)] } : emp
      ));
    }
  };

  // Other income methods
  const addOtherIncome = () => {
    setOtherIncomes([...otherIncomes, { type: '', amount: '', description: '' }]);
  };

  const handleOtherIncomeChange = (index: number, field: string, value: string) => {
    const updated = [...otherIncomes];
    updated[index] = { ...updated[index], [field]: value };
    setOtherIncomes(updated);
  };

  const toggleIncomeType = (type: string) => {
    setSelectedIncomeTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  // COVID support methods
  const toggleCovidPayment = (type: string) => {
    setSelectedCovidPayments(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const toggleBusinessCovidPayment = (type: string) => {
    setSelectedBusinessCovidPayments(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  return (
    <div className="max-w-4xl mx-auto  bg-white rounded-lg pb-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Income Details</h1>

      {/* Employment Income Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Employment Income</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How many employers did you work for during the tax year (1 July - 30 June)?
          </label>
          <select 
            value={employerCount}
            onChange={(e) => setEmployerCount(Number(e.target.value))}
            className="w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            {[0, 1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        {employers.map((employer, index) => (
          <div key={employer.id} className="mb-6 p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-700">Employer {index + 1}</h3>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeEmployer(employer.id)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                 
                 

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Main Occupation/Position*</label>
                <input
                  type="text"
                  value={employer.occupation}
                  onChange={(e) => handleEmployerChange(employer.id, 'occupation', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Main Role/Duty*</label>
                <input
                  type="text"
                  value={employer.role}
                  onChange={(e) => handleEmployerChange(employer.id, 'role', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name*</label>
                <input
                  type="text"
                  value={employer.businessName}
                  onChange={(e) => handleEmployerChange(employer.id, 'businessName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Phone Number</label>
                <input
                  type="tel"
                  value={employer.phone}
                  onChange={(e) => handleEmployerChange(employer.id, 'phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input
                  type="date"
                  value={employer.startDate}
                  onChange={(e) => handleEmployerChange(employer.id, 'startDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Finish Date (if applicable)</label>
                <input
                  type="date"
                  value={employer.finishDate}
                  onChange={(e) => handleEmployerChange(employer.id, 'finishDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload your Payment Summary/Final Pay Slip</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor={`file-upload-${employer.id}`}
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                    >
                      <span>Upload a file</span>
                      <input
                        id={`file-upload-${employer.id}`}
                        name={`file-upload-${employer.id}`}
                        type="file"
                        className="sr-only"
                        onChange={(e) => handleFileUpload(employer.id, e.target.files)}
                        multiple
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
                </div>
              </div>
              {employer.files.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-700">Uploaded files:</p>
                  <ul className="list-disc pl-5">
                    {employer.files.map((file, i) => (
                      <li key={i} className="text-sm text-gray-600">{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addEmployer}
          className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Employer
        </button>
      </section>

      {/* Other Income Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Other Income or Loss</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Did you have income or loss from any other sources?</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={hasOtherIncome}
                onChange={() => setHasOtherIncome(true)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={!hasOtherIncome}
                onChange={() => setHasOtherIncome(false)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        {hasOtherIncome && (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Other non-employment income (Check all applicable)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {incomeTypes.map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedIncomeTypes.includes(type)}
                      onChange={() => toggleIncomeType(type)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Please list other incomes you have made or received and not mentioned above:
              </label>
              <textarea
                value={additionalIncomeNotes}
                onChange={(e) => setAdditionalIncomeNotes(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter any additional income details here..."
              />
            </div>

            {/* Additional income entries */}
            {otherIncomes.map((income, index) => (
              <div key={index} className="mb-4 p-4 border border-gray-200 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Type</label>
                    <input
                      type="text"
                      value={income.type}
                      onChange={(e) => handleOtherIncomeChange(index, 'type', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Amount ($)</label>
                    <input
                      type="number"
                      value={income.amount}
                      onChange={(e) => handleOtherIncomeChange(index, 'amount', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
                  <textarea
                    value={income.description}
                    onChange={(e) => handleOtherIncomeChange(index, 'description', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addOtherIncome}
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Other Income Entry
            </button>
          </>
        )}
      </section>

      {/* COVID Support Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">COVID-19 Support Payments</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Did you receive COVID-19 Support Payment?
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={receivedCovidSupport}
                onChange={() => setReceivedCovidSupport(true)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={!receivedCovidSupport}
                onChange={() => setReceivedCovidSupport(false)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        {receivedCovidSupport && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Check all applicable:
            </label>
            <div className="space-y-2">
              {covidPaymentTypes.map(type => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCovidPayments.includes(type)}
                    onChange={() => toggleCovidPayment(type)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Overseas Assets Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Overseas Assets</h2>
        
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Overseas assets over $500?
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={hasOverseasAssets}
                onChange={() => setHasOverseasAssets(true)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={!hasOverseasAssets}
                onChange={() => setHasOverseasAssets(false)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        {hasOverseasAssets && (
          <p className="text-sm text-gray-600 mb-2">
            During the year did you own, or have an interest in, assets located outside Australia which had a total value of AUD$500.00 or more?
          </p>
        )}
      </section>

      {/* Business Income Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Business Income or Loss</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Did you run a business at any time during the year?*
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={hasBusinessIncome}
                onChange={() => setHasBusinessIncome(true)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={!hasBusinessIncome}
                onChange={() => setHasBusinessIncome(false)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        {hasBusinessIncome && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Working under an ABN or as a contractor
              </label>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Main business activity*
              </label>
              <input
                type="text"
                value={businessActivity}
                onChange={(e) => setBusinessActivity(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Did you receive COVID-19 Support Payment for your Business?
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={businessCovidSupport}
                    onChange={() => setBusinessCovidSupport(true)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={!businessCovidSupport}
                    onChange={() => setBusinessCovidSupport(false)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>

            {businessCovidSupport && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    COVID-19 Support Payment for Business: (Check all applicable)
                  </label>
                  <div className="space-y-2">
                    {businessCovidPaymentTypes.map(type => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBusinessCovidPayments.includes(type)}
                          onChange={() => toggleBusinessCovidPayment(type)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {selectedBusinessCovidPayments.includes('Pandemic Leave Disaster Payment (PLDP)') && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pandemic Leave Disaster Payment (PLDP) details
                    </label>
                    <input
                      type="text"
                      value={pldpDetails}
                      onChange={(e) => setPldpDetails(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter PLDP details..."
                    />
                  </div>
                )}
              </>
            )}


            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Do you have any deferred Non-Commercial losses?
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={hasDeferredLeases}
                    onChange={() => setHasDeferredLeases(true)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={!hasDeferredLeases}
                    onChange={() => setHasDeferredLeases(false)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>
          </>
        )}
      </section>

      <div className="flex justify-between pt-6 border-t">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}