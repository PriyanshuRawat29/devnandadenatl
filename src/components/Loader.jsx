import React from 'react';
import { FaTooth } from 'react-icons/fa';

const Loader = () => {
    return (
        <div className="preloader">
            <div className="loader-content">
                <div className="loader-icon">
                    <FaTooth />
                </div>
                <h3>Devnanda Dental</h3>
                <p className="loader-subtext">Precision • Care • Excellence</p>
                <div className="loader-bar"></div>
            </div>
        </div>
    );
};

export default Loader;
