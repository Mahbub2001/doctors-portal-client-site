import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import AppoinmentBanner from "../AppointmentBanner/AppoinmentBanner";
import AvailableAppointments from "../AvailableAppoinments/AvailableAppointments";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {user} = useContext(AuthContext);
  return (
    <div>
      <AppoinmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {
        user?.uid?
        <>
         <AvailableAppointments selectedDate={selectedDate} />
        </>
        :
        <>
        <h5 className="text-5xl text-center my-10">Please Login for appoinment</h5>
        </>
      }
     
    </div>
  );
};

export default Appointment;
