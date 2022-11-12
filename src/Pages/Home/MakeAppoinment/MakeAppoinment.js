import React from "react";
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const MakeAppoinment = () => {
  return (
    <section className="mt-32 "
    style={{
        background:`url(${appointment})`
    }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 w-96 h-96 hidden lg:block md:block rounded-lg"alt=""
          />
          <div>
            <h4 className="text-primary text-lg font-bold">Appointment</h4>
            <h1 className="text-white text-4xl font-bold">Make an appointment Today</h1>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <PrimaryButton>Getting Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
