import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white py-10">
      <div className="max-w-7xl text-center mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">(123) 456-7890</p>
            <p className="mb-2">info@plumbingservices.com</p>
            <p>1234 Plumbing St, Salem, OR</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="flex gap-10 md:grid grid-cols-2 justify-center items-center md:gap-2 md:space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <FaFacebookF size={30} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>&copy; 2024 Plumbing Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
