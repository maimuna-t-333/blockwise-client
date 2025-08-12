import React from 'react';
import Banner from '../Home/Banner';
import AboutBuilding from '../Home/AboutBuilding';
import LocationDetails from '../Home/LocationDetails';
import CouponSection from '../Home/CouponSection';
import ApartmentSection from '../Home/ApartmentSection';

const MainLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutBuilding></AboutBuilding>
            <ApartmentSection></ApartmentSection>
            <LocationDetails></LocationDetails>
            <CouponSection></CouponSection>
            
        </div>
    );
};

export default MainLayout;