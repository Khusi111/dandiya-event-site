"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="py-16 px-4 bg-[#FFF8F0] text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2 text-[#B21D00]">
            <Phone className="h-8 w-8 text-[#B21D00]" /> Contact & Support
          </h2>
          <p className="text-xl text-gray-700">Need help? We're here for you!</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border border-[#B21D00]/40 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 text-center">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-[#B21D00] mx-auto mb-4" />
                <h3 className="font-semibold mb-4 text-[#B21D00]">WhatsApp Support</h3>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#B21D00] hover:bg-[#991400] text-white">
                    Chat with Us
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border border-[#B21D00]/40 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 text-center">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-[#B21D00] mx-auto mb-4" />
                <h3 className="font-semibold mb-4 text-[#B21D00]">Call Us</h3>
                <Button className="bg-[#B21D00] hover:bg-[#991400] text-white">
                  +91 9876543210
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border border-[#B21D00]/40 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 text-center">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-[#B21D00] mx-auto mb-4" />
                <h3 className="font-semibold mb-4 text-[#B21D00]">Location</h3>
                <a
                  href="https://www.google.com/maps?q=Kalinga+Stadium+Grounds+Bhubaneswar+Odisha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#B21D00] hover:bg-[#991400] text-white">
                    View on Map
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
