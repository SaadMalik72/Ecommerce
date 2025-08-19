import React from 'react';
import Image4 from "/Created Website/ECommers in react.js/Ecommerce/src/assets/category/gaming.png";
import Image5 from "/Created Website/ECommers in react.js/Ecommerce/src/assets/category/vr.png";
import Image6 from "/Created Website/ECommers in react.js/Ecommerce/src/assets/category/speaker.png";
import Button from '../Shared/button';

const Category = () => {
return (
    <div className="py-8">
        <div className="container">
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* First Col */}
                <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[350px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-white">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px]">With</p>
                            <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Gaming</p>
                            <Button
                                text= "Browse"
                                bgColor= {"bg-primary"}
                                textColor= {"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image4} alt="" className="w-[300px] absolute top-1/2 -translate-y-1/2 -right-0"/>
                </div>
                {/* Second Col */}
                <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[350px] flex items-start">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-white">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px]">With</p>
                            <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">VR</p>
                            <Button
                                text= "Browse"
                                bgColor= {"bg-white"}
                                textColor= {"text-brandGreen"}
                            />
                        </div>
                    </div>
                    <img src={Image5} alt="" className="w-[300px] absolute bottom-0"/>
                </div>
                {/* Third Col */}
                <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[350px] flex items-start">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-white">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px]">With</p>
                            <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Speaker</p>
                            <Button
                                text= "Browse"
                                bgColor= {"bg-white"}
                                textColor= {"text-brandBlue"}
                            />
                        </div>
                    </div>
                    <img src={Image6} alt="" className="w-[200px] absolute bottom-0 right-0"/>
                </div>
            </div>
        </div>
    </div>
)
}

export default Category;