import React from "react";

function Contact() {
  return (
    <div className="min-h-screen  xl:flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="xl:w-full max-w-2xl  rounded-xl shadow-lg p-6  sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-800 mb-6">
          Contact Us
        </h2> 

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-blue-500 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-blue-500 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-blue-500 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Your subject here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-blue-500 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
