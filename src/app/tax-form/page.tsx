"use client";

import { useState } from 'react';
import IncomeSection from '../components/IncomeSection';


interface EmploymentDetail {
  employer: string;
  income: string;
  taxWithheld: string;
}

interface TaxFormData {
  taxYear: string;
  originalReturn: string;
  amendDetails: string;
  confirmLeave: boolean;
  leaveDate: string;
  clientType: string;
  firstName: string;
  lastName: string;
  dob: string;
  tfn: string;
  email: string;
  maritalStatus: string;
  spouseName: string;
  spouseDob: string;
  dependents: string;
  childrenDetails: string;
  citizenship: string;
  mobile: string;
  spouseIncome: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  taxResident: string;
  passportCountry: string;
  visaType: string;
  visaChanged: string;
  visaDetails: string;
  arrivalDate: string;
  leftAustralia: string;
  leaveDetails: string;
  residencyStatus: string;
  residencyTest: string;
  prApplied: string;
  prDate: string;
  postalSame: string;
  postalAddressLine1: string;
  postalAddressLine2: string;
  postalCity: string;
  postalState: string;
  postalCountry: string;
  futureLodgement: string;
  employmentIncome: string;
  employmentDetails: EmploymentDetail[];
  businessIncome: string;
  businessExpenses: string;
  rentalIncome: string;
  rentalExpenses: string;
  investmentIncome: string;
  foreignIncome: string;
  otherIncome: string;
  otherIncomeDetails: string;
  workRelatedExpenses: string;
  selfEducationExpenses: string;
  charitableDonations: string;
  taxAgentFees: string;
  otherDeductions: string;
  otherDeductionsDetails: string;
}

