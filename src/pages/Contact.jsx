import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full lg:h-full py-32 bg-gray-100 bg-gradient-to-b from-secondary via-secondary/10 to-secondary/80"
    >
      <div className="max-w-9xl mx-auto px-4 text-center">
        <h2 className="text-4xl pb-10 font-semibold mb-8 text-primary custom-underline">
          Schedule a Free Quote
        </h2>
        <form className="max-w-2xl py-20 px-6 mx-auto bg-white rounded-lg shadow-md flex flex-col gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstname" className="sr-only">
                First Name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="sr-only">
                Last Name
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Last Name"
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="sr-only">
              Your Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Your Phone Number"
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="sr-only">
              Street Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Street Address"
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="sr-only">
              City
            </label>
            <input
              id="city"
              type="text"
              placeholder="City"
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="sr-only">
              How can we help?
            </label>
            <textarea
              id="message"
              placeholder="How can we help?"
              className="w-full p-3 rounded-lg border border-gray-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-accent text-white p-3 rounded-lg font-semibold w-full hover:bg-accent-dark transition"
          >
            Schedule a Free Quote
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
