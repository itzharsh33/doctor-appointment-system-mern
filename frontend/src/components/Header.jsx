import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* ----left side------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-3-px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointments <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light"> 
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through extensive list of trusted doctors,
            <br className="hidden sm:block" /> Schedule your assignments hassle-free
          </p>
        </div>
        <a className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300" href="#speciality">
          Book Appointments <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* ----Right side ------ */}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;




// key leanings of page

// 1️⃣ What does <a> tag do?

// <a> (anchor tag) is used for navigation.

// Basic form:

// <a href="destination">Text</a>


// It tells the browser:

// “When user clicks this, go somewhere.”

// 2️⃣ What is href="#speciality" doing?

// This is the key part 👇

// href="#speciality"


// It means:

// “Scroll to the element whose id = speciality on the same page.”

// Example:
// <div id="speciality">
//   <!-- Section -->
// </div>


// 👉 When clicked:

// Page scrolls down

// No route change

// No reload

// Smooth in-page navigation

// 3️⃣ Why NOT NavLink here?

// NavLink is for changing routes, like:

// <NavLink to="/doctors" />


// But here:

// You are already on the same page

// You just want to jump/scroll to a section

// So:
// ✔ <a href="#id"> → correct
// ❌ NavLink → unnecessary

