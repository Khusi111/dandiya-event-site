"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Key, Ticket, AlertCircle, CheckCircle, ArrowRight } from "lucide-react"

export default function ApplicantDiscountSection() {
  const [coupon, setCoupon] = useState("")
  const [discount, setDiscount] = useState(0)
  const [price, setPrice] = useState(299)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "DANDIYA10") {
      setDiscount(price * 0.1)
      setMessage("✅ Coupon applied! 10% off.")
    } else if (coupon.toUpperCase() === "FEST50") {
      setDiscount(50)
      setMessage("✅ Coupon applied! ₹50 off.")
    } else if (coupon.toUpperCase() === "EARLYBIRD50") {
      setDiscount(price * 0.5)
      setMessage("✅ Coupon applied! 50% off.")
    } else {
      setDiscount(0)
      setMessage("⚠️ Invalid coupon code!")
    }
  }

  const handleRegister = () => {
    if (!name || !email || !phone) {
      setMessage("⚠️ Please fill all fields!")
      return
    }
    setMessage(`✅ Success! Your final price is ₹${price - discount}`)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[#B21D00]/5 to-[#B21D00]/10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-0">
          <div className="p-6 sm:p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-12 sm:mb-16 md:mb-16 text-[#B21D00] tracking-tight text-center">
              Exclusive Offers & Affiliates
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-12 items-center">
              {/* Left side - Logo */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] aspect-square flex items-center justify-center">
                  <img
                    src="/Sponsors.webp"
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right side - Coupon Form */}
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-br from-[#B21D00]/5 to-[#B21D00]/10 rounded-3xl p-6 sm:p-8">
  <div className="flex items-center gap-3">
    <div className="p-2 bg-orange-100 rounded-xl">
      <ArrowRight className="w-6 h-6 text-orange-600" />
    </div>
    <p className="text-[#B21D00] font-bold text-base sm:text-lg">Hurry! Limited Offers</p>
  </div>
</div>


                {/* Input Fields */}
                <div className="space-y-4">
                  {[
                    { placeholder: "Name", value: name, onChange: setName, type: "text" },
                    { placeholder: "Email", value: email, onChange: setEmail, type: "email" },
                    { placeholder: "Contact Number", value: phone, onChange: setPhone, type: "tel" },
                  ].map((field, idx) => (
                    <input
                      key={idx}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full p-3 sm:p-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 focus:ring-2 focus:ring-[#B21D00] focus:border-[#B21D00] transition-all font-medium text-base sm:text-lg"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  ))}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Enter Coupon Code"
                      className="flex-1 p-3 sm:p-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 focus:ring-2 focus:ring-[#B21D00] focus:border-[#B21D00] transition-all font-medium text-base sm:text-lg"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                    />
                    <Button
                      className="bg-[#B21D00] text-white font-bold px-6 py-3 sm:py-4 rounded-2xl hover:bg-[#8a1500] transition-all duration-300 hover:scale-105"
                      onClick={applyCoupon}
                    >
                      Apply
                    </Button>
                  </div>
                </div>

                {/* Action Button & Message */}
                <div className="text-center space-y-4">
                  <Button
                    className="w-full bg-[#B21D00] text-white font-bold py-4 px-6 sm:px-8 rounded-2xl text-lg sm:text-xl hover:bg-[#8a1500] transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                    onClick={handleRegister}
                  >
                    <Ticket className="w-5 h-5 sm:w-6 sm:h-6" />
                    Grab Your Discounted Pass Now
                  </Button>

                  {message && (
                    <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-md">
                      <p className="font-semibold flex items-center gap-2 sm:gap-3 justify-center text-base sm:text-lg">
                        {message.includes("⚠️") ? (
                          <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                        ) : (
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#B21D00]" />
                        )}
                        <span className={message.includes("⚠️") ? "text-orange-600" : "text-[#B21D00]"}>
                          {message.replace("⚠️ ", "").replace("✅ ", "")}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
