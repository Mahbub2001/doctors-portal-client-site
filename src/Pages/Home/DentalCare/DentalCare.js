import React from "react";
import treatment from "../../../assets/images/treatment.png";

const DentalCare = () => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <div className="hero">
        <div className="hero-content gap-[102px] flex-col lg:flex-row z-10">
          <img src={treatment} className="h-[576px] rounded-lg lg:w-1/2 shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
            <p className="py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
