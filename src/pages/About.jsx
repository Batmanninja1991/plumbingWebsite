import React from "react";
import personalImage from "../assets/coffee.jpg";

const About = () => {
  const testimonials = [
    { 
      id: 1, 
      name: "John Doe", 
      review: "I cannot express how grateful I am for the outstanding service provided by Salem Plumbing. From the moment I called, I was met with professionalism and genuine care. Their team worked tirelessly to fix my plumbing issue, ensuring everything was perfect before they left. I highly recommend their services to anyone in need. They truly go above and beyond!" 
    },
    { 
      id: 2, 
      name: "Jane Smith", 
      review: "Salem Plumbing exceeded my expectations in every way. Their quick response and top-notch work were impressive, but it was their friendly demeanor and willingness to explain everything that really stood out. They made me feel valued and respected. I will definitely call them again for any future plumbing needs and recommend them to all my friends and family." 
    },
    { 
      id: 3, 
      name: "Alice Johnson", 
      review: "I had a major plumbing issue that needed immediate attention, and Salem Plumbing came to the rescue. Their team was not only quick and efficient but also incredibly friendly and reassuring. They fixed the problem in no time and left my home spotless. It's rare to find such dedication and quality service. I am beyond thankful for their help and will always turn to them for plumbing needs." 
    },
    { 
      id: 4, 
      name: "Robert Brown", 
      review: "Finding an affordable and reliable plumbing service can be challenging, but Salem Plumbing made it easy. Their team's expertise and attention to detail were evident from the start. They patiently addressed all my concerns and completed the job flawlessly. The peace of mind they provided was priceless. I had a great experience and will always recommend their exceptional services." 
    },
    { 
      id: 5, 
      name: "Mary Williams", 
      review: "I am incredibly satisfied with the work done by Salem Plumbing. From the first phone call to the completion of the job, they showed unwavering dedication and care. Their team treated my home as if it were their own, ensuring everything was perfect. It was the best plumbing service I have ever used, and I will never hesitate to call them again. They truly are the best in the business!" 
    }
  ];

  return (
    <>
      <section id="about" className="w-full lg:h-full py-32 bg-gray-100 bg-gradient-to-b from-secondary via-secondary/10 to-secondary/80">
        <div className="max-w-9xl mx-auto px-4 text-center">
          <h2 className="text-4xl pb-10 font-semibold mb-8 text-primary custom-underline">About Us</h2>
          <div className="flex flex-col w-11/12 mx-auto items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              src={personalImage}
              alt="About Us"
              className="w-full md:w-2/3 mx-auto mb-8 rounded-lg shadow-md"
            />
            <h3 className="text-4xl font-semibold mb-4 text-primary">Who We Are</h3>
            <p className="text-lg lg:w-2/3 mx-auto">
              We are a family-owned plumbing business with over 20 years of
              experience. Our team is dedicated to providing exceptional service and
              ensuring your plumbing systems are functioning smoothly.
            </p>
            <p className="text-lg lg:w-2/3 mx-auto bg-gray-200 text-gray-700 my-4 p-4 rounded-xl">
              Our commitment to quality and customer satisfaction is unwavering. We
              believe in treating our customers like family, ensuring every job is
              done right the first time. Trust us to handle all your plumbing needs
              with professionalism and care.
            </p>
          </div>
        </div>
      </section>
      <section id="testimonials" className="w-full py-10 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl pb-10 font-semibold mb-8 text-primary custom-underline">Testimonials</h2>
          <div className="relative">
            <div className="flex overflow-x-scroll no-scrollbar space-x-8">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md my-4">
                  <h3 className="text-xl font-semibold mb-4">{testimonial.name}</h3>
                  <p className="text-gray-700">{testimonial.review}</p>
                </div>
              ))}
            </div>
            <button
              className="absolute xl:-left-10 left-0 top-1/2 transform -translate-y-1/2 bg-primary/90 text-white p-2 rounded-full shadow-md"
              onClick={() => document.querySelector('#testimonials .flex').scrollBy({ left: -300, behavior: 'smooth' })}
            >
              &lt;
            </button>
            <button
              className="absolute xl:-right-10 right-0 top-1/2 transform -translate-y-1/2 bg-primary/90 text-white p-2 rounded-full shadow-md"
              onClick={() => document.querySelector('#testimonials .flex').scrollBy({ left: 300, behavior: 'smooth' })}
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
