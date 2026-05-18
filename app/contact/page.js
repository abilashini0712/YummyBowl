"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_3mi914z",
        "template_favgwk9",
        form.current,
        "TVLFF_mhxTkXKm9Vu"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error);
        }
      );
  };

  return (
    <>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 px-4 md:px-8 py-10 md:py-16 flex items-center justify-center">

        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="bg-orange-500 text-white p-8 md:p-12 flex flex-col justify-center">

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
              Get In Touch 🍲
            </h1>

            <p className="mt-6 text-orange-100 leading-8 text-base md:text-lg text-center md:text-left">

              We'd love to hear from you! Whether you have recipe ideas,
              feedback, or questions, feel free to send us a message.

            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">

                <div className="bg-white/20 p-3 rounded-full text-xl">
                  📧
                </div>

                <p className="text-sm md:text-lg break-all">
                  yummybowl@gmail.com
                </p>

              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">

                <div className="bg-white/20 p-3 rounded-full text-xl">
                  📍
                </div>

                <p className="text-sm md:text-lg">
                  Sri Lanka
                </p>

              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">

                <div className="bg-white/20 p-3 rounded-full text-xl">
                  📞
                </div>

                <p className="text-sm md:text-lg">
                  +94 77 123 4567
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="p-6 sm:p-8 md:p-12">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
              Contact Us
            </h2>

            <p className="text-center text-gray-500 mt-3 text-sm md:text-base">
              Send your message anytime ✨
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-10 space-y-6"
            >

              {/* NAME */}
              <div>

                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-orange-50 border border-orange-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 text-sm md:text-base"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-orange-50 border border-orange-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 text-sm md:text-base"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-orange-50 border border-orange-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 resize-none text-sm md:text-base"
                ></textarea>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold text-base md:text-lg transition duration-300 shadow-md"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </main>

      <Footer />

    </>
  );
}