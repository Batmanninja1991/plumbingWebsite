import React from "react";
import bgImg from "../assets/tubes.jpg";
import { FaHome } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { MdOutlineEmergency } from "react-icons/md";
import servicesImage from "../assets/bathroom.jpg";
import personalImage from "../assets/coffee.jpg";
import quoteImage from "../assets/sink.jpg";

const Hero = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review:
        "I cannot express how grateful I am for the outstanding service provided by Salem Plumbing. From the moment I called, I was met with professionalism and genuine care. Their team worked tirelessly to fix my plumbing issue, ensuring everything was perfect before they left. I highly recommend their services to anyone in need. They truly go above and beyond!",
    },
    {
      id: 2,
      name: "Jane Smith",
      review:
        "Salem Plumbing exceeded my expectations in every way. Their quick response and top-notch work were impressive, but it was their friendly demeanor and willingness to explain everything that really stood out. They made me feel valued and respected. I will definitely call them again for any future plumbing needs and recommend them to all my friends and family.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      review:
        "I had a major plumbing issue that needed immediate attention, and Salem Plumbing came to the rescue. Their team was not only quick and efficient but also incredibly friendly and reassuring. They fixed the problem in no time and left my home spotless. It's rare to find such dedication and quality service. I am beyond thankful for their help and will always turn to them for plumbing needs.",
    },
    {
      id: 4,
      name: "Robert Brown",
      review:
        "Finding an affordable and reliable plumbing service can be challenging, but Salem Plumbing made it easy. Their team's expertise and attention to detail were evident from the start. They patiently addressed all my concerns and completed the job flawlessly. The peace of mind they provided was priceless. I had a great experience and will always recommend their exceptional services.",
    },
    {
      id: 5,
      name: "Mary Williams",
      review:
        "I am incredibly satisfied with the work done by Salem Plumbing. From the first phone call to the completion of the job, they showed unwavering dedication and care. Their team treated my home as if it were their own, ensuring everything was perfect. It was the best plumbing service I have ever used, and I will never hesitate to call them again. They truly are the best in the business!",
    },
  ];
  return (
    <div className="w-full h-full">
      <section
        id="home"
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute w-full h-full bg-gradient-to-b from-black to-transparent"></div>
        <div className="relative pt-36 z-10">
          <div className="p-6 lg:p-10 flex flex-col gap-4 md:gap-10 justify-center items-center text-center">
            <h1 className="text-4xl lg:text-6xl font-semibold tracking-wide text-white">
              <div className="font-bold text-accent">Salem Plumbing</div>
              <br />
              Your Trusted Plumbing Experts
            </h1>
            <p className="leading-relaxed text-base lg:text-xl tracking-widest max-w-3xl text-white">
              From leaky faucets to major plumbing overhauls, we at{" "}
              <span className="font-bold text-accent text-xl">
                Salem Plumbing
              </span>{" "}
              provide top-quality, reliable services to keep your home and
              business running smoothly. Trust us to deliver exceptional
              results, no matter the size of the job.
            </p>
            <button className="mt-8 text-xl rounded-xl px-8 py-4 font-bold shadow-lg bg-accent hover:bg-black hover:text-accent hover:scale-105">
              Schedule Your Free Quote Today!
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <img
            src={servicesImage}
            alt="Services"
            className="w-10/12 md:w-2/3 mx-auto md:h-[400px] mb-8 rounded-lg shadow-md"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <FaHome
                size={40}
                className="mb-4 text-accent"
                aria-label="Residential Plumbing"
              />
              <h3 className="text-xl font-semibold mb-4">
                Residential Plumbing
              </h3>
              <p>
                Expert plumbing services for your home, ensuring safety and
                functionality.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <IoBusiness
                size={40}
                className="mb-4 text-accent"
                aria-label="Commercial Plumbing"
              />
              <h3 className="text-xl font-semibold mb-4">
                Commercial Plumbing
              </h3>
              <p>
                Comprehensive plumbing solutions for businesses of all sizes.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
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
            </div>
          </div>
        </div>
      </section>

      <>
        <section
          id="about"
          className="w-full lg:h-full py-32 bg-white"
        >
          <div className="max-w-9xl mx-auto px-4 text-center">
            <h2 className="text-4xl pb-10 font-semibold mb-8 text-primary custom-underline">
              About Us
            </h2>
            <div className="flex flex-col w-11/12 mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src={personalImage}
                alt="About Us"
                className="w-full md:w-2/3 mx-auto mb-8 rounded-lg shadow-md"
              />
              <h3 className="text-4xl font-semibold mb-4 text-primary">
                Who We Are
              </h3>
              <p className="text-lg lg:w-2/3 mx-auto">
                We are a family-owned plumbing business with over 20 years of
                experience. Our team is dedicated to providing exceptional
                service and ensuring your plumbing systems are functioning
                smoothly.
              </p>
              <p className="text-lg lg:w-2/3 mx-auto bg-gray-200 text-gray-700 my-4 p-4 rounded-xl">
                Our commitment to quality and customer satisfaction is
                unwavering. We believe in treating our customers like family,
                ensuring every job is done right the first time. Trust us to
                handle all your plumbing needs with professionalism and care.
              </p>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-10 bg-primary-light">
          <div className="max-w-9xl mx-auto px-4 text-center">
            <h2 className="text-4xl pb-10 font-semibold mb-8 text-primary custom-underline">
              Testimonials
            </h2>
            <div className="relative">
              <div className="flex overflow-x-scroll no-scrollbar space-x-8">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-700">{testimonial.review}</p>
                  </div>
                ))}
              </div>
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary/90 text-white p-2 rounded-full shadow-md"
                onClick={() =>
                  document
                    .querySelector("#testimonials .flex")
                    .scrollBy({ left: -300, behavior: "smooth" })
                }
              >
                &lt;
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary/90 text-white p-2 rounded-full shadow-md"
                onClick={() =>
                  document
                    .querySelector("#testimonials .flex")
                    .scrollBy({ left: 300, behavior: "smooth" })
                }
              >
                &gt;
              </button>
            </div>
          </div>
        </section>
      </>
      <section
        id="contact"
        className="w-full lg:h-full py-10 bg-cetner bg-cover"
        style={{ backgroundImage: `url(${quoteImage})` }}
      >
        <div className="max-w-9xl py-10 mx-auto px-4 text-center">
          <form className="max-w-2xl px-6 mx-auto bg-white rounded-lg shadow-md flex flex-col gap-3">
            <h2 className="text-4xl py-10 font-semibold text-primary">
              Schedule a Free Quote
            </h2>
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
              className="bg-accent hover:bg-black hover:text-accent p-3 rounded-lg font-semibold w-full transition mb-10"
            >
              Schedule a Free Quote
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Hero;
