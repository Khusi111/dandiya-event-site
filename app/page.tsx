"use client"
import { Phone, MessageCircle, } from "lucide-react";
import { motion } from "framer-motion"
import { Ticket, CheckCircle, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import ApplicantDiscountSection from "@/components/ApplicantDiscountSection"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Music, Users, Utensils, Trophy, Clock } from "lucide-react"

export default function DandiyaNightLanding() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLButtonElement>("[data-scroll-to]")
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-scroll-to")
        const targetEl = document.getElementById(targetId!)
        if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" })
      })
    })

    const updateCountdown = () => {
  // Change the date to October 1, 2025, 18:30
  const targetDate = new Date("2025-10-01T18:30:00").getTime()
  const now = new Date().getTime()
  const difference = targetDate - now

  if (difference > 0) {
    setTimeLeft({
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    })
  }
}


    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Hero Section */}
      <header className="relative" id="hero">
        <div
          className="h-[80vh] md:h-[85vh] bg-cover bg-center flex items-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(178,29,0,0.15), rgba(178,29,0,0.25)), url('/vibrant-dandiya-garba-dancers-celebration-festival.jpg')",
          }}
        >
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-4xl text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                  The Biggest Dandiya Night in Bhubaneswar
                </h1>
                <p className="text-xl sm:text-2xl opacity-95 font-medium">
                  3 Nights of Dance, Music & Culture · Sept 29 – Oct 1, 2025
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
                  <Button
                    className="bg-gradient-to-r from-[#B21D00] to-[#8a1500] text-white px-8 py-4 rounded-2xl shadow-xl font-bold text-lg hover:scale-105 transform transition-all duration-300"
                    data-scroll-to="tickets"
                  >
                    Book You Pass Now
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white/20 text-white px-6 py-4 rounded-2xl border-2 border-white/40 hover:bg-white/30 transition-all duration-300 font-semibold text-lg backdrop-blur-sm"
                    data-scroll-to="tickets"
                  >
                    View Tickets
                  </Button>
                </div>

                <div className="inline-flex items-center gap-6 bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{timeLeft.days}</div>
                    <div className="text-sm opacity-90 font-medium">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{timeLeft.hours}</div>
                    <div className="text-sm opacity-90 font-medium">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-sm opacity-90 font-medium">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-sm opacity-90 font-medium">Seconds</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="fixed left-0 right-0 top-4 z-40 flex justify-end px-6">
          <Button
            className="bg-[#B21D00] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#8a1500] transition-all duration-300"
            data-scroll-to="tickets"
          >
            Book Now
          </Button>
        </div>
      </header>


      <main className="-mt-16">
        <section className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 relative z-10 border border-white/20 container mx-auto px-4 sm:px-6 lg:px-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
    <div className="flex items-start gap-3 sm:gap-4 group">
      <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">🎶</div>
      <div>
        <div className="font-bold text-base sm:text-lg text-[#B21D00] mb-1">Live DJ & Garba</div>
        <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Groove to live DJ sets and traditional dandiya.
        </div>
      </div>
    </div>

    <div className="flex items-start gap-3 sm:gap-4 group">
      <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">🌟</div>
      <div>
        <div className="font-bold text-base sm:text-lg text-[#B21D00] mb-1">Celebrity Guests</div>
        <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Special performances and guest appearances.
        </div>
      </div>
    </div>

    <div className="flex items-start gap-3 sm:gap-4 group">
      <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">🍴</div>
      <div>
        <div className="font-bold text-base sm:text-lg text-[#B21D00] mb-1">Food & Drinks</div>
        <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Local food stalls and drinks available.
        </div>
      </div>
    </div>

    <div className="flex items-start gap-3 sm:gap-4 group">
      <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">💃</div>
      <div>
        <div className="font-bold text-base sm:text-lg text-[#B21D00] mb-1">3 Nights</div>
        <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Three nights of non-stop celebration.
        </div>
      </div>
    </div>
  </div>
