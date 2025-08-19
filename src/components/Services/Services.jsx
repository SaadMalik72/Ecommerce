import React from 'react';
import {
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
    {
        id:1,
        iocn: <FaCarSide className="text-4xl md:text-5xl text-primary"/>,
        title: "Free Shopping",
        description: "Free Shopping On All Order",
    },
    {
        id:2,
        iocn: <FaCheckCircle className="text-4xl md:text-5xl text-primary"/>,
        title: "Save Money",
        description: "30 Days Money Back",
    },
    {
        id:3,
        iocn: <FaWallet className="text-4xl md:text-5xl text-primary"/>,
        title: "Secure Payment",
        description: "All Payment Secure",
    },
    {
        id:4,
        iocn: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary"/>,
        title: "Online Support 24/7",
        description: "Techional Support 24/7",
    },
];

const Services = () => {
return (
    <div>
        <div className="container my-14 sm:my-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gay-4 gap-y-8">
                {ServiceData.map((data) => (
                        <div className="flex flex-col items-start sm:flex-row gap-4">
                            {data.iocn}
                            <div>
                                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                                <h1 className="text-gray-400 text-sm">{data.description}</h1>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </div>
    );
};

export default Services