import React from "react";
import { BsFillGeoAltFill, BsWhatsapp } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div id="contact" className="h-auto w-full flex flex-col justify-start gap-8 pt-16 px-4 sm:px-14 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="relative font-bold text-4xl text-[#173b6c] border-b-4 border-[#149ddd] inline-block pb-2">
          Contact Me
        </h2>
        <p className="mt-5 text-lg leading-8 text-gray-700 max-w-2xl mx-auto">
          Want to discuss a project? Feel free to email, call, or message me on WhatsApp.
        </p>
      </div>

      {/* Contact Details */}
      <section className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Contact Info */}
        <div className="w-full lg:w-5/12 bg-white shadow-lg p-8 rounded-lg border-t-4 border-[#149ddd]">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#149ddd] text-white shadow-md">
              <BsFillGeoAltFill className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Location</h3>
              <p className="text-gray-600">Islamabad, Pakistan</p>
            </div>
          </div>
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#149ddd] text-white shadow-md">
              <CiMail className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:mshangabol@gmail.com" className="text-[#149ddd] font-semibold hover:underline">
                  mshangabol@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#149ddd] text-white shadow-md">
              <IoCallOutline className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+923007137798" className="text-[#149ddd] font-semibold hover:underline">
                  +92 300 7137798
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="w-full lg:w-7/12 flex flex-col gap-5 justify-center items-center">
          {/* Email Button */}
          <a
            href="mailto:mshangabol@gmail.com?subject=Let's%20Connect&body=Hello%20Shan,%20I%20would%20like%20to%20discuss%20a%20project."
            className="py-3 px-6 bg-[#149ddd] rounded text-white text-lg font-semibold hover:bg-[#0d6eb5] transition duration-300 shadow-lg w-full max-w-sm text-center"
          >
            📧 Send Email
          </a>

          {/* WhatsApp Button with Your Number */}
          <a
            href="https://wa.me/923007137798?text=Hello%20Shan,%20I'm%20interested%20in%20discussing%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 bg-[#25D366] rounded text-white text-lg font-semibold hover:bg-[#1EBE57] transition duration-300 shadow-lg w-full max-w-sm text-center flex items-center justify-center gap-3"
          >
            <BsWhatsapp className="w-6 h-6" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
