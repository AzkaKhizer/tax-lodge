import BreadcrumbBusiness from '../components/BCBusinessTax';
import Business from '../components/Businesstax'
import BusinessTaxSection from '../components/Businesstaxsection';
import TaxLodgeProcess from '../components/taxlodge';
import TaxRefundSection from '../components/TaxPic';


import React from 'react'

const BusinessTax = () => {
  return (
    <div className="mt-28 mx-auto overflow-x-hidden w-full">
      <BreadcrumbBusiness/>
      <div className=" flex justify-center items-center text-center mt-10">
        <h1 className="text-[32px] md:text-[44px] font-semibold  mb-6 w-[731px] ">Lodge Your Online Tax Return with assistance of a Tax Accountant</h1>
        </div>

      <Business/>
      <BusinessTaxSection/>
      <TaxLodgeProcess/>
      <TaxRefundSection/>
    </div>
  )
}

export default BusinessTax