import React from 'react';
import Logo from "../../assets/Images/logo.png";
import AboutUsContent from './AboutUsContent';

function AboutHero() {
    const sections = [
        {
            title: 'Founding & Historic Moments',
            imageUrl: 'https://api.bnpbd.org/api/upload/images/about-us-l-3-af7f.png',
        },
        {
            title: 'A Brief History of Us',
            imageUrl: 'https://api.bnpbd.org/api/upload/images/about-us-l-4-88e9.png',
        },
        {
            title: 'Slogan, Flag & Electoral Symbol',
            imageUrl: 'https://api.bnpbd.org/api/upload/images/about-bnp-20--4563.jpg',
        },
    ];

    return (
        <div>
            <div className="relative text-center">
                <img 
                    src='https://api.bnpbd.org/api/upload/images/others-page-banner-1366420-1--e109f.jpg' 
                    alt='About Us Banner' 
                    className="w-full h-auto"
                />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 px-5 py-2 rounded-lg text-2xl">
                    About Us
                </h1>
            </div>
            
            <section className="text-center p-10 bg-gray-100 rounded-lg my-5 mx-auto w-full">
                <img 
                    src={Logo} 
                    alt='JCD Logo' 
                    className="w-36 mx-auto mb-5"
                />
                <h2 className="text-lg font-bold">Bangladesh Jatiotabadi Chatra Dal (JCD)</h2>
                <p className="max-w-2xl text-lg mx-auto">
                    was founded on January 1, 1979, based on the principles of Bangladeshi Nationalism,
                    an ideology that champions the rights of Bangladeshi students from all backgrounds,
                    regardless of their ethnicity, gender, or race.
                </p>
            </section>
            <AboutUsContent></AboutUsContent>

            <section className="flex justify-center gap-5 p-5 flex-wrap">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="w-96 h-96 bg-[#01523c] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="flex flex-col items-center justify-center h-full bg-[#01523c] bg-opacity-80 p-5 text-center">
                            <img
                                src={section.imageUrl}
                                alt={section.title}
                                className="max-w-full max-h-60 object-contain mb-5"
                            />
                            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default AboutHero;