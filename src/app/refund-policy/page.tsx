import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 2xl:p-16 mt-28 pb-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12 2xl:p-16 mt-20 md:mt-0 ">
        <h1 className="text-2xl md:text-4xl 2xl:text-6xl font-bold mb-6 text-center md:text-left text-gray-800">Refund Policy</h1>

        <section className="mb-8">
          <p className="text-gray-700">
            We want you to be completely satisfied with our tax return preparation services. If you are not satisfied with our services for any reason, we offer a refund under the following conditions:
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold mb-4 text-gray-800">Non-Lodgement</h2>
          <p className="text-gray-700">
            If we fail to lodge your tax return due to our error or omission, we will refund your preparation fee in full.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold mb-4 text-gray-800">Dissatisfaction</h2>
          <p className="text-gray-700">
            If you are dissatisfied with our tax return preparation services for any other reason, please contact us within 30 days of the completion of your tax return. We will review your concerns and, at our discretion, offer a refund or credit towards future services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold mb-4 text-gray-800">Limitations</h2>
          <p className="text-gray-700">
            Please note that we are not responsible for any errors or omissions resulting from incorrect or incomplete information provided by you. In addition, we are not responsible for any penalties or interest resulting from late payment or non-payment of taxes by you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold mb-4 text-gray-800">Requesting a Refund</h2>
          <p className="text-gray-700">
            To request a refund, please contact us at <a href="mailto:support@taxlodgeonline.com.au" className="text-blue-500 underline">support@taxlodgeonline.com.au</a>. We reserve the right to request additional information to verify your eligibility for a refund.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold mb-4 text-gray-800">Changes to this Refund Policy</h2>
          <p className="text-gray-700">
            We reserve the right to modify this refund policy at any time without prior notice. Any changes to this policy will be posted on our website and will be effective immediately upon posting.
          </p>
        </section>

        <section className="mb-8">
          <p className="text-gray-700">
            Thank you for choosing our tax return preparation services. If you have any questions or concerns about our refund policy, please contact us at <a href="mailto:support@taxlodgeonline.com.au" className="text-blue-500 underline">support@taxlodgeonline.com.au</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
