import React from 'react';
import Banner from '../Home/Banner';
import AboutBuilding from '../Home/AboutBuilding';
import LocationDetails from '../Home/LocationDetails';
import CouponSection from '../Home/CouponSection';
import ApartmentSection from '../Home/ApartmentSection';
import AboutUs from '../Home/AboutUs';
import Reviews from '../Home/Review';

const MainLayout = () => {
    return (
        <div>
            <Banner></Banner>
            
            <AboutBuilding></AboutBuilding>
            <AboutUs></AboutUs>
            <ApartmentSection></ApartmentSection>
            <LocationDetails></LocationDetails>
            <CouponSection></CouponSection>
            <Reviews></Reviews>
            
        </div>
    );
};

export default MainLayout;