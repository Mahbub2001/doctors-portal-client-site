import React, { useState } from "react";
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
const AppoinmentBanner = ({selectedDate,setSelectedDate}) => {
    
  return (
    <header className="my-6">
      <div className="hero">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-5">
          <img
            src={chair}
            className="lg:w-1/2 md:w-2/3 w-2/4 rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div>
            <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
