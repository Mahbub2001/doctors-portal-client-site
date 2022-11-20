import React from "react";

const AppointmentOption = ({ appointmentOption,setTreatment }) => {
  const { name, slots,price } = appointmentOption;

  return (
    <div className="card md:w-full sm:w-96  shadow-xl ">
      <div className="card-body lg:max-w-[420px] text-center mt-10">
        <h2 className="text-2xl font-bold text-secondary text-center">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p><small>Price : ${price}</small></p>
        <div className="card-actions justify-center">
          <label 
          disabled={slots.length === 0}
          htmlFor="booking-modal" 
          className="btn btn-primary text-white"
          onClick={()=>setTreatment(appointmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
