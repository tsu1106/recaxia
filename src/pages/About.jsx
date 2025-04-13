import React from "react";
import { Link } from "react-router-dom";
// Keep using public folder reference if you prefer
const LOGO_PATH = "/images/logo.png"; 

const About = () => {
  const content = {
    title: "Welcome to Axiarec",
    description: "Your next career move starts here. Whether you're a job seeker looking for your dream position or a company searching for top talent — Axiarec connects both worlds effortlessly.",
    cta: "Join Us"
  };

  return (
    <div className="min-h-screen bg-dgray
     flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl text-center space-y-6">
        <img
          alt="Axiarec logo"
          src={LOGO_PATH}
          className="mx-auto h-20 w-auto object-contain"
        />
        
        <h1 className="text-3xl font-extrabold text-ameth">
          {content.title}
        </h1>
        
        <p className="text-lg text-white">
          {content.description}
        </p>

        <Link
          to="/signup"
          className="inline-block px-8 py-3 bg-ameth hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          {content.cta}
        </Link>
      </div>
    </div>
  );
};

export default About;