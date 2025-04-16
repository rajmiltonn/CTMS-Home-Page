"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

// Slideshow text content
const slides = [
  {
    title: "Cloud Tech Mind Solutions",
    description:
      "Being technical navigators to translate young minds with digital technologies and accelerate your growth.",
    backgroundImage:
      "url('https://www.infosys.com/content/dam/infosys-web/en/global-resource/25/banner/energy-industry-outlook2024-lead.jpg')",
  },
  {
    title: "Data Science and Machine Learning",
    description:
      "Dive into the world of Artificial Intelligence through Cloud Tech Mind Solutions.",
    backgroundImage:
      "url('https://www.infosys.com/content/dam/infosys-web/en/global-resource/25/banner/telecom-industry-outlook2024-lead.jpg')",
  },
  {
    title: "Salesforce",
    description:
      "Learn No.1 Cloud CRM – Salesforce from Cloud Tech Mind Solutions.",
    backgroundImage:
      "url('https://www.infosys.com/content/dam/infosys-web/en/iki/images/home/techcompass-lead.jpg')",
  },
  {
    title: "Digital Marketing",
    description:
      "Become a marketing specialist and Lead generation advisor to companies by enrolling our digital marketing Program.",
    backgroundImage:
      "url('https://www.infosys.com/content/dam/infosys-web/en/global-resource/25/banner/mining-industry-outlook2024-lead.jpg')",
  },
  {
    title: "Foundational Courses for CBSE Students",
    description:
      "From 6th to 12th Maths & Science – A committed transformation program and money back guarantee for yearly enrollments.",
    backgroundImage:
      "url('https://www.infosys.com/content/dam/infosys-web/en/global-resource/25/banner/telecom-industry-outlook2024-lead.jpg')",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blinkChar, setBlinkChar] = useState(true);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkChar((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: slides[currentSlide].backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Social Media Icons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4 bg-blue-800/80 p-3 rounded-l-lg shadow-lg">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors"><FaFacebook className="w-6 h-6" /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors"><FaInstagram className="w-6 h-6" /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors"><FaYoutube className="w-6 h-6" /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors"><FaLinkedin className="w-6 h-6" /></a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors"><FaWhatsapp className="w-6 h-6" /></a>
      </div>

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 py-16 px-4">
          {/* Left Column - Slideshow Text */}
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <div className="min-h-32 sm:min-h-40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${currentSlide}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-2"
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                    {slides[currentSlide].title}{blinkChar ? "|" : " "}
                  </h1>
                  <p className="text-lg sm:text-xl text-white/90">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9789351057">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-6 text-lg">
                  <FaPhone className="mr-2" /> Call Now
                </Button>
              </a>
              <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-6 text-lg">
                <FaWhatsapp className="mr-2" /> WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Column - Enquiry Form */}
          <div className="flex-1">
            <Card className="p-6 shadow-xl bg-white/95 rounded-xl">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Enquire Now</h2>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" className="w-full p-3 border-blue-200" />
                <Input type="email" placeholder="Your Email" className="w-full p-3 border-blue-200" />
                <Input type="tel" placeholder="Your Phone Number" className="w-full p-3 border-blue-200" />
                <select className="w-full p-3 rounded-md border border-blue-200">
                  <option value="">Select Course</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="data-science">Data Science & ML</option>
                  <option value="salesforce">Salesforce</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="foundational">Foundational Courses (CBSE)</option>
                </select>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3">
                  Submit Enquiry
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pb-12 px-4">
          {[
            { icon: "⭐", text: "Google Reviews: 4.8/5" },
            { icon: "🚀", text: "5000+ learners empowered" },
            { icon: "🎯", text: "Freshers earning up to 15 LPA" },
            { icon: "🎓", text: "Learn from 20+ years industry experts" },
            { icon: "🧠", text: "Parallel product development" },
            { icon: "🌟", text: "Boost salary up to 400%*" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center text-white"
            >
              <div className="text-2xl font-bold">{item.icon}</div>
              <div className="text-sm font-medium mt-2">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
