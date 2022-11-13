import React, { useState } from "react";
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import image from '../../../assets/images/bg.png'

const AppoinmentBanner = ({selectedDate,setSelectedDate}) => {
    
  return (
    <header className="my-6">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center">
          <img
            src={chair}
            className="lg:w-1/2 md:w-2/3 w-3/4 rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div className="mr-6">
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
