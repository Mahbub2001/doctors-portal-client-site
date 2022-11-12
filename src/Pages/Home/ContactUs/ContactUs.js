import React from "react";
import appoinment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <section
      style={{
        background: `url(${appoinment})`,
        backgroundSize: "cover",
        height: "604px",
      }}
      className="my-16"
    >
      <div className="text-center text-lg pt-16">
        <h4 className="text-primary font-bold">Contact Us</h4>
        <h1 className="text-4xl text-white">Stay Connected With Us</h1>
        <form className="mt-5">
        <input type="text" placeholder="Email Address" className="input  h-12 lg:w-[450px]" />
        <br/>
        <input type="text" placeholder="Subject" className="mt-5 input h-12  lg:w-[450px]" />
        <br />
        <textarea className="mb-9 mt-5 textarea  lg:w-[450px] h-32" placeholder="Your Message"></textarea>
        <br />
        <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
