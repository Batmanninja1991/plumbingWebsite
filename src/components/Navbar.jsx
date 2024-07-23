import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Modal from "../components/Modal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-[80px] bg-primary fixed top-0 left-0 z-40">
      {/* Navbar */}
      <div className="h-full flex justify-between items-center px-8">
        <div className="z-50">
          <Link
            to="/"
            className="flex justify-center items-center text-xl text-accent"
          >
            Salem
            <img src={logo} className="w-[75px]" alt="Logo" />
            Plumbing
          </Link>
        </div>
        <div className="hidden md:flex gap-8 lg:gap-20">
          <ul className="flex gap-8 lg:gap-20 text-accent">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-xl font-light hover:scale-105">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={handleLinkClick}>
                <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-xl font-light hover:scale-105">
                  Services
                </p>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-xl font-light hover:scale-105">
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-xl font-light hover:scale-105">
                  Contact
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="hidden md:block bg-accent hover:bg-black hover:text-accent rounded-xl px-4 py-2 font-bold"
        >
          Free Estimates
        </button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        <div
          className="flex justify-center items-center gap-4 md:hidden z-50 text-accent"
          onClick={handleMenu}
        >
          {!menuOpen ? (
            <AiOutlineMenu size={40} />
          ) : (
            <AiOutlineClose size={40} />
          )}
        </div>
      </div>

      {/* Hidden Menu */}
      <div
        className={`w-full bg-primary flex flex-col items-center justify-center transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full opacity-0"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col justify-center items-center gap-10 py-10">
          <li>
            <Link to="/" onClick={handleLinkClick}>
              <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-2xl hover:scale-105 hover:text-accent text-secondary">
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={handleLinkClick}>
              <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-2xl hover:scale-105 hover:text-accent text-secondary">
                Services
              </p>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-2xl hover:scale-105 hover:text-accent text-secondary">
                About
              </p>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-2xl hover:scale-105 hover:text-accent text-secondary">
                Contact
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