export default function TaxLodgeForm() {
  const [activeSection, setActiveSection] = useState<'personal' | 'income' | 'deductions'>('personal');
  const [idFile, setIdFile] = useState<File | null>(null);
  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<TaxFormData>({
    taxYear: '',
    originalReturn: '',
    amendDetails: '',
    confirmLeave: false,
    leaveDate: '',
    clientType: '',
    firstName: '',
    lastName: '',
    dob: '',
    tfn: '',
    email: '',
    maritalStatus: '',
    spouseName: '',
    spouseDob: '',
    dependents: '',
    childrenDetails: '',
    citizenship: '',
    mobile: '',
    spouseIncome: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    taxResident: '',
    passportCountry: '',
    visaType: '',
    visaChanged: '',
    visaDetails: '',
    arrivalDate: '',
    leftAustralia: '',
    leaveDetails: '',
    residencyStatus: '',
    residencyTest: '',
    prApplied: '',
    prDate: '',
    postalSame: "true",
    postalAddressLine1: '',
    postalAddressLine2: '',
    postalCity: '',
    postalState: '',
    postalCountry: '',
    futureLodgement: '',
    employmentIncome: '',
    employmentDetails: [],
    businessIncome: '',
    businessExpenses: '',
    rentalIncome: '',
    rentalExpenses: '',
    investmentIncome: '',
    foreignIncome: '',
    otherIncome: '',
    otherIncomeDetails: '',
    workRelatedExpenses: '',
    selfEducationExpenses: '',
    charitableDonations: '',
    taxAgentFees: '',
    otherDeductions: '',
    otherDeductionsDetails: ''
  });

 

  
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: e.target instanceof HTMLInputElement && type === 'checkbox' ? e.target.checked : 
              type === 'number' ? Number(value) : 
              value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md pt-48 pb-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Tax Lodge Online Form</h1>
      
      {/* Progress Navigation */}
      <div className="flex mb-8 border-b">
        <button 
          onClick={() => setActiveSection('personal')}
          className={`px-4 py-2 font-medium ${activeSection === 'personal' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Personal Info
        </button>
        <button 
          onClick={() => setActiveSection('income')}
          className={`px-4 py-2 font-medium ${activeSection === 'income' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Income
        </button>
        <button 
          onClick={() => setActiveSection('deductions')}
          className={`px-4 py-2 font-medium ${activeSection === 'deductions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          Deductions
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Personal Info Section */}
        {activeSection === 'personal' && (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Info</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tax Year*</label>
                <select 
                  name="taxYear" 
                  value={formData.taxYear}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Tax Year</option>
                  <option value="2022-2023">2022-2023</option>
                  <option value="2021-2022">2021-2022</option>
                  <option value="2020-2021">2020-2021</option>
                </select>
              </div>

               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Original tax return? *</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="originalReturn" 
                      value="yes" 
                      checked={formData.originalReturn === 'yes'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="originalReturn" 
                      value="no" 
                      checked={formData.originalReturn === 'no'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">No, I want to amend (fix) my tax return</span>
                  </label>
                </div>
              </div>

              {formData.originalReturn === 'no' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Do you know what needs to be amended? Leave it blank if you are not sure.
                  </label>
                  <textarea
                    name="amendDetails"
                    value={formData.amendDetails}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    For tax reviews and amendments, we may ask you to pay our service fee upfront.
                  </p>
                </div>
              )}

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="confirmLeave"
                    name="confirmLeave"
                    type="checkbox"
                    checked={formData.confirmLeave}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="confirmLeave" className="font-medium text-gray-700">
                    I Confirm
                  </label>
                  <p className="text-gray-500">I am leaving (have left) Australia and will no longer derive Australian-sourced income.</p>
                </div>
              </div>

              {formData.confirmLeave && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date left or will leave Australia: *</label>
                  <input
                    type="date"
                    name="leaveDate"
                    value={formData.leaveDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">I am: *</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="clientType" 
                      value="new" 
                      checked={formData.clientType === 'new'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-700">New Client</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="clientType" 
                      value="existing" 
                      checked={formData.clientType === 'existing'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Existing Client</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name: *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth: *</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tax File Number: *</label>
                  <input
                    type="text"
                    name="tfn"
                    value={formData.tfn}
                    onChange={handleChange}
                    placeholder="Insert your 9 digit TFN without space"
                    pattern="\d{9}"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email: *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Marital status in this tax year: *</label>
                <select 
                  name="maritalStatus" 
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="separated">Separated</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>

              {formData.maritalStatus === 'married' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your spouse&#39;s Name: *</label>
                      <input
                        type="text"
                        name="spouseName"
                        value={formData.spouseName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your spouse&#39;s DOB: *</label>
                      <input
                        type="date"
                        name="spouseDob"
                        value={formData.spouseDob}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your spouse&#39;s taxable income: *</label>
                    <input
                      type="text"
                      name="spouseIncome"
                      value={formData.spouseIncome}
                      onChange={handleChange}
                      placeholder="Actual or estimated"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of dependents: *</label>
                <input
                  type="number"
                  name="dependents"
                  value={formData.dependents}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {Number(formData.dependents) > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Children&#39;s names and their DOB</label>
                  <textarea
                    name="childrenDetails"
                    value={formData.childrenDetails}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Citizenship/Residency: *</label>
                <input
                  type="text"
                  name="citizenship"
                  value={formData.citizenship}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number: *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Insert your 10 digit Mobile Number without space"
                  pattern="\d{10}"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your residential address*</label>
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  placeholder="Address Line 1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-2"
                  required
                />
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                  placeholder="Address Line 2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State / Province / Region"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      placeholder="Postal / Zip Code"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Country"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Were you a resident for tax purpose?</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="taxResident" 
                      value="yes" 
                      checked={formData.taxResident === 'yes'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="taxResident" 
                      value="no" 
                      checked={formData.taxResident === 'no'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Passport Country:</label>
                <input
                  type="text"
                  name="passportCountry"
                  value={formData.passportCountry}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Visa Type</label>
                <select 
                  name="visaType" 
                  value={formData.visaType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Visa Type</option>
                  <option value="student">Student Visa</option>
                  <option value="work">Work Visa</option>
                  <option value="tourist">Tourist Visa</option>
                  <option value="pr">Permanent Residency</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Did your visa change during the tax year?</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="visaChanged" 
                      value="yes" 
                      checked={formData.visaChanged === 'yes'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="visaChanged" 
                      value="no" 
                      checked={formData.visaChanged === 'no'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">No</span>
                  </label>
                </div>
              </div>

              {formData.visaChanged === 'yes' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Please provide details</label>
                  <textarea
                    name="visaDetails"
                    value={formData.visaDetails}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date arrived in Australia:</label>
                  <input
                    type="date"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date left or will leave Australia:</label>
                  <input
                    type="date"
                    name="leaveDate"
                    value={formData.leaveDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Did you leave Australia during the tax year?</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="leftAustralia" 
                      value="yes" 
                      checked={formData.leftAustralia === 'yes'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="leftAustralia" 
                      value="no" 
                      checked={formData.leftAustralia === 'no'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">No</span>
                  </label>
                </div>
              </div>

              {formData.leftAustralia === 'yes' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Please give details of your leave.</label>
                  <textarea
                    name="leaveDetails"
                    value={formData.leaveDetails}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your &#39;Tax Residency&#39; status</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="residencyStatus" 
                      value="resident" 
                      checked={formData.residencyStatus === 'resident'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">An Australian resident for tax purposes</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="residencyStatus" 
                      value="foreign" 
                      checked={formData.residencyStatus === 'foreign'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">A foreign resident for tax purposes</span>
                  </label>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Foreign residents for tax purposes are taxed at a higher rate, and are not eligible for the tax-free threshold or tax offsets. 
                  <a href="#" className="text-blue-600 hover:underline"> Work out your tax residency.</a>
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Which tax residency test you can pass?</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="residencyTest" 
                      value="resides" 
                      checked={formData.residencyTest === 'resides'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      I am able to show that my living and working arrangements were consistent with making Australia my home - the resides test.
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="residencyTest" 
                      value="183day" 
                      checked={formData.residencyTest === '183day'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      I lived in Australia for more than 183 days in this tax year and can prove that I intend to remain in Australia long-term or permanently, or don&#39;t usually live outside of Australia - the 183 day test.
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="residencyTest" 
                      value="both" 
                      checked={formData.residencyTest === 'both'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Both the resides and the 183 day tests</span>
                  </label>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  <a href="#" className="text-blue-600 hover:underline">See the resident test and the 183 day test</a> and study factors ATO considers when determining your residency status for tax purposes.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Please upload a photo ID (e.g. driver license)</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="id-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                      >
                        <span>Upload a file</span>
                        <input 
                          id="id-upload" 
                          name="id-upload" 
                          type="file" 
                          className="sr-only"
                          onChange={(e) => handleFileChange(e, setIdFile)}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                  </div>
                </div>
                {idFile && (
                  <p className="mt-1 text-sm text-gray-600">{idFile.name}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Alternatively email your document directly to support@taxlodgeonline.com.au
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Please upload the photo page of your Passport</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="passport-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                      >
                        <span>Upload a file</span>
                        <input 
                          id="passport-upload" 
                          name="passport-upload" 
                          type="file" 
                          className="sr-only"
                          onChange={(e) => handleFileChange(e, setPassportFile)}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                  </div>
                </div>
                {passportFile && (
                  <p className="mt-1 text-sm text-gray-600">{passportFile.name}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Alternatively email your document directly to support@taxlodgeonline.com.au
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Have you applied for Australian Permanent Residency?</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="prApplied" 
                      value="yes" 
                      checked={formData.prApplied === 'yes'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="prApplied" 
                      value="no" 
                      checked={formData.prApplied === 'no'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">No</span>
                  </label>
                </div>
              </div>

              {formData.prApplied === 'yes' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">The date your PR application was lodged:</label>
                  <input
                    type="date"
                    name="prDate"
                    value={formData.prDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your postal address:</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="postalSame" 
                      value="true" 
                      checked={formData.postalSame === 'true'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">As Above</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="postalSame" 
                      value="false" 
                      checked={formData.postalSame === 'false'}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Other</span>
                  </label>
                </div>
              </div>

              {formData.postalSame === 'false' && (
                <div>
                  <input
                    type="text"
                    name="postalAddressLine1"
                    value={formData.postalAddressLine1}
                    onChange={handleChange}
                    placeholder="Address Line 1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-2"
                  />
                  <input
                    type="text"
                    name="postalAddressLine2"
                    value={formData.postalAddressLine2}
                    onChange={handleChange}
                    placeholder="Address Line 2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                      <input
                        type="text"
                        name="postalCity"
                        value={formData.postalCity}
                        onChange={handleChange}
                        placeholder="City"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="postalState"
                        value={formData.postalState}
                        onChange={handleChange}
                        placeholder="State / Province / Region"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder="Postal / Zip Code"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="postalCountry"
                        value={formData.postalCountry}
                        onChange={handleChange}
                        placeholder="Country"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Will you need to lodge a tax return in future?</label>
                <select 
                  name="futureLodgement" 
                  value={formData.futureLodgement}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unsure">Not sure</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between pt-6">
              <button
                type="button"
                disabled
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md cursor-not-allowed"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => setActiveSection('income')}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Next
              </button>
            </div>
          </div>
        )}
        

      
        {activeSection === 'income' && (
          <IncomeSection 
            onNext={() => setActiveSection('deductions')}
            onBack={() => setActiveSection('personal')}
            
          />
        )}
       
         
        
        
        

        {/* Deductions Section */}
        {activeSection === 'deductions' && (
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">Deductions Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work-Related Expenses: *</label>
                <input
                  type="number"
                  name="workRelatedExpenses"
                  value={formData.workRelatedExpenses}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
<div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Self-Education Expenses:</label>
                <input
                  type="number"
                  name="selfEducationExpenses"
                  value={formData.selfEducationExpenses}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Charitable Donations:</label>
                <input
                  type="number"
                  name="charitableDonations"
                  value={formData.charitableDonations}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tax Agent Fees:</label>
                <input
                  type="number"
                  name="taxAgentFees"
                  value={formData.taxAgentFees}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Other Deductions:</label>
                <input
                  type="number"
                  name="otherDeductions"
                  value={formData.otherDeductions}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {Number(formData.otherDeductions) > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Other Deductions Details:</label>
                  <textarea
                    name="otherDeductionsDetails"
                    value={formData.otherDeductionsDetails}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}
      

            </div>

            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={() => setActiveSection('income')}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Previous
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}