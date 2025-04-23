"use client";

import { useState } from 'react';

interface SubmitSectionProps {
  onNext: () => void;
  onBack: () => void;
}

export default function SubmitSection({ onNext, onBack }: SubmitSectionProps) {
  // Transfer Refund State
  const [transferOption, setTransferOption] = useState<string>('');
  const [accountHolder, setAccountHolder] = useState('');
  const [bsb, setBsb] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  const [iban, setIban] = useState('');
  
  // International Bank Details State
  const [bankBranchAddress, setBankBranchAddress] = useState('');
  const [homePhoneNumber, setHomePhoneNumber] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  
  // Audit Protection State
  const [auditProtection, setAuditProtection] = useState<boolean | null>(null);
  
  // Referral State
  const [referralSource, setReferralSource] = useState('');
  
  // Device State
  const [deviceUsed, setDeviceUsed] = useState('');
  
  // Message State
  const [advisorMessage, setAdvisorMessage] = useState('');
  
  // Terms State
  const [agreeTermsAuthorization, setAgreeTermsAuthorization] = useState(false);
  const [agreeTermsEngagement, setAgreeTermsEngagement] = useState(false);
  const [agreePrice, setAgreePrice] = useState(false);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg pb-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Submit Your Tax Return</h1>

      {/* Transfer Refund Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Transfer my refund*</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transfer option*
          </label>
          <select
            value={transferOption}
            onChange={(e) => setTransferOption(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select transfer option</option>
            <option value="domestic">Domestic transfer</option>
            <option value="international">International transfer</option>
          </select>
          <p className="mt-1 text-xs text-gray-500">
            Additional fee applies for transferring money overseas. See &#39;Pricing&#39; for more details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder*</label>
            <input
              type="text"
              value={accountHolder}
              onChange={(e) => setAccountHolder(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">BSB*</label>
            <input
              type="text"
              value={bsb}
              onChange={(e) => setBsb(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="mt-1 text-xs text-gray-500">Enter your 6 digits BSB number.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Account Number*</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name of Bank*</label>
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {transferOption === 'international' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SWIFT/Sort Code/Transit Number/Bank Code*
                </label>
                <input
                  type="text"
                  value={swiftCode}
                  onChange={(e) => setSwiftCode(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">IBAN</label>
                <input
                  type="text"
                  value={iban}
                  onChange={(e) => setIban(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your phone number in your home country
                </label>
                <input
                  type="text"
                  value={homePhoneNumber}
                  onChange={(e) => setHomePhoneNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  If not previously provided. Country code + area code (for landlines) + number
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your address in your home country
                </label>
                <input
                  type="text"
                  value={homeAddress}
                  onChange={(e) => setHomeAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="mt-1 text-xs text-gray-500">If not previously provided</p>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank Branch Address*
              </label>
              <textarea
                value={bankBranchAddress}
                onChange={(e) => setBankBranchAddress(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}
      </section>

      {/* Audit Protection Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Audit Protection Cover</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Audit Protection Cover (up to $5000 in accounting fees)
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                checked={auditProtection === true}
                onChange={() => setAuditProtection(true)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={auditProtection === false}
                onChange={() => setAuditProtection(false)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Additional fee applies. See &#39;Pricing&#39; for more details.
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How did you find us?
          </label>
          <select
            value={referralSource}
            onChange={(e) => setReferralSource(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select option</option>
            <option value="google">Google Search</option>
            <option value="referral">Referral</option>
            <option value="social">Social Media</option>
            <option value="other">Other</option>
          </select>
        </div>
      </section>

      {/* Device Selection Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Device Information</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Device being used when filling out the form:
          </label>
          <select
            value={deviceUsed}
            onChange={(e) => setDeviceUsed(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select device</option>
            <option value="desktop">Desktop</option>
            <option value="laptop">Laptop</option>
            <option value="tablet">Tablet</option>
            <option value="smartphone">Smartphone</option>
          </select>
        </div>
      </section>

      {/* Message to Tax Advisor Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Message to your tax advisor</h2>
        
        <textarea
          value={advisorMessage}
          onChange={(e) => setAdvisorMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded h-32"
          placeholder="Type your message here..."
        />
        <p className="text-sm text-gray-500 mt-2">Please include any other relevant information</p>
        <div className="flex space-x-2 mt-2">
          <button className="text-sm px-2 py-1 bg-gray-100 rounded">Cut</button>
          <button className="text-sm px-2 py-1 bg-gray-100 rounded">Copy</button>
          <button className="text-sm px-2 py-1 bg-gray-100 rounded">Delete</button>
          <button className="text-sm px-2 py-1 bg-gray-100 rounded">Insert</button>
          <button className="text-sm px-2 py-1 bg-gray-100 rounded">← Shrink</button>
          <button className="text-sm px-2 py-1 bg-gray-100 rounded">→ Grow</button>
        </div>
      </section>

      {/* Document Upload Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Additional Documents</h2>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="mb-2">Upload or drag files here.</p>
          <p className="text-sm text-gray-500">
            Alternatively email your documents directly to support@txdodgeonline.com.au
          </p>
        </div>
      </section>

      {/* Terms and Authorization Section */}
      <section className="mb-8 p-4 border border-gray-200 rounded-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">TERMS AND AUTHORISATION</h2>
        
        <div className="mb-6 text-sm space-y-4">
          <p>In submitting this online questionnaire:</p>
          <p>I confirm that the information is a true representation of my taxation summary and further permit Tax Lodge Online (Agent Number 26210646) to act as my registered tax agent and to confirm the validity of such information. I also authorise Tax Lodge Online to lodge my tax return or any future amendments electronically with the Australian Taxation Office based on the information provided by me.</p>
          <p>I authorise Tax Lodge Online to deposit any refund issued by ATO into its trust account (if applicable) for the purpose of applying the whole or a part of it in payment of any unpaid bills for Professional fees and disbursements that Tax Lodge Online have rendered to me in respect of the preparation of my income tax returns and any other work I have instructed them to perform. The balance of the refund is to be sent into my bank account.</p>
          <p>I hereby appoint Tax Lodge Online as my attorney-in-fact to act as my legal representative to carry out any act and sign any document on my behalf for all matters that I can perform with respect to my Australian income tax. This authority shall remain valid for twelve months from the date of appointment.</p>
        </div>
        
        <h2 className="text-xl font-bold text-gray-800 mb-4">TERMS OF CLIENT ENGAGEMENT</h2>
        
        <div className="mb-6 text-sm space-y-4">
          <p>This firm will provide accounting or/and taxation services which will be conducted in accordance with the relevant professional and ethical standards. The extent of our procedures will be limited exclusively for this purpose. As a result, no audit or review will be performed and accordingly, no assurance will be expressed. Our engagement cannot be relied upon to disclose irregularities including fraud, other illegal acts and errors that may exist. However, we will inform you of any such matters that come to our attention.</p>
          <p>Clients are responsible for the reliability, accuracy and completeness of the accounting records, particulars and information provided and disclosure of all material and relevant information. Clients are required to arrange for reasonable access by us to relevant individuals and documents and shall be responsible for both the completeness and accuracy of the information supplied to us. Any advice given to the Client is only an option based on our knowledge of the Client&#39;s particular circumstances.</p>
          <p>A taxpayer is responsible under self-assessment to keep full and proper records in order to facilitate the preparation of a correct return. Whilst the Commissioner of Taxation will accept claims made by a taxpayer in an income tax return and issue a notice of assessment, usually without adjustment, the return may be subject to later review. Under taxation law such a review may take place within a period of up to five years after tax becomes not paid payback under the assessment. Furthermore, where there is a fraud or evasion there is no time limit on amending the assessment. Accordingly, you should check the return before it is signed to ensure that the information in the return is accurate.</p>
          
          <p className="font-bold">Outsource:</p>
          <p>Acceptance of our services in conjunction with this engagement document indicates your acceptance of the use of outsourced services as described.</p>
          
          <p className="font-bold">Limitation of Liability:</p>
          <p>Our liability is limited by a scheme approved under Professional Standards Legislation.</p>
          
          <p className="font-bold">Ownership of Documents:</p>
          <p>All original documents obtained from the client arising from the engagement shall remain the property of the client. However, we reserve the right to make a reasonable number of copies of the original documents for our records.</p>
          <p>Our engagement will result in the production of income tax returns of financial statements. Ownership of these documents will vest in you. All other documents produced by us in respect of this engagement will remain the property of the firm.</p>
          <p>The firm has a policy of exploring a legal right of lien over any client documents in our possession in the event of a dispute. The firm has also established dispute resolution processes.</p>
          
          <p>Confirmation of Terms:</p>
          <p>Acceptance of our services in conjunction with this information brochure indicates that you understand and accept the arrangements. This information will be effective for future engagements unless we advise you of any change.</p>
        </div>
        
        <div className="mb-6 space-y-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms-authorization"
              checked={agreeTermsAuthorization}
              onChange={(e) => setAgreeTermsAuthorization(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="terms-authorization" className="text-sm text-gray-700">
              I have read, understood and agree to TERMS AND AUTHORIZATION
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms-engagement"
              checked={agreeTermsEngagement}
              onChange={(e) => setAgreeTermsEngagement(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="terms-engagement" className="text-sm text-gray-700">
              I have read, understood and agree to TERMS OF CLIENT ENGAGEMENT
            </label>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="price-agreement"
              checked={agreePrice}
              onChange={(e) => setAgreePrice(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="price-agreement" className="text-sm text-gray-700">
              I agree to the price
            </label>
          </div>
        </div>
        
        <div className="border-t border-b border-gray-200 py-4 mb-6">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="text-left py-1">Line Item</td>
                <td className="text-right py-1">$0.00</td>
              </tr>
              <tr>
                <td className="text-left py-1">Subtotal:</td>
                <td className="text-right py-1">$0.00</td>
              </tr>
            </tbody>
          </table>
          
          <div className="flex justify-between items-center mt-4 font-bold">
            <span>Amount Due:</span>
            <span className="text-lg">$0.00</span>
          </div>
        </div>
      </section>

      <div className="flex justify-between pt-6 border-t">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Back
        </button>
        <div>
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 mr-2"
          >
            Update
          </button>
          <button
            type="button"
            onClick={onNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}