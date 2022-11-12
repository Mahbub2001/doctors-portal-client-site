import React from 'react';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5 mt-[217px]'>
            <Banner/>
            <InfoCards/>
            <Services/>
            <DentalCare/>
            <MakeAppoinment/>
        </div>
    );
};

export default Home;