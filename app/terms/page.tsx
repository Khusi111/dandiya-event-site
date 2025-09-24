"use client";

import { motion } from "framer-motion";

export default function TermsConditions() {
  return (
    <section className="py-16 px-6 bg-[#FFF8F0] text-[#333] min-h-screen">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#B21D00] text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Terms & Conditions
        </motion.h1>

        <motion.div
          className="space-y-6 text-[#555]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            By accessing this webpage, you are agreeing to be bound by these Terms and Conditions (“Terms”) in a legally binding agreement between us (“Merchant” or “us” or “we” or “our”) and the User (“you” or “your”). Please read these Terms carefully before accessing or using the Website. If you do not agree to the Terms, you may not access the Platform.
          </p>

          <p>
            We reserve the right to update and change the Terms and Conditions by posting updates and changes to the Platform. You are advised to check the Terms and Conditions from time to time for any updates or changes that may impact you. If at any point such amendments are not acceptable to you, we advise you to cease using the Platform at such time.
          </p>

          <h2 className="text-2xl font-bold text-[#B21D00]">Eligibility</h2>
          <p>
            You hereby represent and warrant that you have the right, power, and authority to agree to the Terms, to become a party to a legally binding agreement and to perform your obligations hereunder.
          </p>

          <h2 className="text-2xl font-bold text-[#B21D00]">Definitions</h2>
          <p>
            “Payment Instrument” includes credit card, debit card, bank account, prepaid payment instrument, Unified Payment Interface (UPI), Immediate Payment Service (IMPS) or any other methods of payments. “Platform” refers to the website or platform where the Merchant offers its products or services. “Transaction” shall refer to the order or request placed by the User with the Merchant to purchase the products and/or services listed on the Platform by paying the Transaction Amount to the Merchant; “Transaction Amount” shall mean the amount paid by the User in connection with a Transaction; and “User/Users”, means any person availing the products and/or services offered on the Platform.
          </p>

          <h2 className="text-2xl font-bold text-[#B21D00]">Merchant's Rights</h2>
          <p>
            You agree that we may collect, store, and share the information provided by you in order to deliver the products and/or services availed by you on our Platform and/or contact you in relation to the same.
          </p>

          <h2 className="text-2xl font-bold text-[#B21D00]">Your Responsibilities</h2>
          <p>
            You agree to provide us with true, complete and up-to-date information about yourself as may be required for completing the Transactions. This includes personal details such as name, email, phone number, delivery address, age, and gender, as well as accurate payment information.
          </p>

          <h2 className="text-2xl font-bold text-[#B21D00]">Prohibited Actions</h2>
          <p>
            You may not access or use the Platform for any purpose other than that for which we make the Platform available. Some prohibited actions include: unauthorized use, harassment, copying software, spreading viruses, and attempting to bypass security features.
          </p>

          <h2 className="text-2xl font-bold text-[#B21D00]">Limitation of Liability</h2>
          <p>
            The User agrees that the only recourse in case of defective products or services is the refund process. We disclaim any other liability.
          </p>

          <h2 className="text-2xl font-bold text-[#B21D00]">Governing Laws & Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of India. Any dispute shall be resolved by arbitration in Bengaluru as per the Arbitration and Conciliation Act, 1996.
          </p>

          <h2 className="text-2xl font-bold text-[#B21D00]">Grievance Redressal</h2>
          <p>
            You may reach out to us regarding complaints or questions about any products, services, or transactions.
          </p>

          <h2 className="text-2xl font-bold text-[#B21D00]">Disclaimer</h2>
          <p>
            By initiating a transaction, you are entering into a legally binding contract with us. All payments are undertaken at your own risk, and we disclaim liabilities for unauthorized use or system errors.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
