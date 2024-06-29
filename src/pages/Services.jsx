import React from "react";
import { FaHome } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { MdOutlineEmergency } from "react-icons/md";

const Services = () => {
  return (
    <section id="services" className="w-full lg:h-full py-32 bg-gray-100 bg-gradient-to-b from-secondary via-secondary/10 to-secondary/80">
      <div className="max-w-9xl mx-auto px-4 text-center">
        <h2 className="text-4xl pb-10 font-semibold mb-8 text-primary custom-underline">Our Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col w-11/12 mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FaHome
              size={40}
              className="mb-4 text-accent"
              aria-label="Residential Plumbing"
            />
            <h3 className="text-xl font-semibold mb-4">Residential Plumbing</h3>
            <p>
              Expert plumbing services for your home, ensuring safety and
              functionality.
            </p>
            <p className="bg-gray-200 text-gray-700 my-4 p-4 rounded-xl flex-grow">
              Hearing a drip in the night? Hard water killing the life of your
              dishwasher? Broken faucet? We do it all and more. Bring your to-do
              list to us and we will make sure it gets done within your budget.
            </p>
          </div>
          <div className="flex flex-col w-11/12 mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition h-full">
            <IoBusiness
              size={40}
              className="mb-4 text-accent"
              aria-label="Commercial Plumbing"
            />
            <h3 className="text-xl font-semibold mb-4">Commercial Plumbing</h3>
            <p>Comprehensive plumbing solutions for businesses of all sizes.</p>
            <p className="bg-gray-200 text-gray-700 my-4 p-4 rounded-xl flex-grow">
              Running a business is tough enough without plumbing issues.
              Whether it's a small leak or a major overhaul, we've got you
              covered. Let us handle your plumbing so you can focus on what you
              do best.
            </p>
          </div>
          <div className="flex flex-col w-11/12 mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition h-full">
            <MdOutlineEmergency
              size={40}
              className="mb-4 text-accent"
              aria-label="Emergency Services"
            />
            <h3 className="text-xl font-semibold mb-4">Emergency Services</h3>
            <p>
              Available 24/7 to handle any plumbing emergency quickly and
              efficiently. Pipes burst at 2 AM? No problem.
            </p>
            <p className="bg-gray-200 text-gray-700 my-4 p-4 rounded-xl flex-grow">
              Our emergency services are here to handle those unexpected
              plumbing disasters, ensuring you get back to normal as soon as
              possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