</section>


        <section
  id="tickets"
  className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-[#FFF8F0] to-white"
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-20">
    <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-16 text-[#B21D00] tracking-tight text-center">
          Ticket & Offers
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium">
          Choose your perfect pass
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
        {/* Event Pass - Early Bird */}
        <motion.div
          className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group border-0 overflow-visible"
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <Badge className="bg-gradient-to-r from-[#B21D00] to-[#8a1500] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-black text-sm sm:text-base shadow-xl">
              Early Bird
            </Badge>
          </div>

          <div className="p-6 sm:p-10 pt-16 h-full flex flex-col">
            <div className="flex-1 space-y-6 sm:space-y-8">
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#B21D00]">
                  Event Pass
                </h3>
                <p className="text-gray-600 font-semibold text-sm sm:text-lg">
                  Valid till October 1st
                </p>
              </div>

              <div className="text-center space-y-2 sm:space-y-3">
                <div className="flex items-center justify-center gap-2 sm:gap-4">
                  <span className="line-through text-gray-400 text-lg sm:text-2xl font-semibold">
                    ₹1499
                  </span>
                  <span className="text-3xl sm:text-5xl font-black text-[#B21D00]">
                    ₹1299
                  </span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-4">
                {[
                  "For 1 Person",
                  "Unlimited Food",
                  "Live DJ",
                  "Dreamy Ambience",
                  "Live Games And Prizes",
                  "Open Area Dandiya",
                  "Dandiya Sticks Included",
                  "Photography",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#B21D00] flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-10">
              <a
  href="https://ringsandknotss.myinstamojo.com/product/dandiya-night-event-pass/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="w-full bg-gradient-to-r from-[#B21D00] to-[#8a1500] hover:from-[#8a1500] hover:to-[#B21D00] text-white font-black py-4 sm:py-5 rounded-2xl transition-all duration-300 hover:scale-105 text-lg sm:text-xl shadow-xl">
    Get Event Pass
  </Button>
</a>

            </div>
          </div>
        </motion.div>

        {/* Couple Pass */}
        <motion.div
          className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group border-0 overflow-visible"
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 sm:p-10 h-full flex flex-col">
            <div className="flex-1 space-y-6 sm:space-y-8">
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#B21D00]">
                  Couple Pass
                </h3>
                <p className="text-gray-600 font-semibold text-sm sm:text-lg">
                  Perfect for two
                </p>
              </div>

              <div className="text-center space-y-2 sm:space-y-3">
                <div className="flex items-center justify-center gap-2 sm:gap-4">
                  <span className="line-through text-gray-400 text-lg sm:text-2xl font-semibold">
                    ₹2799
                  </span>
                  <span className="text-3xl sm:text-5xl font-black text-[#B21D00]">
                    ₹2399
                  </span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-4">
                {[
                  "For Couple",
                  "Unlimited Food",
                  "Live DJ",
                  "Dreamy Ambience",
                  "Live Games And Prizes",
                  "Open Area Dandiya",
                  "Dandiya Sticks Included",
                  "Photography",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#B21D00] flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-10">
              <a
  href="https://ringsandknotss.myinstamojo.com/product/dandiya-night-couple-pass/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="w-full bg-gradient-to-r from-[#B21D00] to-[#8a1500] hover:from-[#8a1500] hover:to-[#B21D00] text-white font-black py-4 sm:py-5 rounded-2xl transition-all duration-300 hover:scale-105 text-lg sm:text-xl shadow-xl">
    Get Couple Pass
  </Button>
</a>

            </div>
          </div>
        </motion.div>

        {/* VIP Pass - Best Value */}
        <motion.div
          className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group border-0 overflow-visible"
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <Badge className="bg-gradient-to-r from-[#B21D00] to-[#8a1500] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-black text-sm sm:text-base shadow-xl">
              Best Value
            </Badge>
          </div>

          <div className="p-6 sm:p-10 pt-16 h-full flex flex-col">
            <div className="flex-1 space-y-6 sm:space-y-8">
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#B21D00]">
                  VIP Pass
                </h3>
                <p className="text-gray-600 font-semibold text-sm sm:text-lg">
                  6 People - Special Discount
                </p>
              </div>

              <div className="text-center space-y-2 sm:space-y-3">
                <div className="flex items-center justify-center gap-2 sm:gap-4">
                  <span className="line-through text-gray-400 text-lg sm:text-2xl font-semibold">
                    ₹15999
                  </span>
                  <span className="text-3xl sm:text-5xl font-black text-[#B21D00]">
                    ₹13999
                  </span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-4">
                {[
                  "Entry For 6 People",
                  "Unlimited Food",
                  "Live DJ",
                  "Dreamy Ambience",
                  "Live Games And Prizes",
                  "Open Area Dandiya",
                  "Dandiya Sticks Included",
                  "Photography",
                  "Exclusive Lounge Seating",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#B21D00] flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-10">
              <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSeMsY8urc-kDVtejvsFoINtgGkp-4n3kN--ERPv-4OUjJG9Wg/viewform?usp=header"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="w-full bg-gradient-to-r from-[#B21D00] to-[#8a1500] hover:from-[#8a1500] hover:to-[#B21D00] text-white font-black py-4 sm:py-5 rounded-2xl transition-all duration-300 hover:scale-105 text-lg sm:text-xl shadow-xl">
    Get VIP Pass
  </Button>
</a>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-[#B21D00]" />
          <p className="text-lg sm:text-2xl font-black text-[#B21D00]">
            Limited Passes Available – Hurry!
          </p>
        </div>

        <Button
          className="bg-gradient-to-r from-[#B21D00] to-[#8a1500] hover:from-[#8a1500] hover:to-[#B21D00] text-white font-black px-6 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-2xl text-lg sm:text-xl transition-all duration-300 hover:scale-105"
          data-scroll-to="tickets"
        >
          <Ticket className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
          Grab Your Pass Now
        </Button>
      </motion.div>
    </div>
  </div>
</section>




        <ApplicantDiscountSection />

        <section id="details" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#FFF8F0] via-white to-[#FFF8F0]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-20">
    <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div
        className="text-center mb-12 sm:mb-16 lg:mb-24"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-12 lg:mb-16 text-[#B21D00] tracking-tight text-center">
          Event Details
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
          Everything you need to know about the celebration
        </p>
      </motion.div>

      {/* Venue & Date Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 h-full overflow-hidden group">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-4 text-[#B21D00] text-2xl sm:text-3xl md:text-3xl font-black">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-[#B21D00]/10 to-[#B21D00]/20 rounded-2xl group-hover:from-[#B21D00]/20 group-hover:to-[#B21D00]/30 transition-all duration-300">
                  <MapPin className="h-6 sm:h-8 w-6 sm:w-8" />
                </div>
                Venue & Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#B21D00] mb-2 sm:mb-3">AURA LAWNS</p>
                <p className="text-gray-600 text-lg sm:text-xl font-medium">Bhubaneswar, Odisha</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14654.09384107365!2d85.80000000000001!3d20.350000000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c24a862da3%3A0xc885b19a4ff55989!2sAura%20Lawns%2C%20Revenue%20plot%20no%203%2C%20infront%20of%20Hotel%2C%20Shubham%20Grand%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1695479865400!5m2!1sen!2sin"
                width="100%"
                height="250"
                loading="lazy"
                className="rounded-2xl border-0 shadow-lg"
              ></iframe>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 h-full group">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-4 text-[#B21D00] text-2xl sm:text-3xl md:text-3xl font-black">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-[#B21D00]/10 to-[#B21D00]/20 rounded-2xl group-hover:from-[#B21D00]/20 group-hover:to-[#B21D00]/30 transition-all duration-300">
                  <Calendar className="h-6 sm:h-8 w-6 sm:w-8" />
                </div>
                Date & Time
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <select
                id="event-day"
                className="w-full px-4 sm:px-6 py-3 sm:py-5 rounded-2xl border-2 border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-[#B21D00] focus:border-[#B21D00] transition-all text-lg sm:text-xl font-semibold shadow-sm"
              >
                <option value="2025-09-29">Sep 29, 2025</option>
                <option value="2025-09-30">Sep 30, 2025</option>
                <option value="2025-10-01">Oct 01, 2025</option>
              </select>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-600 text-lg sm:text-xl font-semibold">6:30 PM Onwards</p>
                <Button
                  onClick={() => {
                    const ticketsSection = document.getElementById("tickets");
                    if (ticketsSection) ticketsSection.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#B21D00] to-[#8a1500] text-white font-black rounded-2xl hover:from-[#8a1500] hover:to-[#B21D00] transition-all duration-300 hover:scale-105 text-lg sm:text-xl shadow-xl"
                >
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Daily Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 sm:mb-12 lg:mb-16 text-[#B21D00] tracking-tight text-center">
          Daily Schedule
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-20">
          {[
            { day: "Day 1 - Sep 29", performers: "Emcee Pinkie, DJ Ryan, Dhol", Food: "Gujarati Thali, Street Snacks" },
            { day: "Day 2 - Sep 30", performers: "Emcee Pupul, DJ Priti, Dhol", Food: "Chats, Fusion Dishes" },
            { day: "Day 3 - Oct 1", performers: "Emcee Rajiv, Partho, Dhol, Live Band", Food: "Multi-cuisine Festival Stalls" },
          ].map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full p-4 sm:p-6 group">
                <CardContent className="pt-8 sm:pt-10 space-y-4 sm:space-y-6">
                  <h4 className="font-black mb-4 sm:mb-6 text-xl sm:text-2xl text-[#B21D00] text-center">{schedule.day}</h4>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="p-3 sm:p-4 bg-gradient-to-r from-[#B21D00]/5 to-[#B21D00]/10 rounded-2xl">
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <span className="font-bold text-[#B21D00] text-lg sm:text-xl">Performers:</span>
                        <br />
                        <span className="font-medium">{schedule.performers}</span>
                      </p>
                    </div>
                    <div className="p-3 sm:p-4 bg-gradient-to-r from-[#B21D00]/5 to-[#B21D00]/10 rounded-2xl">
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <span className="font-bold text-[#B21D00] text-lg sm:text-xl">Food:</span>
                        <br />
                        <span className="font-medium">{schedule.Food}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {[
            { icon: <Music className="h-8 sm:h-10 w-8 sm:w-10" />, title: "Song, Live DJ, Dandiya Beat", desc: "Non-stop music all night" },
            { icon: <Users className="h-8 sm:h-10 w-8 sm:w-10" />, title: "Traditional Dandiya Performance", desc: "Authentic cultural shows" },
            { icon: <Utensils className="h-8 sm:h-10 w-8 sm:w-10" />, title: "Food & Beverages Stalls", desc: "Delicious festive treats" },
            { icon: <Trophy className="h-8 sm:h-10 w-8 sm:w-10" />, title: "Exciting Contests & Prizes", desc: "Win amazing rewards" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-white/90 backdrop-blur-sm border-0 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
                <CardContent className="pt-6 sm:pt-10 pb-6 sm:pb-10 space-y-4 sm:space-y-6">
                  <div className="p-4 sm:p-5 bg-gradient-to-br from-[#B21D00]/10 to-[#B21D00]/20 rounded-2xl w-fit mx-auto group-hover:from-[#B21D00]/20 group-hover:to-[#B21D00]/30 transition-all duration-300">
                    <div className="text-[#B21D00]">{item.icon}</div>
                  </div>
                  <h3 className="font-black text-[#B21D00] text-lg sm:text-xl leading-tight">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>


        <section className="py-32 bg-gradient-to-br from-white via-[#FFF8F0] to-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
              <motion.h2
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-5xl md:text-7xl font-black mb-16 text-[#B21D00] tracking-tight text-center"
>
  Special Guests & Performers
</motion.h2>

              <div className="relative">
                {/* Carousel Container */}
                <div className="overflow-hidden rounded-3xl">
                  <motion.div
                    className="flex transition-transform duration-500 ease-in-out"
                    id="carousel-track"
                    style={{ transform: "translateX(0%)" }}
                  >
                    {/* Carousel Slides */}
                    {[
                      // Slide 1
                      [
                        { id: 1, name: "Emcee Pinkie", role: "Host & Performer", image: "/guests/guest-1.webp" },
                        { id: 2, name: "DJ Ryan", role: "Music Director", image: "/guests/guest-2.webp" },
                        { id: 3, name: "Dhol Master", role: "Traditional Beats", image: "/guests/guest-3.webp" },
                        { id: 4, name: "Emcee Pupul", role: "Entertainment Host", image: "/guests/guest-4.webp" },
                      ],
                      // Slide 2
                      [
                        { id: 5, name: "DJ Priti", role: "Electronic Beats", image: "/guests/guest-5.webp" },
                        { id: 6, name: "Emcee Rajiv", role: "Master of Ceremonies", image: "/guests/guest-6.webp" },
                        { id: 7, name: "Partho", role: "Live Performance", image: "/guests/guest-7.webp" },
                        { id: 8, name: "Live Band", role: "Musical Ensemble", image: "/guests/guest-1.webp" },
                      ],
                    ].map((slide, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
                          {slide.map((performer, i) => (
                            <motion.div
                              key={performer.id}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500"
                            >
                              <div className="w-full aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                                <img
                                  src={performer.image || "/placeholder.svg"}
                                  alt={performer.name}
                                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#B21D00]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                {/* Performer Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                  <h3 className="font-black text-xl mb-2">{performer.name}</h3>
                                  <p className="text-sm opacity-90 font-medium">{performer.role}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Navigation Buttons */}
                <button
                  id="prev-btn"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-[#B21D00] p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-10"
                  onClick={() => {
                    const track = document.getElementById("carousel-track")
                    const currentTransform = track?.style.transform || "translateX(0%)"
                    const currentX = Number.parseInt(currentTransform.match(/-?\d+/)?.[0] || "0")
                    const newX = currentX >= 0 ? -100 : 0
                    if (track) track.style.transform = `translateX(${newX}%)`

                    // Update indicators
                    const indicators = document.querySelectorAll(".carousel-indicator")
                    indicators.forEach((indicator, index) => {
                      indicator.classList.toggle("bg-[#B21D00]", index === (newX === 0 ? 0 : 1))
                      indicator.classList.toggle("bg-gray-300", index !== (newX === 0 ? 0 : 1))
                    })
                  }}
                >
                  <ArrowRight className="w-6 h-6 rotate-180" />
                </button>

                <button
                  id="next-btn"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-[#B21D00] p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-10"
                  onClick={() => {
                    const track = document.getElementById("carousel-track")
                    const currentTransform = track?.style.transform || "translateX(0%)"
                    const currentX = Number.parseInt(currentTransform.match(/-?\d+/)?.[0] || "0")
                    const newX = currentX <= -100 ? 0 : -100
                    if (track) track.style.transform = `translateX(${newX}%)`

                    // Update indicators
                    const indicators = document.querySelectorAll(".carousel-indicator")
                    indicators.forEach((indicator, index) => {
                      indicator.classList.toggle("bg-[#B21D00]", index === (newX === 0 ? 0 : 1))
                      indicator.classList.toggle("bg-gray-300", index !== (newX === 0 ? 0 : 1))
                    })
                  }}
                >
                  <ArrowRight className="w-6 h-6" />
                </button>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                  <button className="carousel-indicator w-4 h-4 rounded-full bg-[#B21D00] transition-all duration-300 hover:scale-125"></button>
                  <button className="carousel-indicator w-4 h-4 rounded-full bg-gray-300 transition-all duration-300 hover:scale-125"></button>
                </div>
              </div>

              {/* Featured Performers Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-20"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
                  <h3 className="text-5xl md:text-7xl font-black mb-16 text-[#B21D00] tracking-tight text-center">
  Featured Highlights
</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center space-y-4">
                      <div className="text-4xl">🎤</div>
                      <h4 className="font-black text-xl text-[#B21D00]">Live Hosting</h4>
                      <p className="text-gray-600 font-medium">Professional emcees keeping the energy high all night</p>
                    </div>
                    <div className="text-center space-y-4">
                      <div className="text-4xl">🎵</div>
                      <h4 className="font-black text-xl text-[#B21D00]">DJ Sets</h4>
                      <p className="text-gray-600 font-medium">Top DJs mixing traditional and modern beats</p>
                    </div>
                    <div className="text-center space-y-4">
                      <div className="text-4xl">🥁</div>
                      <h4 className="font-black text-xl text-[#B21D00]">Live Dhol</h4>
                      <p className="text-gray-600 font-medium">Authentic dhol performances for traditional vibes</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


    <section className="py-20 px-6 bg-[#fff8f3]">
      <div className="max-w-6xl mx-auto">
        {/* Outer Card - same style as Featured Highlights */}
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
          {/* Section Heading */}
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-[#B21D00] tracking-tight text-center">
  Contact & Support
</h2>

          {/* Grid - same spacing & font as Featured Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp Support */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <MessageCircle className="w-12 h-12 text-red-700 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-red-700">
                WhatsApp Support
              </h3>
              <p className="mt-2 text-gray-600">
                Chat with us on WhatsApp for quick support
              </p>
            </a>

            {/* Call Us */}
            <a href="tel:+919876543210" className="block">
              <Phone className="w-12 h-12 text-red-700 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-red-700">Call Us</h3>
              <p className="mt-2 text-gray-600">+91 9876543210</p>
            </a>

            {/* Location */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Aura+Lawns,+Revenue+plot+no+3,+infront+of+Hotel+Shubham+Grand,+Patia,+Bhubaneswar,+Odisha+751024"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <MapPin className="w-12 h-12 text-red-700 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-red-700">Location</h3>
              <p className="mt-2 text-gray-600">
                Aura Lawns, Revenue plot no 3, infront of Hotel Shubham Grand,
                Patia, Bhubaneswar, Odisha 751024
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>


    

        <section className="py-32 bg-gradient-to-br from-white via-[#FFF8F0] to-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-4xl mx-auto">
              <motion.h2
  className="text-5xl md:text-7xl font-black mb-16 text-[#B21D00] tracking-tight text-center"
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Frequently Asked Questions
</motion.h2>

              <div className="space-y-8">
                {[
                  {
                    question: "Do I need to bring my own dandiya sticks?",
                    answer: "Sticks will be available at the venue, but you are welcome to bring your own.",
                  },
                  {
                    question: "Will food be available at the venue?",
                    answer: "Yes, a variety of food stalls will be set up at the event.",
                  },
                  {
                    question: "Is there a dress code?",
                    answer: "Traditional attire is encouraged, but you can wear whatever makes you comfortable.",
                  },
                  {
                    question: "What about parking facilities?",
                    answer: "Free parking is available near the venue for all attendees.",
                  },
                  {
                    question: "How can I contact you if I have more questions?",
                    answer:
                      'You can reach us at <a href="mailto:info@dandiyanight.com" class="text-[#B21D00] underline font-semibold">info@dandiyanight.com</a>.',
                  },
                ].map((faq, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
                  >
                    <h3 className="font-black text-2xl text-[#B21D00] mb-6">{faq.question}</h3>
                    <p
                      className="text-gray-700 leading-relaxed text-xl"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-br from-[#FFF8F0] to-[#FFF0E6] py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-6xl mx-auto text-center space-y-10">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-black text-[#B21D00]">Dandiya Night Bhubaneswar 2025</h3>
              <p className="text-2xl text-gray-700 font-semibold">
                The biggest celebration of the year is waiting for you!
              </p>
              <p className="text-gray-600 text-lg">
                Email:{" "}
                <a
                  href="mailto:ringsandknotss@gmail.com"
                  className="text-[#B21D00] underline font-bold hover:text-[#8a1500] transition-colors"
                >
                  ringsandknotss@gmail.com
                </a>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { text: "Follow Us", link: "#" },
                { text: "Share Event", link: "#" },
                { text: "Contact Us", link: "https://ringsandknots.com/contact/" },
                { text: "Refund & Cancellation", link: "https://ringsandknots.com/refund-policy/" },
                { text: "Terms & Conditions", link: "https://ringsandknots.com/terms-conditions/" },
              ].map((item, idx) => (
                <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-2 border-[#B21D00] text-[#B21D00] hover:bg-[#B21D00] hover:text-white transition-all duration-300 rounded-2xl px-8 py-4 font-bold bg-transparent text-lg"
                  >
                    {item.text}
                  </Button>
                </a>
              ))}
            </div>

            <p className="text-gray-500 text-base pt-10 border-t border-gray-300">
              © 2025 Dandiya Night. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <motion.button
        onClick={() => {
          const heroSection = document.getElementById("hero")
          if (heroSection) heroSection.scrollIntoView({ behavior: "smooth" })
        }}
        className="fixed bottom-8 right-8 p-5 bg-gradient-to-r from-[#B21D00] to-[#8a1500] text-white rounded-full shadow-2xl hover:from-[#8a1500] hover:to-[#B21D00] transition-all duration-300 hover:scale-110 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowRight className="w-7 h-7 rotate-[-90deg]" />
      </motion.button>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <Button
          className="bg-gradient-to-r from-[#B21D00] to-[#8a1500] text-white px-10 py-5 rounded-full font-black shadow-2xl hover:from-[#8a1500] hover:to-[#B21D00] transition-all duration-300 text-lg"
          data-scroll-to="tickets"
        >
          Book Now
        </Button>
      </div>
      
    </div>
  )
}