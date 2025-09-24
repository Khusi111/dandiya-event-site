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
    <section className="py-20 px-6 bg-gradient-to-br from-[#B21D00]/5 to-[#B21D00]/10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-0">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-[#B21D00] tracking-tight">
              Exclusive Offers & Affiliates
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Logo */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img src="/logo.webp" alt="Logo" className="h-48 md:h-64 lg:h-72 object-contain" />
                </div>
              </div>

              {/* Right side - Enhanced coupon form */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-[#B21D00]/5 to-[#B21D00]/10 rounded-3xl p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#B21D00]/10 rounded-xl">
                        <Key className="w-6 h-6 text-[#B21D00]" />
                      </div>
                      <div>
                        <p className="font-bold text-xl text-[#B21D00]">
                          Use Code: <span className="font-black">EARLYBIRD50</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-xl">
                        <Ticket className="w-6 h-6 text-green-600" />
                      </div>
                      <p className="text-gray-700 font-semibold text-lg">Get 50% OFF till 30th Sept</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-xl">
                        <ArrowRight className="w-6 h-6 text-orange-600" />
                      </div>
                      <p className="text-[#B21D00] font-bold text-lg">Hurry! Limited Passes</p>
                    </div>
                  </div>
                </div>

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
                      className="w-full p-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 focus:ring-2 focus:ring-[#B21D00] focus:border-[#B21D00] transition-all font-medium text-lg"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  ))}

                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Enter Coupon Code"
                      className="flex-1 p-4 rounded-2xl border-2 border-gray-200 bg-white text-gray-800 focus:ring-2 focus:ring-[#B21D00] focus:border-[#B21D00] transition-all font-medium text-lg"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                    />
                    <Button
                      className="bg-[#B21D00] text-white font-bold px-6 py-4 rounded-2xl hover:bg-[#8a1500] transition-all duration-300 hover:scale-105"
                      onClick={applyCoupon}
                    >
                      Apply
                    </Button>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <Button
                    className="w-full bg-[#B21D00] text-white font-bold py-4 px-8 rounded-2xl text-xl hover:bg-[#8a1500] transition-all duration-300 hover:scale-105 shadow-lg"
                    onClick={handleRegister}
                  >
                    <Ticket className="w-6 h-6 mr-3" />
                    Grab Your Discounted Pass Now
                  </Button>

                  {message && (
                    <div className="bg-white rounded-2xl p-4 shadow-md">
                      <p className="font-semibold flex items-center gap-3 justify-center text-lg">
                        {message.includes("⚠️") ? (
                          <AlertCircle className="w-6 h-6 text-orange-500" />
                        ) : (
                          <CheckCircle className="w-6 h-6 text-[#B21D00]" />
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
