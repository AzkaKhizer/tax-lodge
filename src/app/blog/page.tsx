import BreadcrumbBlogDetails from "../components/BCBlogs";
import TaxArticle from "../components/Blog1";
import TaxReturnSection from "../components/GetStarted";


import React from 'react'

const Blog = () => {
  return (
    <div className="mt-28">
        <BreadcrumbBlogDetails/>
        <TaxArticle/>
        <TaxReturnSection/>
    </div>
  )
}

export default Blog