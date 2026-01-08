import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]  gap-14 my-10 mt-40 text-sm">
        {/* ----- Left Section ----- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            This is a place where you can find all types of doctors for
            different disease without any type of hassle.
          </p>
        </div>
        {/* ----- Center Section ----- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li onClick={()=> {navigate('/'); scrollTo(0,0)} } className="cursor-pointer underline">Home</li>
            <li onClick={()=> {navigate('/about'); scrollTo(0,0)} } className="cursor-pointer underline">About us</li>
            <li onClick={()=> {navigate('/contact'); scrollTo(0,0)} } className="cursor-pointer underline">Contact us</li>
            <li className="cursor-pointer underline">Privacy policy</li>
          </ul>
        </div>
        {/* ----- Right Section ----- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-923894858</li>
            <li>harsh@yadav.gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ------ CpoyRight Text ------ */}
      <div>
          <hr />
          <p className="py-5 text-sm text-center">CopyRight 2025@ Prescripto - All Right Reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
