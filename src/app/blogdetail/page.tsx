import BreadcrumbBlog from "../components/BCBlogDetails";
import BlogPg from "../components/BlogDetails";
import TaxReturnSection from "../components/GetStarted";

import React from 'react'

const blogdetails = () => {
  return (
    <div className="mt-28 mx-auto overflow-x-hidden w-full">
        <BreadcrumbBlog/>
        <BlogPg/>
        <TaxReturnSection/>
    </div>
  )
}

export default blogdetails