import React from 'react';
import Banner from '../Home/Banner';
import AboutBuilding from '../Home/AboutBuilding';
import LocationDetails from '../Home/LocationDetails';
import CouponSection from '../Home/CouponSection';

const MainLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutBuilding></AboutBuilding>
            <LocationDetails></LocationDetails>
            <CouponSection></CouponSection>
            
        </div>
    );
};

export default MainLayout;