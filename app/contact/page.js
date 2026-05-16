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
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center px-6 py-16">

  <div className="w-full max-w-5xl bg-white rounded-[40px] shadow-2xl overflow-hidden grid md:grid-cols-2">


    <div className="bg-orange-500 text-white p-10 flex flex-col justify-center">

      <h1 className="text-5xl font-bold leading-tight">
        Get In Touch 🍲
      </h1>

      <p className="mt-6 text-orange-100 leading-8 text-lg">
        We'd love to hear from you! Whether you have recipe ideas,
        feedback, or questions, feel free to send us a message.
      </p>

   
      <div className="mt-10 space-y-5">

        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-full">
            📧
          </div>

          <p className="text-lg">
            yummybowl@gmail.com
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-full">
            📍
          </div>

          <p className="text-lg">
            Sri Lanka
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-full">
            📞
          </div>

          <p className="text-lg">
            +94 77 123 4567
          </p>
        </div>

      </div>

    </div>

    <div className="p-10">

      <h2 className="text-4xl font-bold text-gray-800 text-center">
        Contact Us
      </h2>

      <p className="text-center text-gray-500 mt-3">
        Send your message anytime ✨
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-10 space-y-6"
      >

       
        <div>

          <label className="block text-gray-700 font-semibold mb-2">
            Full Name
          </label>

          <input
            type="text"
            name="user_name"
            required
            placeholder="Enter your full name"
            className="w-full bg-orange-50 border border-orange-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
          />

        </div>

      
        <div>

          <label className="block text-gray-700 font-semibold mb-2">
            Email Address
          </label>

          <input
            type="email"
            name="user_email"
            required
            placeholder="Enter your email"
            className="w-full bg-orange-50 border border-orange-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
          />

        </div>

        
        <div>

          <label className="block text-gray-700 font-semibold mb-2">
            Message
          </label>

          <textarea
            name="message"
            required
            rows="5"
            placeholder="Write your message..."
            className="w-full bg-orange-50 border border-orange-200 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 resize-none"
          ></textarea>

        </div>

       
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold text-lg transition duration-300 shadow-md"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>

</div>
    <Footer/>
    </>
  );
}