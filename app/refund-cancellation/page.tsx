"use client";

import { motion } from "framer-motion";

export default function RefundPolicy() {
  return (
    <section className="py-16 px-6 bg-[#FFF8F0] text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#B21D00] text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Refund & Cancellation Policy
        </motion.h1>

        {/* Content */}
        <motion.div
          className="space-y-6 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Upon completing a Transaction, you are entering into a legally binding and enforceable agreement with us to purchase the product and/or service. After this point, the User may cancel the Transaction unless it has been specifically provided for on the Platform. In such cases, the cancellation will be subject to the terms mentioned on the Platform.
          </p>

          <p>
            We retain the discretion in approving any cancellation requests and may ask for additional details before approval. Once you have received the product and/or service, the only event where you can request a replacement, return, or refund is if the product and/or service does not match the description on the Platform.
          </p>

          <p>
            Any request for a refund must be submitted within three days from the date of the Transaction, or such number of days prescribed on the Platform, which shall in no event be less than three days. A User may submit a claim for a refund by raising a ticket here or contacting us at <a href="mailto:seller+5cacdb3b44024ba6b71128eb55c2d79d@instamojo.com" className="text-[#B21D00] underline">seller+5cacdb3b44024ba6b71128eb55c2d79d@instamojo.com</a> with a clear and specific reason for the refund request, including any proof if required.
          </p>

          <p>
            Whether a refund will be provided will be determined by us, and we may ask for additional details before approving any requests.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
