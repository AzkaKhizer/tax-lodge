import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 2xl:p-16 mt-28 pb-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12 2xl:p-16 mt-20 md:mt-0 ">
        <h1 className="text-2xl md:text-4xl 2xl:text-6xl font-bold mb-6 text-gray-800 text-center md:text-left">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl  font-semibold mb-4 text-gray-800">Who we are</h2>
          <p className="text-gray-700">
            We are a Melbourne-based team of qualified accountants who provide both
            assisted online tax lodgment, in-person tax lodgment, and accounting services.
            Our commitment is to make the tax return lodgment process easy, convenient, and
            stress-free for individuals and businesses. We aim to establish an ongoing
            relationship of ease and trust with our clients, and we strive to provide
            excellent service for years to come.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl  font-semibold mb-4 text-gray-800">Comments</h2>
          <p className="text-gray-700">
            When visitors leave comments on the site, we collect the data shown in the
            comments form, and also the visitor’s IP address and browser user agent string
            to help spam detection.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl  font-semibold mb-4 text-gray-800">Media</h2>
          <p className="text-gray-700">
            If you upload images to the website, avoid uploading images with embedded
            location data (EXIF GPS). We can download and extract any location data from
            images on the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl  font-semibold mb-4 text-gray-800">Cookies</h2>
          <p className="text-gray-700">
            If you leave a message on our site, you may opt-in to saving your name, email
            address, and website in cookies. These are for your convenience, so you do not
            have to fill in your details again. These cookies will last for one year.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl  font-semibold mb-4 text-gray-800">Embedded content from other websites</h2>
          <p className="text-gray-700">
            Articles on this site may include embedded content (e.g. videos, images,
            articles, etc.). Embedded content from other websites behaves in the exact same
            way as if the visitor has visited the other website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl  font-semibold mb-4 text-gray-800">Who we share your data with</h2>
          <p className="text-gray-700">
            If you request a password reset and when it is available, your IP address will
            be included in the reset email.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl  font-semibold mb-4 text-gray-800">How long we retain your data</h2>
          <p className="text-gray-700">
            If you fill in the tax return or contact form, the information and its metadata
            are retained indefinitely. This is so we can recognize and approve any follow-up.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl  font-semibold mb-4 text-gray-800">What rights you have over your data</h2>
          <p className="text-gray-700">
            If you have an account on this site and when the service is available, or have
            submitted a filled form, you can request to receive an exported file of the
            personal data we hold about you, including any data you have provided to us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl  font-semibold mb-4 text-gray-800">Where your data is sent</h2>
          <p className="text-gray-700">
            Visitor-submitted data may be checked through an automated spam detection
            service.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
