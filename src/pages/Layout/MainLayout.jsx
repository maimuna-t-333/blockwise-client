import React from 'react';
import Banner from '../Home/Banner';
import AboutBuilding from '../Home/AboutBuilding';
import LocationDetails from '../Home/LocationDetails';

const MainLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutBuilding></AboutBuilding>
            <LocationDetails></LocationDetails>
            
        </div>
    );
};

export default MainLayout;