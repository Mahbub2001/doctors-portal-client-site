import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Loading from "../../Shared/loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/v2/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  // const { data: appointmentOptions = []} = useQuery({
  //   queryKey: ["appointmentOptions"],
  //   queryFn: () =>
  //     fetch("http://localhost:5000/appointmentOptions").then((res) =>
  //       res.json()
  //     ),
  // });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="mt-16">
      <p className="text-center text-secondary font-bold">
        Available Appointments On {format(selectedDate, "PP")}{" "}
      </p>
      <div className="grid lg:grid-cols-3 gap-6 grid-cols-1 md:grid-cols-2 items-center place-items-center">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
