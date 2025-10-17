import React from "react";

const Faq = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-red-400 mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6 text-gray-700">
        <div>
          <h3 className="font-semibold text-lg">What is your return policy?</h3>
          <p>We accept returns within 30 days of purchase. Items must be unused and in original packaging.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Do you offer international shipping?</h3>
          <p>Yes, we ship worldwide. Shipping fees and delivery times vary by location.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">How can I track my order?</h3>
          <p>Once your order ships, you'll receive a tracking link via email.</p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
