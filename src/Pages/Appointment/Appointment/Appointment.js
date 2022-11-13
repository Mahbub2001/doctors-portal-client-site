import React, { useState } from "react";
import AppoinmentBanner from "../AppointmentBanner/AppoinmentBanner";
import AvailableAppointments from "../AvailableAppoinments/AvailableAppointments";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvailableAppointments selectedDate={selectedDate} />
    </div>
  );
};

export default Appointment;
