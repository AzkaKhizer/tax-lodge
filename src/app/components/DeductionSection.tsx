"use client";

import { useState } from 'react';

interface DeductionsSectionProps {
  onNext: () => void;
  onBack: () => void;
}

export default function DeductionsSection({ onNext, onBack }: DeductionsSectionProps) {
  // Work-related expenses state
  const [expensesOver300, setExpensesOver300] = useState<boolean | null>(null);
  const [understandReceipts, setUnderstandReceipts] = useState(false);
  
  // Selected work-related expense types
  const [selectedExpenseTypes, setSelectedExpenseTypes] = useState<string[]>([]);
  
  // Expense details
  const [expenseDetails, setExpenseDetails] = useState('');
  const [expenseDetailsUnder300, setExpenseDetailsUnder300] = useState('');
  
  // Work from home details
  const [workedFromHome, setWorkedFromHome] = useState<boolean | null>(null);
  
  
  // Non-work related expenses
  const [paidTaxAgent, setPaidTaxAgent] = useState(false);
  const [taxAgentAmount, setTaxAgentAmount] = useState('');
  const [madeDonation, setMadeDonation] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  
  // Superannuation
  const [personalSuperContribution, setPersonalSuperContribution] = useState<boolean | null>(null);
  const [noticeOfIntent, setNoticeOfIntent] = useState<boolean | null>(null);
  
  // Tax offsets
  const [medicareEligible, setMedicareEligible] = useState(false);
  const [privateHealthInsurance, setPrivateHealthInsurance] = useState(false);
  const [highMedicalBills, setHighMedicalBills] = useState(false);
  const [maintainedInvalid, setMaintainedInvalid] = useState(false);
  const [livedRemote, setLivedRemote] = useState(false);
  const [workedFIFO, setWorkedFIFO] = useState(false);
  const [receivedMedicalOffset, setReceivedMedicalOffset] = useState<boolean | null>(null);
  const [medicalExpenses, setMedicalExpenses] = useState('');
  const [remoteAreasDetails, setRemoteAreasDetails] = useState('');
  
  // Child support
  const [paysChildSupport, setPaysChildSupport] = useState<boolean | null>(null);
  const [childSupportAmount, setChildSupportAmount] = useState('');

  // Work-related expense types
  const expenseTypes = [
    'Use my own motor vehicle (other than travel to and from home)',
    'Study/training directly related to work',
    'Use personal mobile phone/internet',
    'Use home phone/internet',
    'Pay union fees',
    'Wear a compulsory uniform (that you purchase)',
    'Pay any membership, license or registration fees',
    'Purchase and maintain any tools/material/aids',
    'Work from home',
    'Have income protection insurance (Not paid by your super fund)',
    'Overnight Work-related travel',
    'Travel between workplaces using public transport'
  ];

  const toggleExpenseType = (type: string) => {
    setSelectedExpenseTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg pb-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Deductions</h1>

      {/* Work-Related Expenses Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Work-Related Expenses as an Employee</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Are you claiming work-related expenses over $300?*
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                checked={expensesOver300 === true}
                onChange={() => setExpensesOver300(true)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={expensesOver300 === false}
                onChange={() => setExpensesOver300(false)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        <div className="mb-6 flex items-start">
          <div className="flex items-center h-5">
            <input
              id="understand-receipts"
              type="checkbox"
              checked={understandReceipts}
              onChange={(e) => setUnderstandReceipts(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="understand-receipts" className="font-medium text-gray-700">
              I Understand that*
            </label>
            <p className="text-gray-500">I am required to have receipts or other documentary evidence to support my claims</p>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check all applicable:
          </label>
          <div className="space-y-2">
            {expenseTypes.map(type => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedExpenseTypes.includes(type)}
                  onChange={() => toggleExpenseType(type)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500">
            In limited circumstances, you can claim the cost of trips between home and work.
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Please provide details and amounts of all work-related expenses you have incurred*
          </label>
          <textarea
            value={expenseDetails}
            onChange={(e) => setExpenseDetails(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter details of your work-related expenses..."
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Details of your work-related expenses up to $300 (if applicable):
          </label>
          <textarea
            value={expenseDetailsUnder300}
            onChange={(e) => setExpenseDetailsUnder300(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter details of expenses under $300..."
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            During the year did you work from home more than 375 hours during Covid, or more than 577 hours during normal circumstances?
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                checked={workedFromHome === true}
                onChange={() => setWorkedFromHome(true)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={workedFromHome === false}
                onChange={() => setWorkedFromHome(false)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>
      </section>

      {/* Business Income and Expenses Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Business Income and Expenses</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Please upload your business income and expenses worksheet
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="business-worksheet-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                >
                  <span>Upload a file</span>
                  <input
                    id="business-worksheet-upload"
                    name="business-worksheet-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Work Related Expenses Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Non-Work Related Expenses</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check all applicable to you:
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={paidTaxAgent}
                onChange={(e) => setPaidTaxAgent(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">paid a tax agent to prepare my return last year</span>
            </label>
            {paidTaxAgent && (
              <div className="ml-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount paid to tax agent:</label>
                <input
                  type="text"
                  value={taxAgentAmount}
                  onChange={(e) => setTaxAgentAmount(e.target.value)}
                  className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={madeDonation}
                onChange={(e) => setMadeDonation(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">donated money to a deductible gift recipient (DGR)</span>
            </label>
            {madeDonation && (
              <div className="ml-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount of donation to DGR Organization:</label>
                <input
                  type="text"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Did you make personal superannuation contribution from your after-tax income?
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                checked={personalSuperContribution === true}
                onChange={() => setPersonalSuperContribution(true)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={personalSuperContribution === false}
                onChange={() => setPersonalSuperContribution(false)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Have you given a notice of intent to your super fund that you want to claim a tax deduction for personal contributions?
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                checked={noticeOfIntent === true}
                onChange={() => setNoticeOfIntent(true)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={noticeOfIntent === false}
                onChange={() => setNoticeOfIntent(false)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>
      </section>

      {/* Upload Superfund Acknowledgement Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Upload acknowledgement from Superfund</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Please upload a valid notice of intent acknowledgement you have from your superfund.
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="superfund-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                >
                  <span>Upload a file</span>
                  <input
                    id="superfund-upload"
                    name="superfund-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Offsets Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Tax Offsets</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check any applicable to you:
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={medicareEligible}
                onChange={(e) => setMedicareEligible(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">I had a Medicare card or I was eligible for Medicare benefits</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={privateHealthInsurance}
                onChange={(e) => setPrivateHealthInsurance(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">I had private health insurance which covered hospital</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={highMedicalBills}
                onChange={(e) => setHighMedicalBills(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">I had medical bills over $2,000 (after any refunds)*</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={maintainedInvalid}
                onChange={(e) => setMaintainedInvalid(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">I maintained an invalid or an invalid carer who is 16 years old or older</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={livedRemote}
                onChange={(e) => setLivedRemote(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">I lived in a remote area of Australia for more than 183 days**</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={workedFIFO}
                onChange={(e) => setWorkedFIFO(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">I worked FIFO (fly-in-fly-out)</span>
            </label>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            *Medical expense tax offset only applies to income years from 2015–16 to 2018–19
          </p>
          <p className="text-xs text-gray-500">
            **Additional accrued costs fall.
          </p>
        </div>

        {privateHealthInsurance && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Private Health Insurance Certificate of Currency
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="health-insurance-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                  >
                    <span>Upload a file</span>
                    <input
                      id="health-insurance-upload"
                      name="health-insurance-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
              </div>
            </div>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Did you receive &#39;net medical expenses tax offset&#39; in your last income tax assessment?
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                checked={receivedMedicalOffset === true}
                onChange={() => setReceivedMedicalOffset(true)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={receivedMedicalOffset === false}
                onChange={() => setReceivedMedicalOffset(false)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        {receivedMedicalOffset && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total out of pocket medical expenses paid:
            </label>
            <input
              type="text"
              value={medicalExpenses}
              onChange={(e) => setMedicalExpenses(e.target.value)}
              className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        )}

        {livedRemote && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Please list remote areas and number of days you have lived at each place in this tax year.
            </label>
            <textarea
              value={remoteAreasDetails}
              onChange={(e) => setRemoteAreasDetails(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="List remote areas and days stayed..."
            />
          </div>
        )}
      </section>

      {/* Child Support Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Child Support</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Do you pay child support?
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                checked={paysChildSupport === true}
                onChange={() => setPaysChildSupport(true)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={paysChildSupport === false}
                onChange={() => setPaysChildSupport(false)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            This question is about amounts you pay or benefits you provide to another person other than your partner for the maintenance of your natural or adopted child.
          </p>
        </div>

        {paysChildSupport && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Child support paid in this tax year:
            </label>
            <input
              type="text"
              value={childSupportAmount}
              onChange={(e) => setChildSupportAmount(e.target.value)}
              className="w-full md:w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
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