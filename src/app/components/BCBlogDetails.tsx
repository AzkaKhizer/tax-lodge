import Link from "next/link";

const BreadcrumbBlogDetails = () => {
  return (
    <div className="bg-[#F2F2F2] py-6 px-4 pb-14 pt-20 md:pt-8  mx-auto overflow-x-hidden">
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center">
        <h1 className=" text-[40px] md:text-[64px] font-bold">Our Blog Details</h1>
        <nav className="mt-2 ">
          <ul className="flex items-center space-x-2 text-gray-600">
            <li>
              <Link href="/" className="font-semibold text-black hover:underline">
                Home
              </Link>
            </li>
            <li>&gt;</li>
            <li className="text-black">Our Blog Details</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BreadcrumbBlogDetails;
