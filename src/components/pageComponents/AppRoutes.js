import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Destinations from './Destinations';
import TravelTips from './TravelTips';
import Gallery from './Gallery';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/travel-tips" element={<TravelTips />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
    );
}



export default AppRoutes;
